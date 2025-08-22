import { useMemo } from "react";
import { usePatient } from "./usePatient";

export const useNote = (patientId: number, noteId: number) => {
  const { patient, ...rest } = usePatient(patientId);

  const note = useMemo(() => {
    if (!patient) {
      return null;
    }

    return patient.notes.find((note) => note.id === noteId);
  }, [patient, noteId]);

  return { patient, note, ...rest };
};
