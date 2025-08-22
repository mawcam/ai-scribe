import { AppDataSource } from '../data-source';
import { Note } from '../entity/note';
import { Patient } from '../entity/patient';
import patientRepository from '../repository/patient';

export const getPatients = async (): Promise<Patient[]> => {
  const patients = await patientRepository.findAll();

  return patients;
};

export const getPatient = async (id: number): Promise<Patient> => {
  const patient = await patientRepository.findById(id);

  if (!patient) {
    throw new Error('Patient not found');
  }

  return patient;
};

export const getPatientNotes = async (id: number): Promise<Note[]> => {
  const patient = await patientRepository.findById(id);

  if (!patient) {
    throw new Error('Patient not found');
  }

  return patient.notes;
};
