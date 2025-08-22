import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Patient } from './patient';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  processedContent: string;

  @Column()
  rawContent: string;

  @Column({ nullable: true })
  audioUrl?: string;

  @ManyToOne(() => Patient, (patient) => patient.notes)
  patient: Patient;

  @Column()
  patientId: number;

  @CreateDateColumn()
  createdAt: Date;
}
