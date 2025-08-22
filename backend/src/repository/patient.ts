import { AppDataSource } from '../data-source';
import { Patient } from '../entity/patient';
import type { Repository } from './interface';

class PatientRepository implements Repository<Patient> {
  async findAll(): Promise<Patient[]> {
    const repository = AppDataSource.getRepository(Patient);
    const patients = await repository.find({
      relations: {
        notes: true,
      },
    });

    return patients;
  }

  async findById(id: number): Promise<Patient | null> {
    const repository = AppDataSource.getRepository(Patient);
    const patient = await repository.findOne({
      where: { id },
      relations: {
        notes: true,
      },
    });

    return patient;
  }

  async create(entity: Patient): Promise<Patient> {
    return entity;
  }
}

export default new PatientRepository();
