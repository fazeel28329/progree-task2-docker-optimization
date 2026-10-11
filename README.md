# Progree Task 2 — Application Containerization & Asset Optimization

## Project Overview

This project demonstrates containerization of a Node.js and Express web application using Docker multi-stage builds.

Developed as part of the Progree DevOps Internship.

## Technologies Used

- Node.js
- Express.js
- Docker and Docker Desktop
- dotenv
- CORS

## Key Features

- Multi-stage Dockerfile
- Lightweight Alpine-based Docker image
- Production-only dependencies
- Environment variable configuration
- Non-root container execution
- Container port mapping
- Application health-check endpoint

## Project Structure

```text
progree-task2-docker-optimization/
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── .env.example
├── README.md
└── screenshots/
```

The `.env` file and `node_modules` directory are excluded from version control.

## Build Docker Image

```bash
docker build -t progree-task2:latest .
```

## Run Docker Container

First, create your local environment file:

```bash
cp .env.example .env
```

Run the container:

```bash
docker run -d --name progree-container --env-file .env -p 8082:3000 progree-task2:latest
```

## Application Endpoints

| Endpoint | Description |
|---|---|
| `http://localhost:8082` | Application homepage |
| `http://localhost:8082/health` | Application health status |
| `http://localhost:8082/api/info` | Project information |

## Verification Commands

```bash
docker ps
docker images progree-task2
docker history progree-task2:latest
docker logs progree-container
docker exec progree-container whoami
```

## Security and Optimization

- Uses a multi-stage Dockerfile to separate dependency installation from the production runtime.
- Uses `npm ci --omit=dev` to install production dependencies.
- Uses `.dockerignore` to exclude unnecessary files and local environment configuration.
- Runs the application as the non-root `node` user.
- Supports runtime configuration through environment variables.

## Internship Information

**Company:** Progree  
**Task:** 2 — Application Containerization & Asset Optimization  
**Domain:** DevOps

## Conclusion

This project demonstrates Docker containerization, production image optimization, environment configuration, and container networking for a Node.js web application.