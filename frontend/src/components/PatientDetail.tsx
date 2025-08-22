import { useParams, Link } from "react-router-dom";
import { usePatient } from "../hooks/usePatient";
import NoteCard from "./NoteCard";

const PatientDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { patient, loading, error } = usePatient(Number(id));

  if (loading) {
    return <div>Loading patient details...</div>;
  }

  if (error || !patient) {
    return (
      <div>
        <p>{error || "Patient not found"}</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="patient-detail">
      <div className="patient-header">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
        <h1>{patient.fullname}</h1>
        <p>Patient ID: {patient.id}</p>
      </div>

      <div className="notes-section">
        <h2>Notes ({patient.notes?.length ?? 0})</h2>
        {patient.notes && patient.notes.length > 0 ? (
          <div className="notes-list">
            {patient.notes.map((note) => (
              <Link to={`/patient/${id}/note/${note.id}`} key={note.id}>
                <NoteCard note={note} />
              </Link>
            ))}
          </div>
        ) : (
          <p>No notes found for this patient.</p>
        )}
      </div>

      <div className="add-note-section">
        <Link to="/" className="add-note-button">
          Add New Note
        </Link>
      </div>
    </div>
  );
};

export default PatientDetail;
