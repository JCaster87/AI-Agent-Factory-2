# AI Agent Factory (MVP)

Spin up AI agents that run on a schedule and deliver results (emails, CSVs, dashboards) without code.

## Stack
- Next.js 14 (App Router) + TypeScript + Tailwind + shadcn/ui
- Supabase (Auth + Postgres) + Drizzle ORM
- Stripe (subscriptions) • Resend (email) • OpenAI (LLM)
- Vercel (hosting + Cron)

## Quick Start
1. **Clone & install**
   ```bash
   pnpm i  # or npm i / yarn
   ```
2. **Create services**
   - Supabase project → copy URL + anon key + service role key
   - Stripe products: BASIC/PRO/SCALE (recurring monthly)
   - Resend domain & API key
   - OpenAI API key
3. **Env**
   Copy `.env.example` to `.env.local` and fill values.
4. **DB (apply schema)**
   ```bash
   pnpm drizzle:push
   ```
5. **Run dev**
   ```bash
   pnpm dev
   ```
6. **Deploy**
   - Push to GitHub, import repo into Vercel, set env vars
   - Add Vercel Cron: `*/5 * * * *` → `GET /api/cron/run`

## Commands
```bash
pnpm dev           # start
pnpm build         # build
pnpm start         # prod
pnpm drizzle:push  # apply schema
pnpm lint          # lint
```

## Notes
- Use Supabase Row Level Security (RLS) policies to scope data by `userId`.
- Cron uses an API route; no separate worker needed.
- Add shadcn components on demand with `pnpm dlx shadcn@latest add button input card`.
