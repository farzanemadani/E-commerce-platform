# E-commerce Platform

A Next.js e-commerce project built with the App Router, Bun, Feature-Sliced Design, and route-based auth dialogs.

The project is still in an early stage, but the structure already shows the main concepts used to keep pages, features, and shared UI organized.

## Tech Stack

- **Next.js 16 App Router** - file-based routing, layouts, route groups, parallel routes, and intercepting routes.
- **React 19** - UI rendering and client components.
- **TypeScript** - type safety across components, config, and shared utilities.
- **Bun** - the required package manager and script runner.
- **Tailwind CSS 4** - styling through utility classes and global theme tokens.
- **shadcn/ui + Radix UI** - accessible base UI primitives such as dialogs, buttons, inputs, labels, and navigation menu.
- **React Hook Form + Zod** - form state management and schema validation for auth forms.
- **Feature-Sliced Design** - project structure that separates app routing, views, widgets, features, entities, and shared code.
- **Husky, lint-staged, ESLint, Prettier, Commitlint** - code quality and Git workflow checks.

## Main Concepts Used

### App Router

Routing is handled inside `src/app`. The root layout renders the shared page frame:

```text
src/app/layout.tsx
```

It receives normal page content through `children` and the modal slot through `dialog`.

### Parallel Routes

The project uses a parallel route slot named `@dialog`:

```text
src/app/@dialog
```

Parallel routes let the app render another route segment at the same time as the main page. Here, the main page stays visible while an auth dialog is rendered on top of it.

The slot has a default route:

```text
src/app/@dialog/default.tsx
```

This returns `null`, so no dialog is shown when the current route does not match a dialog route.

### Intercepting Routes

The project uses Next.js intercepting routes for auth dialogs:

```text
src/app/@dialog/(auth)/(.)login/page.tsx
src/app/@dialog/(auth)/(.)register/page.tsx
```

The `(.)login` and `(.)register` folders intercept navigation to `/login` and `/register` from the current route. Instead of leaving the current page, the app opens the login or register UI inside the `@dialog` slot.

This gives two useful behaviors:

- Opening `/login` from inside the app can show a modal dialog.
- Visiting `/login` directly can still render the full login page from `src/app/(auth)/login/page.tsx`.

### Route-Based Dialog

The reusable dialog wrapper lives here:

```text
src/shared/ui/RouteDialog
```

`RouteDialog` checks the current pathname and opens the dialog only when it matches the route passed to the component. When the dialog closes, it navigates back or runs a custom `onClose` handler.

### Feature-Sliced Design

The project follows a lightweight Feature-Sliced Design structure:

```text
src/
  app/       # Next.js routing, layouts, route slots, and global styles
  views/     # Route-level page composition
  widgets/   # Large reusable UI sections like header and footer
  features/  # User-facing business actions like login
  entities/  # Business entities and domain models
  shared/    # Shared config, UI components, libraries, and utilities
```

Each layer should import only from layers below it:

```text
app       -> can import from all layers
views     -> can import from widgets, features, entities, shared
widgets   -> can import from features, entities, shared
features  -> can import from entities, shared
entities  -> can import from shared only
shared    -> does not import from other project layers
```

## Auth Flow

The login feature is placed in:

```text
src/features/auth/login/ui/LoginForm.tsx
```

It is reused in both places:

- Full page route: `src/app/(auth)/login/page.tsx`
- Dialog route: `src/app/@dialog/(auth)/(.)login/page.tsx`

This keeps the form implementation in one feature while allowing different route presentations.

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Build for production:

```bash
bun run build
```

## Scripts

```bash
bun run dev           # Start Next.js with Turbopack
bun run build         # Create a production build
bun run start         # Start the production server
bun run lint          # Check ESLint issues
bun run lint:fix      # Auto-fix lint issues when possible
bun run typecheck     # Check TypeScript issues
bun run format        # Format files with Prettier
bun run format:check  # Check formatting
```

## Package Manager

Bun is required for this project. Installs with `npm`, `yarn`, or `pnpm` are intentionally blocked by the `preinstall` script.

## Environment Variables

Next.js loads environment files automatically. Use `.env.example` as the shared template when environment variables are added.

Local files such as `.env.local`, `.env.development`, and `.env.production` should stay ignored by Git.

## Git Hooks

Husky is initialized by the `prepare` script after `bun install`.

The repository uses hooks for staged linting, commit message validation, and build checks before pushing.

Use Conventional Commit messages:

```bash
git commit -m "feat: add auth dialog"
git commit -m "fix: handle login validation"
```
