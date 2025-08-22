import { Link } from "react-router-dom";
import type { Patient } from "../types/patient";
import { getNotesCountLabel } from "../lib/utils";

type Props = {
  patient: Patient;
};

const PatientCard = ({ patient }: Props) => {
  return (
    <Link to={`/patient/${patient.id}`} className="patient-card">
      <h1>{patient.fullname}</h1>
      <p>{getNotesCountLabel(patient.notes?.length ?? 0)}</p>
    </Link>
  );
};

export default PatientCard;
