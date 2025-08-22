import 'reflect-metadata';
import express from 'express';
import patientsRoutes from './routes/patients.route';
import notesRoutes from './routes/notes.route';
import { errorHandler } from './middlewares/errorHandler';
import { AppDataSource } from './data-source';
import { seedPatients } from './seed';
import config from './config/config';
import cors from 'cors';

const app = express();

AppDataSource.initialize()
  .then(() => seedPatients())
  .catch((error) => console.log(error));

app.use(cors(config.corsOptions));
app.use(express.json());

// Routes
app.use('/api/patients', patientsRoutes);
app.use('/api/notes', notesRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
