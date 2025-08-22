# AI Scribe Backend

A Node.js backend service built with TypeORM, Express, and OpenAI integration for medical transcription and patient management.

## Prerequisites

- Docker and Docker Compose installed on your system
- OpenAI API key

## Quick Start with Docker

### 1. Setup Environment Variables

Before running the application, you need to create a `.env` file in the backend directory:

```bash
# Create the .env file
touch .env
```

Add the following variables to your `.env` file:

```env
DB_PASSWORD=your-database-password
OPENAI_API_KEY=your-openai-api-key
```

### 2. Build and Run with Docker Compose

```bash
# Build and start all services
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

The application will be available at `http://localhost:3000`

### 3. Stop the Services

```bash
# Stop all services
docker-compose down

# Stop and remove volumes (this will delete the database data)
docker-compose down -v
```

## Services

- **Server**: Node.js application running on port 3000
- **Database**: PostgreSQL database with persistent storage
- **Uploads**: Persistent volume for file uploads

## Environment Variables

The following environment variables are configured via `.env` file:

- `DB_HOST`: Database host (default: db)
- `DB_PORT`: Database port (default: 5432)
- `DB_USERNAME`: Database username (default: postgres)
- `DB_PASSWORD`: Database password (from .env file)
- `DB_NAME`: Database name (default: example)
- `OPENAI_API_KEY`: OpenAI API key (from .env file)

## Available Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with hot reload
- `npm run build`: Build the TypeScript application
- `npm run lint`: Run ESLint
- `npm run seed`: Run database seeding

## Database

The application uses PostgreSQL with TypeORM. The database data is persisted in a Docker volume (`db-data`).

## File Uploads

Uploaded files are stored in a persistent Docker volume (`uploads-data`) and are accessible at `/usr/src/app/uploads` within the container.

## Open API

Using open API for speech to text conversion and text processing for filling OASIS form. Defaulting to mocked data in case of an error.
