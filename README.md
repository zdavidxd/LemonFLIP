# LemonFLIP

LemonFLIP — Virtual-currency casino for Lemon SMP.

This repository contains a starter Next.js + Tailwind project with an MVP scaffold: homepage, lobby, admin shell, Prisma schema for Postgres, and a secured webhook endpoint that your Minecraft plugin can call to notify the site of completed in-game transfers (deposits/withdrawals).

Quick status
- Repo created under: zdavidxd/LemonFLIP
- MVP scaffold pushed: Next.js + Tailwind placeholders, Prisma schema, webhook endpoint.

Required environment variables (add these to Vercel or your env file):
- DATABASE_URL — PostgreSQL connection string (postgres://user:pass@host:port/db)
- WEBHOOK_SECRET — shared secret used to sign webhook requests from your Minecraft plugin
- NEXT_PUBLIC_BRAND_COLOR — optional (hex) brand color (default lemon if not set)

Webhook flow (recommended):
1. Player performs an in-game transfer handled by your Minecraft plugin (transfer money to the site `set` user, or the site `set` user to the player for withdrawals).
2. The plugin POSTs to /api/webhook/transfer with JSON: { type: "deposit" | "withdraw", depositId: string, minecraftName: string, amount: number }
3. The plugin computes HMAC-SHA256 of the request body (stringified) using WEBHOOK_SECRET and sends it in header `x-webhook-signature`.
4. The site validates the signature and credits/debits the player's balance in the database.

Important: The plugin must ensure the in-game transfer actually occurred before sending the webhook. The plugin is the authoritative source for in-game balance moves.

Next steps I can take now (choose one):
- Implement full game pages (Slots + Dice) with animations and provably-fair RNG (fast MVP)
- Wire Prisma migrations and a small API for user registration and wallet
- Provide deployment steps for Vercel and how to add DATABASE_URL and WEBHOOK_SECRET

If you want me to continue now, reply: "Continue and implement MVP games" or say which step to do next.
