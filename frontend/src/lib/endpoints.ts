import { API_URL } from "../constants";
import type { Patient } from "../types/patient";

export const getPatients = async (): Promise<Patient[]> => {
  try {
    const response = await fetch(`${API_URL}/api/patients`);

    if (!response.ok) {
      throw new Error("Failed to fetch patients");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPatient = async (patientId: number): Promise<Patient> => {
  try {
    const response = await fetch(`${API_URL}/api/patients/${patientId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch patient");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addNote = async (patientId: number, audioFile: File) => {
  const formData = new FormData();
  formData.append("audioFile", audioFile);

  try {
    const response = await fetch(`${API_URL}/api/notes/${patientId}`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to add note");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getNotes = async (patientId: number) => {
  const response = await fetch(`${API_URL}/api/notes/${patientId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  return response.json();
};

export const getNote = async (noteId: number) => {
  const response = await fetch(`${API_URL}/api/notes/${noteId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch note");
  }

  return response.json();
};
