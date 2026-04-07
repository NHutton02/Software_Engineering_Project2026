# StudyPilot – AI Study Planning Assistant

## Overview

StudyPilot is an AI-powered academic planning application designed to help students organize coursework and manage their study time more effectively. The system allows users to track their classes and assignments while generating personalized study schedules based on deadlines, workload, and availability.

Many students struggle to keep track of assignments across multiple platforms such as learning management systems, calendars, and notes. StudyPilot centralizes this information and uses AI to create a structured study plan to help students stay organized and meet deadlines.

This project is being developed as part of **COSC 412 – Software Engineering**.

---

## Current Progress
we completed the foundational setup of the StudyPilot application, including project initialization, version control integration, and backend configuration.

## Completed Work
- Initialized full-stack project structure (frontend, backend, docs)
- Set up GitHub repository for team collaboration
- Configured backend using Node.js and Express
- Installed core dependencies:
  - Express (server framework)
  - PostgreSQL client (database connectivity)
  - Authentication libraries (JWT)
- Implemented a basic Express server 
- Created a working API health-check endpoint: GET /api/health


## Development Status

- Project Setup: Complete 🟢
- Backend Development: In Progress 🟡
- Frontend Development: In Progress 🟡
- AI Planner Module: In Progress 🟡

## Next Steps

- Implement user authentication (login/register)
- Connect backend to PostgreSQL database
- Develop course and assignment APIs
- Integrate frontend with backend services
- Begin AI-based scheduling algorithm

## Features

- **Course Management** – Add and manage courses for the semester  
- **Assignment Tracking** – Create assignments with due dates, priorities, and estimated effort  
- **AI Study Planner** – Automatically generate a study schedule based on assignments and deadlines  
- **Dashboard View** – View upcoming assignments and study sessions in one place  
- **Dynamic Application** – Supports full CRUD operations for managing academic data  

---

## Technology Stack

### Frontend
- React

### Backend
- Node.js
- Express

### Database
- PostgreSQL

### Authentication
- JWT-based authentication

### AI Integration
- AI-assisted scheduling module for generating study plans

---

## System Architecture

The application follows a standard client–server architecture:
Frontend (React)
|
v
Backend API (Node / Express)
|
v
Database (PostgreSQL)
|
v
AI Planner Module


The AI planner analyzes assignment deadlines and estimated work time to generate recommended study sessions.

---

## Project Structure


StudyPilot
│
├── frontend
│ ├── components
│ ├── pages
│ └── services
│
├── backend
│ ├── routes
│ ├── controllers
│ ├── models
│ └── database
│
└── docs
└── project documentation and diagrams


---

## Team Members

- Noah Hutton  
- Jacob Dickson 
- Trey Simpson   
- Stokely Gaines  

---
