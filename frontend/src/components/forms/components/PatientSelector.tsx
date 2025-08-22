import { usePatientsContext } from "../../../contexts/PatientsContext";

interface PatientSelectorProps {
  value?: string;
  onChange?: (value: string) => void;
}

const PatientSelector: React.FC<PatientSelectorProps> = ({
  value,
  onChange,
}) => {
  const { patients, loading, error } = usePatientsContext();

  if (loading) {
    return (
      <div className="patient-selector-loading">
        <div className="loading-spinner-small"></div>
        <span>Loading patients...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="patient-selector-error">
        <span className="error-icon-small">⚠️</span>
        <span>Error loading patients</span>
      </div>
    );
  }

  if (patients.length === 0) {
    return (
      <div className="patient-selector-empty">
        <span>No patients available</span>
      </div>
    );
  }

  return (
    <select
      name="patient"
      id="patient"
      required
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="patient-select"
    >
      <option value="">Select a patient</option>
      {patients.map((patient) => (
        <option key={patient.id} value={patient.id}>
          {patient.fullname}
        </option>
      ))}
    </select>
  );
};

export default PatientSelector;
