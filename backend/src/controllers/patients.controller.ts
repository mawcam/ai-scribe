import { Request, Response, NextFunction } from 'express';
import {
  getPatients as getPatientsService,
  getPatient as getPatientService,
  getPatientNotes as getPatientNotesService,
} from '../services/patient.service';

export const getPatients = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const patients = await getPatientsService();

    res.status(201).json(patients);
  } catch (error) {
    next(error);
  }
};

export const getPatient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const patient = await getPatientService(Number(req.params.id));
    res.status(201).json(patient);
  } catch (error) {
    next(error);
  }
};

export const getPatientNotes = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const notes = await getPatientNotesService(Number(req.params.id));
    res.status(201).json(notes);
  } catch (error) {
    next(error);
  }
};
