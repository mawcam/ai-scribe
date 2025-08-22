import PatientCard from "./PatientCard";
import { usePatients } from "../hooks/usePatients";

const PatientList = () => {
  const { patients, loading, error } = usePatients();

  if (loading) {
    return (
      <div className="patient-list-wrapper">
        <div className="patient-list-header">
          <h1>Patients</h1>
          <div className="patient-list-subtitle">
            Manage your patient records
          </div>
        </div>
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading patients...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="patient-list-wrapper">
        <div className="patient-list-header">
          <h1>Patients</h1>
          <div className="patient-list-subtitle">
            Manage your patient records
          </div>
        </div>
        <div className="error-state">
          <div className="error-icon">⚠️</div>
          <p>Failed to load patients. Please try again.</p>
        </div>
      </div>
    );
  }

  if (patients.length === 0) {
    return (
      <div className="patient-list-wrapper">
        <div className="patient-list-header">
          <h1>Patients</h1>
          <div className="patient-list-subtitle">
            Manage your patient records
          </div>
        </div>
        <div className="empty-state">
          <div className="empty-icon">👥</div>
          <h2>No patients found</h2>
          <p>
            Start by adding your first patient to begin managing medical
            records.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="patient-list-wrapper">
      <div className="patient-list-header">
        <h1>Patients</h1>
        <div className="patient-list-subtitle">Manage your patient records</div>
        <div className="patient-count">
          {patients.length} {patients.length === 1 ? "patient" : "patients"}
        </div>
      </div>
      <div className="patient-list-grid">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default PatientList;
