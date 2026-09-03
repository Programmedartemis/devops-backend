# DevOps Assignment — Backend

Node.js + Express REST API for a task list app, deployed on AWS EC2 and connected to a MySQL database on Amazon RDS.

Frontend repo: https://github.com/Programmedartemis/devops-frontend

## Tech Stack
- Node.js + Express
- MySQL (Amazon RDS)

## API Routes
| Method | Route | Description |
|---|---|---|
| GET | `/` | Health check |
| GET | `/tasks` | Get all tasks |
| POST | `/tasks` | Create a new task (`{ "title": "..." }`) |
| DELETE | `/tasks/:id` | Delete a task by id |

## Deployment Summary
- Deployed on an Ubuntu EC2 instance (t2.micro, free tier)
- Security group: SSH restricted to my IP, port 5000 open for API access
- Connected to a MySQL database on RDS
- RDS is **not publicly accessible** — its security group only allows inbound MySQL traffic from the EC2 instance's security group
- Environment variables (DB credentials, port) are stored in a `.env` file on the server, excluded from version control via `.gitignore`

Live backend URL: http://34.229.178.169:5000

## Screenshots
See the `screenshots` folder for proof of deployment:
- `backend-devops.png` — health check response
- `inbound.png` — RDS inbound rules restricted to backend only

## Local Setup
```bash
npm install
cp .env.example .env   # fill in real DB credentials
node server.js
```
