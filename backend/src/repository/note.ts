import { AppDataSource } from '../data-source';
import { Note } from '../entity/note';
import type { Repository } from './interface';

class NoteRepository implements Repository<Note> {
  async findAll(): Promise<Note[]> {
    const repository = AppDataSource.getRepository(Note);
    const notes = await repository.find();

    return notes;
  }

  async findById(id: number): Promise<Note | null> {
    const repository = AppDataSource.getRepository(Note);
    const note = await repository.findOne({
      where: { id },
      relations: {
        patient: true,
      },
    });

    return note;
  }

  async create(entity: Note): Promise<Note> {
    const note = await AppDataSource.getRepository(Note).save(entity);
    return note;
  }
}

export default new NoteRepository();
