<!-- BEGIN:nextjs-agent-rules -->

## Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`.
Your training data is outdated — the docs are the source of truth.

<!-- END:nextjs-agent-rules -->

---

## Project overview

`e-commerce-platform` is a modern Next.js 16 starter with a production-grade toolchain baked in.
It uses the App Router, React 19, Tailwind CSS v4, shadcn/ui, and Feature-Sliced Design (FSD) for architecture.
The package manager is **Bun** — no npm or yarn anywhere in the repo.

**Core stack:**

| Layer           | Choice                                                |
| --------------- | ----------------------------------------------------- |
| Framework       | Next.js 16 (App Router, Turbopack)                    |
| Language        | TypeScript 5, strict mode                             |
| UI primitives   | shadcn/ui (Radix-based)                               |
| Styling         | Tailwind CSS v4 + `tailwind-merge` + `tw-animate-css` |
| Forms           | `react-hook-form` v7 + Zod v4 + `@hookform/resolvers` |
| Icons           | `lucide-react`                                        |
| Package manager | Bun 1.1+                                              |

---

## Build and test commands

```bash
# Install dependencies
bun install

# Start dev server (Turbopack)
bun dev

# Production build
bun build

# Start production server
bun start

# Type-check (no emit)
bun typecheck

# Lint
bun lint

# Lint with auto-fix
bun lint:fix

# Format (write)
bun format

# Format (check only)
bun format:check
```

**Before finishing any task**, always run:

```bash
bun typecheck && bun lint
```

Fix all type errors and lint errors before marking a task done. Warnings should be addressed where practical.

---

## Architecture — Feature-Sliced Design (FSD)

This project follows [Feature-Sliced Design](https://feature-sliced.design).
Every file lives in exactly one layer, one slice, and one segment.

### Layer structure

```
src/
├── app/          # Next.js App Router routes, layouts, providers, global styles
├── widgets/      # Self-contained page sections composed from features + entities
├── features/     # User-facing interactions (actions the user performs)
├── entities/     # Business objects and their UI/model (user, post, order…)
└── shared/       # Reusable kit with no business meaning (ui, lib, api, config)
```

### Segments inside each slice

```
<layer>/<slice>/
├── ui/           # Components and styles
├── model/        # State, stores, selectors, types
├── api/          # Server actions, fetch helpers, query keys
├── lib/          # Slice-internal utilities and helpers
└── index.ts      # Public API — only import from this file
```

### Where to put new code

| What you're building                                 | Layer      |
| ---------------------------------------------------- | ---------- |
| Reusable button, input, or utility hook              | `shared`   |
| Business object and its display (User, Product)      | `entities` |
| User action with side-effects (LoginForm, AddToCart) | `features` |
| Full page section composed of features               | `widgets`  |
| Route, layout, or global provider                    | `app`      |

---

## Code style guidelines

### Do

- **Use shadcn/ui components** for all UI primitives. Check `shared/ui/` before building anything new.
- **Use Tailwind utility classes** for all styling. Compose with `cn()` (`clsx` + `tailwind-merge`) for conditional classes.
- **Use Zod schemas** for all validation. Define once, derive TypeScript types via `z.infer<typeof schema>`.
- **Use `react-hook-form`** with `zodResolver` for every form. No uncontrolled inputs outside RHF.
- **Prefer Server Components** by default. Add `"use client"` only for interactivity, browser APIs, or hooks.
- **Import from slice public APIs only.** e.g. `import { UserCard } from '@/entities/user'` — never from internal paths.
- **Import direction is strictly downward.** `widgets` → `features` → `entities` → `shared`. Nothing imports upward.
- **Keep components and files small.** One clear responsibility per file.

### Don't

- **Do not use npm or yarn.** Use `bun add` / `bun remove` only.
- **Do not hard-code colors, spacing, or font sizes.** Use Tailwind design tokens (`text-primary`, `bg-muted`, `gap-4`, etc.).
- **Do not use raw `<div>` / `<input>` / `<button>`** when a shadcn/ui component already covers the need.
- **Do not write inline styles (`style={{}}`)** — use Tailwind classes instead.
- **Do not mix client and server concerns** in one component. Split them when you need both async data fetching and `useState`.
- **Do not import across slices at the same layer.** A feature must not import from another feature — move shared code to `entities` or `shared`.
- **Do not put business logic in `shared/`.** If it knows about a domain concept, it belongs in `entities` or `features`.
- **Do not add new heavy dependencies without approval.** Check `package.json` first; ask before installing.

### Conventions

- **File naming:** `kebab-case` for files and folders; `PascalCase` for component exports.
- **Slice public API:** every slice must have an `index.ts` that explicitly re-exports its public surface.
- **Path alias:** use `@/` mapped to `src/` for all internal imports.
- **Commits:** Conventional Commits format (`feat:`, `fix:`, `chore:`, etc.) — enforced by commitlint + husky.
- **Import order:** managed by `eslint-plugin-simple-import-sort`. Do not reorder manually.
- **Formatting:** Prettier with `prettier-plugin-tailwindcss`. Run `bun format` when unsure.

---

## Testing instructions

> No test runner is configured in the current `package.json`. When one is added, document the commands here.

Until then, the pre-merge checklist is:

```bash
bun typecheck    # zero type errors required
bun lint         # zero lint errors required
bun build        # build must succeed cleanly
```

- Fix any type or lint errors until all checks are green before committing.
- After moving files or changing imports, always re-run `bun lint` to confirm ESLint and TypeScript rules still pass.
- Add or update relevant types and Zod schemas for any code you change.

---

## Security considerations

- **Never commit secrets, API keys, or tokens.** Use `.env.local` for local secrets; `.env.local` is gitignored by Next.js by default.
- **Never expose server-only environment variables to the client.** Only prefix variables with `NEXT_PUBLIC_` if they are intentionally public.
- **Validate all external input with Zod** before using it in server actions, API routes, or database calls. Never trust raw `req.body` or search params.
- **Use Server Actions for mutations.** Do not expose raw API routes for state-changing operations unless necessary.
- **Do not `dangerouslySetInnerHTML`** unless the content has been explicitly sanitized. Flag any such use in a code comment.
- **Do not log sensitive data** (tokens, passwords, PII) in `console.log` or error messages.
- **Keep dependencies audited.** Run `bun audit` periodically and address high/critical findings before shipping.
