## Create README.md for GitHub

Add a `README.md` file at the project root that documents the Stride website project for anyone viewing the repo on GitHub.

### What the README will include

1. **Project title & tagline** — "Stride — boutique virtual assistant firm website"
2. **Short description** — Marketing site with Home, About, Services, Team, and Contact pages, plus a working contact form that saves submissions to a backend database.
3. **Tech stack badges/list**
   - TanStack Start v1 (file-based routing in `src/routes/`)
   - React 19 + TypeScript
   - Vite 7
   - Tailwind CSS v4 + shadcn/ui components
   - Supabase (via Lovable Cloud) for the contact form database
   - Bun as the package manager
4. **Features list**
   - Multi-page responsive site (Home, About, Services, Team, Contact)
   - Dark/light theme toggle
   - Working contact form persisted to the database
   - SEO meta tags per route
5. **Local development setup**
   - Install Node.js 20+ and Bun
   - `git clone` instructions
   - Create `.env` file with the required Supabase variables (`VITE_SUPABASE_PROJECT_ID`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`)
   - `bun install`
   - `bun run dev` → opens http://localhost:5173
6. **Available scripts** — `dev`, `build`, `build:dev`, `preview`, `lint`, `format`
7. **Project structure** — short tree showing `src/routes/`, `src/components/`, `src/integrations/supabase/`, `supabase/migrations/`
8. **Editing the project** — two ways:
   - Edit on Lovable (link to the project) — changes auto-sync to GitHub
   - Edit locally in VS Code — pushes auto-sync back to Lovable
9. **Deployment** — note that the project is published via Lovable (Publish button) and can also be self-hosted since it's a standard TanStack Start app
10. **License** — leave as "Private" placeholder (user can change)

### Files to create

- `README.md` (root)

No code or dependency changes. Read-only documentation file.