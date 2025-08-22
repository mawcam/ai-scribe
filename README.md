# AI Scribe

A comprehensive medical transcription and patient management system with AI-powered audio processing capabilities. Built with a Node.js backend and React frontend.

## Overview

AI Scribe is a full-stack application that helps healthcare professionals manage patients and transcribe medical audio recordings using OpenAI's speech-to-text technology. The system features a modern web interface for patient management and note creation, with robust backend services for data persistence and AI processing.

## Features

- **Audio Transcription**: AI-powered medical audio transcription using OpenAI
- **Modern UI**: Clean and responsive React interface
- **Type Safety**: Full TypeScript support across the entire stack
- **Docker Support**: Easy deployment with Docker and Docker Compose
- **Database Persistence**: PostgreSQL database with TypeORM
- **File Upload**: Secure audio file upload and storage

## Project Structure

```
AI Scribe/
├── backend/           # Node.js backend service
│   ├── src/          # Source code
│   ├── db/           # Database configuration
│   ├── openapi/      # OpenAI configuration
│   └── docker-compose.yml
└── frontend/         # React frontend application
    ├── src/          # Source code
    ├── public/       # Static assets
    └── package.json
```

## Prerequisites

- **Docker and Docker Compose** (for backend)
- **Node.js** (version 18 or higher, for frontend development)
- **OpenAI API key**
- **npm or yarn** package manager

## Quick Start

### 1. Backend Setup

#### Environment Configuration

Before running the backend, create the required secret files:

```bash
cd backend

# Create the database password file
mkdir -p db
echo "your-database-password" > db/password.txt

# Create the OpenAI API key file
mkdir -p openapi
echo "your-openai-api-key" > openapi/key.txt
```

#### Start Backend Services

```bash
# Build and start all services
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

The backend API will be available at `http://localhost:3000`

### 2. Frontend Setup

#### Install Dependencies

```bash
cd frontend
npm install
```

#### Configure Backend URL (if needed)

The frontend is configured to connect to the backend at `http://localhost:3000` by default. If your backend is running on a different URL, update the `API_URL` in `frontend/src/constants.ts`:

```typescript
export const API_URL = "http://your-backend-url:port";
```

#### Start Development Server

```bash
npm run dev
```

The frontend application will be available at `http://localhost:5173`

### 3. Stop Services

```bash
# Stop backend services
cd backend
docker-compose down

# Stop frontend development server
# (Ctrl+C in the frontend terminal)
```

## Services

### Backend Services

- **Server**: Node.js application running on port 3000
- **Database**: PostgreSQL database with persistent storage
- **Uploads**: Persistent volume for file uploads

### Frontend Services

- **Development Server**: React development server with hot reload
- **Production Build**: Optimized build for deployment

## Environment Variables

### Backend (Docker Secrets)

- `DB_HOST`: Database host (default: db)
- `DB_PORT`: Database port (default: 5432)
- `DB_USERNAME`: Database username (default: postgres)
- `DB_PASSWORD_FILE`: Path to database password file
- `DB_NAME`: Database name (default: example)
- `OPENAI_API_KEY`: Path to OpenAI API key file

## Available Scripts

### Backend

```bash
cd backend
npm start          # Start the production server
npm run dev        # Start the development server with hot reload
npm run build      # Build the TypeScript application
npm run lint       # Run ESLint
npm run seed       # Run database seeding
```

### Frontend

```bash
cd frontend
npm run dev        # Start development server with hot reload
npm run build      # Build the application for production
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint to check code quality
```

## Database

The application uses PostgreSQL with TypeORM for data persistence. The database data is persisted in a Docker volume (`db-data`) and includes:

- **Patients**: Patient information and demographics
- **Notes**: Medical notes with transcription data
- **File Storage**: Audio files and uploads

## API Integration

The frontend communicates with the backend through RESTful APIs:

- **Patients**: CRUD operations for patient management
- **Notes**: Create and retrieve medical notes with audio transcription
- **Audio Upload**: File upload for medical audio transcription

## Technologies Used

### Backend

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeORM** - Object-relational mapping
- **PostgreSQL** - Database
- **OpenAI API** - Speech-to-text and AI processing
- **Docker** - Containerization

### Frontend

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **ESLint** - Code linting and quality enforcement

## Development

### TypeScript

The entire project is fully typed with TypeScript. Type definitions are available in the respective `src/types/` directories.

## Deployment

### Backend Deployment

The backend is designed for Docker deployment:

```bash
cd backend
docker-compose up -d --build
```

### Frontend Deployment

The frontend can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.):

```bash
cd frontend
npm run build
```
