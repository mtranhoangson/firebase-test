# CertMaster Pro

A modern certification exam preparation platform built with Next.js, Express, and PostgreSQL.

## Features

- User Authentication
- Certificate Catalog
- Exam Simulation
- Performance Tracking
- Personalized Recommendations
- Admin Dashboard

## Prerequisites

- Docker
- Docker Compose

## Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd certmaster-pro
```

### 2. Build and start the application
```bash
# Build and start all services
docker-compose up --build -d

# View logs
docker-compose logs -f
```

### 3. Initialize the database
```bash
# Run database migrations
docker-compose exec backend npx prisma migrate dev

# Seed the database with initial data
docker-compose exec backend npm run seed
```

### 4. Access the application
- Frontend: http://localhost:3000
- Admin Frontend: http://localhost:3001
- Backend API: http://localhost:4000

### 5. Default Admin Account
After seeding the database, you can log in with the following admin account:
- Email: admin@certmaster.com
- Password: admin123

## Development

### Backend Development
```bash
# Access backend container
docker-compose exec backend sh

# Run migrations
npx prisma migrate dev

# Run seed script
npm run seed

# Start development server
npm run dev
```

### Frontend Development
```bash
# Access frontend container
docker-compose exec frontend sh

# Start development server
npm run dev
```

### Database Management
```bash
# Access database
docker-compose exec db psql -U postgres -d certmaster

# Run migrations
docker-compose exec backend npx prisma migrate dev

# Reset database
docker-compose exec backend npx prisma migrate reset
```

## Environment Variables

### Backend (.env)
```
DATABASE_URL="postgresql://postgres:postgres@db:5432/certmaster"
JWT_SECRET="your-secret-key"
NODE_ENV="development"
PORT=4000
```

## Docker Services

### Frontend
- Port: 3000
- Build: `Dockerfile.frontend`
- Environment: NEXT_PUBLIC_API_URL=http://backend:4000

### Admin Frontend
- Port: 3001
- Build: `Dockerfile.admin`
- Environment: NEXT_PUBLIC_API_URL=http://backend:4000

### Backend
- Port: 4000
- Build: `backend/Dockerfile`
- Environment: 
  - DATABASE_URL=postgresql://postgres:postgres@db:5432/certmaster
  - NODE_ENV=development

### Database (PostgreSQL)
- Port: 5432
- Image: postgres:15
- Environment:
  - POSTGRES_USER=postgres
  - POSTGRES_PASSWORD=postgres
  - POSTGRES_DB=certmaster

## Troubleshooting

### Common Issues

1. **Database Connection Issues**
```bash
# Check database logs
docker-compose logs db

# Restart database
docker-compose restart db
```

2. **Migration Issues**
```bash
# Reset database and run migrations
docker-compose exec backend npx prisma migrate reset
```

3. **Container Issues**
```bash
# Rebuild and restart containers
docker-compose down
docker-compose up --build -d
```

## License

MIT
