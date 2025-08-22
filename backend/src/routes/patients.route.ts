import { Router } from 'express';
import {
  getPatient,
  getPatients,
  getPatientNotes,
} from '../controllers/patients.controller';

const router = Router();

router.get('/', getPatients);
router.get('/:id', getPatient);
router.get('/:id/notes', getPatientNotes);

export default router;
