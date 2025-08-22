import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../../lib/endpoints";
import AudioUploader from "./components/AudioUploader";
import FormGroup from "./components/FormGroup";
import PatientSelector from "./components/PatientSelector";
import { usePatientsContext } from "../../contexts/PatientsContext";

const MainForm = () => {
  const { refreshPatients } = usePatientsContext();

  const [selectedPatient, setSelectedPatient] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const patient = formData.get("patient");
      const audio = formData.get("audio");

      if (!patient || !audio) {
        alert("Please select a patient and upload an audio file");
        return;
      }

      await addNote(Number(patient), audio as File);
      await refreshPatients();

      // Navigate to patient detail page
      navigate(`/patient/${patient}`);

      // Reset form
      setSelectedPatient("");
      setSelectedFile(null);
      if (e.currentTarget?.reset) {
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("Error adding note:", error);
      alert("Failed to add note. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleReset = () => {
    setSelectedPatient("");
    setSelectedFile(null);
  };

  return (
    <div className="main-form-wrapper">
      <div className="main-form-header">
        <h1>Add New Note</h1>
        <p>
          Upload an audio recording to create a medical note for your patient
        </p>
      </div>

      <form onSubmit={onSubmit} onReset={handleReset} className="main-form">
        <div className="form-content">
          <FormGroup label="Patient" name="patient">
            <PatientSelector
              value={selectedPatient}
              onChange={setSelectedPatient}
            />
          </FormGroup>

          <FormGroup label="Audio Recording" name="audio">
            <AudioUploader
              onFileChange={handleFileChange}
              selectedFile={selectedFile}
            />
          </FormGroup>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            disabled={isSubmitting || !selectedPatient || !selectedFile}
            className="submit-button"
          >
            {isSubmitting ? (
              <>
                <div className="button-spinner"></div>
                Processing...
              </>
            ) : (
              <>
                <span className="button-icon">📝</span>
                Create Note
              </>
            )}
          </button>

          <button type="reset" className="reset-button" disabled={isSubmitting}>
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainForm;
