import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Patient } from './entity/patient';
import { Note } from './entity/note';
import fs from 'fs';

// Read password from file if DB_PASSWORD_FILE is set
const getPassword = () => {
  if (process.env.DB_PASSWORD_FILE) {
    try {
      return fs.readFileSync(process.env.DB_PASSWORD_FILE, 'utf8').trim();
    } catch (error) {
      console.warn('Could not read password file, using default password');
      return 'postgres';
    }
  }
  return process.env.DB_PASSWORD || 'postgres';
};

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'db',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: getPassword(),
  database: process.env.DB_NAME || 'example',
  synchronize: true,
  logging: false,
  entities: [Patient, Note],
  migrations: [],
  subscribers: [],
});
