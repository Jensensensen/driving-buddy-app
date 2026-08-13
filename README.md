# driving-buddy-app

DrivePass — a platform connecting learner drivers with driving instructors and
community supervising drivers. Built with Next.js (App Router), MUI, Prisma and
better-auth.

## Getting Started

```bash
npm install
npx prisma generate   # generates the Prisma client into src/generated/prisma
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

A `.env` file with `DATABASE_URL` (Postgres) and `NEXT_PUBLIC_BETTER_AUTH_URL`
is required before the database and auth routes will work.

## Project Structure

```
prisma/schema.prisma      Database schema (Postgres via Prisma)
public/                   Static assets
src/
  app/                    Next.js App Router — routes only
    (auth)/               Auth pages: sign-in, sign-up
    (main)/               Public/app pages behind the shared navbar
    api/auth/             Auth route handlers
    layout.tsx            Root layout
    page.tsx              Landing page
  components/             Shared React components
    auth/                 Auth-specific components
    icons/                Icon components
    layout/               Navbar and other layout chrome
  theme/                  MUI theme: primitives, customizations, AppTheme provider
  lib/                    Server/client helpers (Prisma client, better-auth setup)
  generated/prisma/       Prisma client output (git-ignored, run `prisma generate`)
```

Imports use the `@/*` alias, which maps to `src/*`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## To Be Implemented

- Logout Button
- Logout endpoint
- Replace signin/signup with better auth functionality
- Redo design with google stitch
