import { Request, Response, NextFunction } from 'express';
import { addNote as addNoteService } from '../services/note.service';

// Extend Request type to include multer file
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

export const addNote = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No audio file provided' });
    }

    const note = await addNoteService(Number(req.params.patientId), req.file);

    res.status(201).json(note);
  } catch (error) {
    next(error);
  }
};
