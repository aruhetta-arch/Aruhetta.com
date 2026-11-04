Aruhetta

A modern entertainment and community platform.

Aruhetta is a web platform project focused on entertainment, digital tools, articles, and community interaction.

The project aims to bring useful features and engaging content together in one accessible platform.

«Status: In Development 🚧»

✨ Planned Features

- Home — Main page and featured content.
- Articles — Articles, information, and editorial content.
- Arumunity — Community discussions, groups, and events.
- Tools — Collection of useful web-based tools.
- User Accounts — Profiles, authentication, and preferences.
- Bookmarks — Save and organize favorite content.
- Dark & Light Mode — Theme customization.
- Progressive Web App — Installable experience and selected offline features.

Features are planned and may change during development.

🛠️ Technology Stack

Frontend

- HTML5
- CSS3
- JavaScript (ES Modules)
- Vite
- Lucide Icons
- Plus Jakarta Sans

Backend

- Supabase
- PostgreSQL
- Supabase Authentication
- Supabase Storage
- Supabase Edge Functions

Development & Deployment

- GitHub
- GitHub Pages
- GitHub Actions
- Git

📁 Project Structure

The following is the planned project structure:

Aruhetta.com/
├── index.html
├── about.html
├── arumunity.html
├── tools.html
├── login.html
├── signup.html
├── profile.html
├── pages/
├── src/
│   ├── styles/
│   ├── js/
│   └── assets/
├── public/
├── supabase/
├── tests/
├── docs/
├── .github/
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

This structure is a planning reference and will be implemented progressively.

🌐 Architecture

Aruhetta is planned with a hybrid architecture:

- Frontend: Hosted on GitHub Pages.
- Backend: Powered by Supabase.
- Database: PostgreSQL.
- Storage: Supabase Storage.
- Deployment: Automated using GitHub Actions.

🚀 Development Status

Aruhetta is currently in its initial repository preparation phase.

Component| Status
GitHub Repository| Ready
Git Branches| Ready
Repository Configuration| In Progress
Frontend Foundation| Planned
Supabase Backend| Planned
Authentication| Planned
Deployment Pipeline| Planned

🌱 Branch Strategy

- "main" — Production branch.
- "development" — Main development branch.
- "feature/*" — Individual feature development.

🔐 Security

- Environment secrets must not be committed.
- ".env" files are excluded through ".gitignore".
- ".env.example" contains configuration templates only.
- Supabase database access must be protected with Row Level Security (RLS).
- Never expose the Supabase Service Role Key in frontend code.

📖 Documentation

Additional technical documentation will be maintained in the "docs/" directory as the project develops.

📄 License

The project's licensing terms have not yet been finalized.

---

Aruhetta — Explore, Create, and Connect.
