import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Patient } from "../types/patient";
import { getPatients } from "../lib/endpoints";
import type { Note } from "../types/notes";

interface PatientsContextType {
  patients: Patient[];
  loading: boolean;
  error: string | null;
  refreshPatients: () => Promise<void>;
  appendNote: (note: Note) => void;
}

const PatientsContext = createContext<PatientsContextType | undefined>(
  undefined
);

interface PatientsProviderProps {
  children: ReactNode;
}

export const PatientsProvider: React.FC<PatientsProviderProps> = ({
  children,
}) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPatients = async () => {
    setLoading(true);
    setError(null);
    try {
      const patientsData = await getPatients();
      setPatients(patientsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch patients");
      console.error("Error fetching patients:", err);
    } finally {
      setLoading(false);
    }
  };

  const refreshPatients = async () => {
    await fetchPatients();
  };

  const appendNote = (note: Note) => {
    setPatients((prevPatients) => {
      const newPatients = [...prevPatients];
      const patient = newPatients.find(
        (patient) => patient.id === note.patientId
      );
      if (patient) {
        patient.notes.push(note);
        return newPatients;
      }
      return prevPatients;
    });
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const value: PatientsContextType = {
    patients,
    loading,
    error,
    refreshPatients,
    appendNote,
  };

  return (
    <PatientsContext.Provider value={value}>
      {children}
    </PatientsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePatientsContext = (): PatientsContextType => {
  const context = useContext(PatientsContext);

  if (context === undefined) {
    throw new Error(
      "usePatientsContext must be used within a PatientsProvider"
    );
  }

  return context;
};
