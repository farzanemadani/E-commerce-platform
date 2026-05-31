# Quick Next Boilerplate

This project is a lightweight Next.js starter configured to use [Bun](https://bun.sh) as the only package manager.

## Current Status

- Bun is the required package manager for dependency installation.
- `npm`, `yarn`, and `pnpm` installs are intentionally blocked.
- App metadata is set to `Boilerplate Quick Next App`.
- Husky runs staged linting before commits, commit message checks, and build checks before pushes.
- The project uses a lightweight Feature-Sliced Design structure.

## Getting Started

```bash
# Install dependencies
bun install

# Run dev server
bun run dev
```

`bun install` automatically initializes Husky via the `prepare` script. If you initialize a new Git repository manually, run the following to activate the hooks:

```bash
git init
bun install
```

If hooks are still not running, initialize Husky explicitly:

```bash
bunx husky

# Verify hooks path is set
git config core.hooksPath
# Expected output: .husky
```

## Scripts

```bash
# Check lint issues
bun run lint

# Auto-fix lint issues when possible
bun run lint:fix

# Check TypeScript issues
bun run typecheck

# Check production build
bun run build

# Validate a commit message file
bun run commitlint .git/COMMIT_EDITMSG
```

## Environment Variables

Next.js loads environment files automatically, so the default scripts stay simple:

```json
{
  "dev": "next dev --turbopack",
  "build": "next build"
}
```

Use `.env.example` as the shared template. Local env files like `.env.local`, `.env.development`, and `.env.production` are ignored by Git.

If you want separate env files to be loaded explicitly for development and production, install `env-cmd`:

```bash
bun add -d env-cmd
```

Then create the env files:

```bash
touch .env.development .env.production
```

And update the scripts:

```json
{
  "dev": "env-cmd -f .env.development next dev --turbopack",
  "build": "env-cmd -f .env.production next build"
}
```

## Fixing Hook Errors

If `pre-commit` fails, run the matching command and stage the changed files again:

```bash
# Fix ESLint issues when possible
bun run lint:fix

# Fix formatting issues
bun run format

# Re-check TypeScript issues
bun run typecheck

# Stage fixed files again
git add .
```

If the commit message check fails, use a Conventional Commit message:

```bash
git commit -m "feat: add auth"
git commit -m "fix: handle login error"
```

If `pre-push` fails, reproduce the build error locally and fix it before pushing again:

```bash
bun run build
```

## Architecture

This project follows a lightweight Feature-Sliced Design structure for Next.js App Router.

```text
src/
  app/       # Next.js routing, layouts, and global styles
  views/     # Route-level page composition
  widgets/   # Large reusable UI sections
  features/  # User-facing business actions
  entities/  # Business entities and domain models
  shared/    # Shared config, UI, libs, and utilities
```

`src/pages` is intentionally avoided so it does not conflict with Next.js Pages Router.

### Shared Layer

The `shared/` layer contains all project-wide building blocks, split into four concerns:

```text
src/
└── shared/
    ├── config/             # Global configuration
    │   ├── env.ts              # Environment variable access
    │   └── constants.ts        # Project-wide constants
    │
    ├── ui/                 # Base UI components
    │   ├── button/
    │   ├── input/
    │   ├── modal/
    │   └── index.ts
    │
    ├── lib/                # Third-party library setup
    │   ├── axios.ts            # Axios instance
    │   ├── dayjs.ts            # Dayjs configuration
    │   └── queryClient.ts      # React Query client
    │
    └── utils/              # Pure utility functions
        ├── formatDate.ts
        ├── formatPrice.ts
        └── cn.ts               # Tailwind class merge helper
```

### Layer Import Rules

Each layer may only import from layers below it — never from layers above:

```text
app       → can import from all layers
views     → can import from widgets, features, entities, shared
widgets   → can import from features, entities, shared
features  → can import from entities, shared
entities  → can import from shared only
shared    → does not import from any other layer
```
