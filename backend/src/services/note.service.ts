import { AppDataSource } from '../data-source';
import { Note } from '../entity/note';
import { Patient } from '../entity/patient';
import { mockedProcessAudio } from '../mock/api';
import { processAudio } from './transcriber.service';
import noteRepository from '../repository/note';

export const addNote = async (
  patientId: number,
  audioFile: Express.Multer.File,
): Promise<Note> => {
  const patient = await AppDataSource.getRepository(Patient).findOne({
    where: { id: patientId },
  });

  if (!patient) {
    throw new Error('Patient not found');
  }

  const { rawContent, processedContent } = await processAudio(audioFile);

  const note = new Note();
  note.patientId = patientId;
  note.patient = patient;
  note.audioUrl = audioFile.path;
  note.rawContent = rawContent;
  note.processedContent = processedContent;

  if (!processedContent || !rawContent) {
    console.error('File could not be processed, returning mocked note');
    const { raw: mockedRaw, processed: mockedProcessed } = mockedProcessAudio();
    note.rawContent = mockedRaw;
    note.processedContent = mockedProcessed;
  }

  await noteRepository.create(note);

  return note;
};
