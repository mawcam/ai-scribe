# AI Scribe Backend

A Node.js backend service built with TypeORM, Express, and OpenAI integration for medical transcription and patient management.

## Prerequisites

- Docker and Docker Compose installed on your system
- OpenAI API key

## Quick Start with Docker

### 1. Setup Environment Files

Before running the application, you need to create the required secret files:

```bash
# Create the database password file
mkdir -p db
echo "your-database-password" > db/password.txt

# Create the OpenAI API key file
mkdir -p openapi
echo "your-openai-api-key" > openapi/key.txt
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

The following environment variables are configured via Docker secrets:

- `DB_HOST`: Database host (default: db)
- `DB_PORT`: Database port (default: 5432)
- `DB_USERNAME`: Database username (default: postgres)
- `DB_PASSWORD_FILE`: Path to database password file
- `DB_NAME`: Database name (default: example)
- `OPENAI_API_KEY`: Path to OpenAI API key file

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
