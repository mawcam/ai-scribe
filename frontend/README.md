# AI Scribe Frontend

A React-based frontend application for AI Scribe, a medical transcription and patient management system. Built with React 19, TypeScript, and Vite for optimal development experience.

## Features

- **Patient Management**: View and manage patient information
- **Audio Transcription**: Upload audio files for AI-powered medical transcription
- **Note Management**: Create, view, and manage medical notes
- **Modern UI**: Clean and responsive interface built with React
- **Type Safety**: Full TypeScript support for better development experience

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- AI Scribe Backend running (see backend README for setup instructions)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Backend URL

The frontend is configured to connect to the backend at `http://localhost:3000` by default. If your backend is running on a different URL, update the `API_URL` in `src/constants.ts`:

```typescript
export const API_URL = "http://your-backend-url:port";
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### 4. Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### 5. Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
src/
├── components/          # React components
│   ├── forms/          # Form components
│   │   ├── components/ # Form sub-components
│   │   └── MainForm.tsx
│   ├── NoteCard.tsx    # Note display component
│   ├── NoteDetail.tsx  # Note detail view
│   ├── PatientCard.tsx # Patient display component
│   ├── PatientDetail.tsx # Patient detail view
│   └── PatientList.tsx # Patient list component
├── contexts/           # React contexts
│   └── PatientsContext.tsx
├── hooks/              # Custom React hooks
│   ├── useNote.ts
│   ├── usePatient.ts
│   └── usePatients.ts
├── lib/                # Utility libraries
│   ├── endpoints.ts    # API endpoints
│   └── utils.ts
├── types/              # TypeScript type definitions
│   ├── notes.ts
│   └── patient.ts
├── App.tsx             # Main application component
├── constants.ts        # Application constants
├── global.css          # Global styles
└── main.tsx           # Application entry point
```

## API Integration

The frontend communicates with the AI Scribe backend through RESTful APIs:

- **Patients**: CRUD operations for patient management
- **Notes**: Create and retrieve medical notes with audio transcription
- **Audio Upload**: File upload for medical audio transcription

## Technologies Used

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **ESLint** - Code linting and quality enforcement

## Development

### Code Quality

The project uses ESLint for code quality enforcement. Run the linter with:

```bash
npm run lint
```

### TypeScript

The project is fully typed with TypeScript. Type definitions are available in the `src/types/` directory.

### Styling

Global styles are defined in `src/global.css`. Component-specific styles can be added as needed.

## Deployment

The application can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.) after building with `npm run build`.

Make sure to update the `API_URL` in `src/constants.ts` to point to your production backend URL before deployment.

## Contributing

1. Follow the existing code style and TypeScript patterns
2. Ensure all new code passes ESLint checks
3. Test your changes thoroughly
4. Update documentation as needed
