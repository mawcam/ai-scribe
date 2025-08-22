import { useMemo } from "react";
import { usePatients } from "./usePatients";

export const usePatient = (id: number) => {
  const { patients, ...rest } = usePatients();

  const patient = useMemo(() => {
    return patients.find((patient) => patient.id === id);
  }, [patients, id]);

  return { patient, ...rest };
};
