import { Router } from 'express';
import { addNote } from '../controllers/notes.controller';
import { upload } from '../config/multer';

const router = Router();

router.post('/:patientId', upload.single('audioFile'), addNote);

export default router;
