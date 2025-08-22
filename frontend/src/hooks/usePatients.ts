import { usePatientsContext } from "../contexts/PatientsContext";

export const usePatients = () => {
  const context = usePatientsContext();

  return context;
};
