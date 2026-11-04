Aruhetta — Technical Architecture

Document Version: 1.0
Project: Aruhetta
Status: Planned

1. Overview

Aruhetta uses a modular hybrid architecture combining a static frontend hosted on GitHub Pages with a managed backend powered by Supabase.

The architecture separates presentation, application logic, backend services, and persistent data to support maintainability and future expansion.

2. System Architecture

USER
  |
  v
ARUHETTA FRONTEND
GitHub Pages
  |
  +-- HTML Pages
  +-- CSS Design System
  +-- JavaScript ES Modules
  +-- Vite Build System
  |
  v
APPLICATION LAYER
  |
  +-- Router
  +-- Components
  +-- Features
  +-- Utilities
  |
  v
SUPABASE CLIENT
  |
  +-- Authentication
  +-- PostgreSQL Database
  +-- Storage
  +-- Edge Functions
  |
  v
ARUHETTA DATA

3. Technology Stack

Frontend

- HTML5
- CSS3
- Vanilla JavaScript
- JavaScript ES Modules
- Vite
- Lucide Icons
- Plus Jakarta Sans

Backend

- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- Supabase Edge Functions

Infrastructure

- GitHub Repository
- GitHub Pages
- GitHub Actions
- Supabase Cloud

4. Frontend Architecture

The frontend follows a modular structure.

Core

Handles shared application functionality:

- Configuration
- Routing
- Event management
- Error handling

Components

Contains reusable interface components:

- Header
- Sidebar
- Footer
- Modal
- Toast notifications

Features

Contains independent application features:

- Authentication
- Profiles
- Articles
- Community
- Tools
- Bookmarks
- Notifications
- Search
- Media

Services

Handles communication with backend services:

- Supabase client
- Authentication service
- Database service
- Storage service

Utilities

Contains reusable helper functions:

- Validation
- Date formatting
- Number formatting
- General helpers

Pages

Contains page-specific application logic.

5. Backend Architecture

Supabase provides the primary backend infrastructure.

Services include:

- Authentication and session management.
- PostgreSQL database.
- File and media storage.
- Edge Functions for server-side operations.

Database access must use Row Level Security (RLS) policies.

Sensitive server credentials must never be exposed in frontend code.

6. Routing Strategy

Aruhetta uses hybrid client-side routing with separate HTML entry pages.

Requirements:

- Direct page access.
- Browser refresh support.
- Internal navigation.
- Dynamic page parameters.
- Consistent navigation behavior.

7. Environment Configuration

Environment variables are managed separately for each deployment environment.

Examples:

- Development
- Staging
- Production

Frontend environment variables must not contain private server secrets.

8. Security Principles

- HTTPS communication.
- Supabase RLS policies.
- Input validation.
- Authentication and authorization checks.
- Rate limiting for sensitive operations.
- Secure session handling.
- No exposed Service Role Key.
- Sensitive information must be redacted from logs.

9. Deployment Architecture

Frontend

GitHub Actions builds the Vite application and deploys the generated output to GitHub Pages.

Backend

Supabase manages database, authentication, storage, and server-side functions.

10. Development Workflow

1. Create or select a feature branch.
2. Implement the feature.
3. Run development checks.
4. Build and test the application.
5. Merge approved changes into "development".
6. Validate the integrated application.
7. Release approved changes to "main".

11. Future Expansion

The architecture should support:

- Progressive Web App.
- Advanced community features.
- Additional tools.
- Content management.
- Analytics.
- Administrative dashboards.
- Additional backend services.

12. Architecture Status

This document describes the planned architecture. Implementation details may be updated as the project evolves.
