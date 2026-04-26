# Stride

> Boutique virtual assistant firm — marketing website.

Stride is a multi-page marketing site for a boutique virtual assistant firm helping busy professionals move faster: emails, calendars, CRM and everything in between. It includes a working contact form whose submissions are persisted to a backend database.

Built with [Lovable](https://lovable.dev) and editable both in Lovable and locally in your IDE — changes sync both ways via GitHub.

---

## Tech stack

- **[TanStack Start v1](https://tanstack.com/start)** — file-based routing in `src/routes/`, SSR-ready
- **React 19** + **TypeScript** (strict)
- **Vite 7** as the build tool
- **Tailwind CSS v4** + **[shadcn/ui](https://ui.shadcn.com)** components
- **Supabase** (via Lovable Cloud) for the contact form database
- **Bun** as the package manager

## Features

- Multi-page responsive site: **Home**, **About**, **Services**, **Team**, **Contact**
- Light/dark theme toggle
- Contact form persisted to a backend database (Lovable Cloud)
- Per-route SEO meta tags (title, description, Open Graph)
- 404 + error boundaries built into the router

---

## Run locally in VS Code

### 1. Prerequisites

- **Node.js 20+** — https://nodejs.org
- **Bun** (the project's package manager — `bun.lockb` is committed):
  - macOS / Linux: `curl -fsSL https://bun.sh/install | bash`
  - Windows: `powershell -c "irm bun.sh/install.ps1 | iex"`
- **VS Code** — https://code.visualstudio.com
- Recommended VS Code extensions: ESLint, Prettier, Tailwind CSS IntelliSense

> If you'd rather use npm, delete `bun.lockb` first and use `npm install` / `npm run dev`.

### 2. Clone the repo

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
code .
```

### 3. Create a `.env` file

The `.env` file is auto-managed by Lovable and is **not** pushed to GitHub. Create it manually in the project root with these values:

```env
VITE_SUPABASE_PROJECT_ID="xqtqvdpxjbrrtiebmepd"
VITE_SUPABASE_URL="https://xqtqvdpxjbrrtiebmepd.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="your-publishable-key"
SUPABASE_URL="https://xqtqvdpxjbrrtiebmepd.supabase.co"
SUPABASE_PUBLISHABLE_KEY="your-publishable-key"
```

You can copy the exact values from your Lovable project (they're safe publishable keys, not secrets). This connects local dev to the same backend so contact form submissions still land in the database.

### 4. Install and run

```bash
bun install
bun run dev
```

Open the URL it prints (usually **http://localhost:5173**).

---

## Available scripts

| Command            | What it does                          |
| ------------------ | ------------------------------------- |
| `bun run dev`      | Start the local dev server            |
| `bun run build`    | Build for production                  |
| `bun run build:dev`| Build with development mode settings  |
| `bun run preview`  | Preview the production build locally  |
| `bun run lint`     | Run ESLint                            |
| `bun run format`   | Format the codebase with Prettier     |

---

## Project structure

```
.
├── src/
│   ├── routes/                  # File-based routes (TanStack Router)
│   │   ├── __root.tsx           # Root layout (html/head/body shell)
│   │   ├── index.tsx            # / (home)
│   │   ├── about.tsx            # /about
│   │   ├── services.tsx         # /services
│   │   ├── team.tsx             # /team
│   │   └── contact.tsx          # /contact (contact form)
│   ├── components/              # Reusable components
│   │   ├── site-nav.tsx
│   │   ├── site-footer.tsx
│   │   ├── theme-toggle.tsx
│   │   └── ui/                  # shadcn/ui primitives
│   ├── integrations/supabase/   # Supabase client (auto-generated, do not edit)
│   ├── hooks/                   # React hooks
│   ├── lib/                     # Utilities
│   ├── styles.css               # Tailwind + design tokens
│   ├── router.tsx               # Router config
│   └── routeTree.gen.ts         # Auto-generated route tree (do not edit)
├── supabase/
│   ├── config.toml              # Supabase project config
│   └── migrations/              # SQL migrations
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## Editing the project

You have two equivalent ways to edit:

**1. Edit on Lovable** — open the project in [Lovable](https://lovable.dev) and prompt for changes. Edits auto-push to this GitHub repo.

**2. Edit locally** — clone the repo, make changes in VS Code, push to GitHub. Pushes auto-sync back into Lovable.

Pull before you start working locally: `git pull`.

---

## Deployment

The easiest way to deploy is from inside Lovable: open the project, click **Publish** (top right), and you get a live URL.

Because this is a standard TanStack Start app, you can also self-host it anywhere that supports Node.js or Cloudflare Workers (the project ships with a `wrangler.jsonc` for Workers). Run `bun run build` and deploy the build output.

---

## Notes

- `src/integrations/supabase/client.ts` and `src/integrations/supabase/types.ts` are auto-generated by Lovable — don't edit them by hand.
- `src/routeTree.gen.ts` is auto-generated by the TanStack Router Vite plugin — don't edit it.
- The dev server runs on Node. Production runs on Cloudflare Workers.

## License

Private project. All rights reserved.