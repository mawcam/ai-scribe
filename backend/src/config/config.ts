import dotenv from 'dotenv';
import type { CorsOptions } from 'cors';

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  corsOptions: CorsOptions;
}

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'dev',
  corsOptions,
};

export default config;
