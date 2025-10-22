# Agile Product Analytics Dashboard — Codebase Guide

This guide summarizes the structure, technologies, and key implementation details of the Agile Product Analytics Dashboard. Use it as a quick orientation reference when navigating or extending the project.

## Project Overview
- **Framework**: Next.js 15 using the App Router (`app/` directory) with React 19 and TypeScript.
- **Styling**: Tailwind CSS 4 with design tokens and dark-mode variables defined in `app/globals.css`.
- **Data & Visualization**: Mock analytics data generated via `lib/mock-data.ts`, rendered through modular dashboard components and Recharts visualizations.
- **Tooling**: pnpm workspace with ESLint, PostCSS, and Tailwind configuration in the repo root.

## Directory Structure

### `app/`
- `layout.tsx` sets global metadata, font loading, theme provider wrapper, and Vercel Analytics wiring.
- `page.tsx` composes KPI cards, charts, and insights using data helpers from `lib/mock-data.ts`.
- `globals.css` defines Tailwind base styles, CSS variables for light/dark themes, and shared utility classes.

### `components/`
- **Dashboard Widgets**: `kpi-card.tsx`, `orders-chart.tsx`, `churn-chart.tsx`, `nps-chart.tsx`, and `conversion-funnel.tsx` encapsulate the key dashboard visualizations.
- **Providers**: `theme-provider.tsx` wraps `next-themes` for runtime theme switching.
- **UI Library (`components/ui/`)**: A collection of shadcn/ui-derived primitives (buttons, dialogs, charts, tables, navigation, etc.) that follow Tailwind styling conventions. These can be composed to build additional dashboard sections.

### `hooks/`
- `use-mobile.ts` detects responsive breakpoints for mobile layouts.
- `use-toast.ts` exposes the toast notification API backed by the UI primitives.

### `lib/`
- `mock-data.ts` fabricates KPI, time series, churn, NPS, and funnel datasets used by the dashboard.
- `utils.ts` contains helper utilities such as Tailwind class name merging.

### `public/`
Static assets (logos, avatars, icons) available through the Next.js public folder.

### `styles/`
Additional global styles (mirroring `app/globals.css`) for compatibility with certain tooling setups.

### Configuration & Scripts
- `package.json` / `pnpm-lock.yaml`: Dependency definitions and script commands.
- `next.config.mjs`, `postcss.config.mjs`, `tailwind.config` (implicit via Next 15 conventions), and `tsconfig.json` configure the build, CSS processing, and TypeScript.
- `scripts/` folder contains automation helpers (if any future scripts are added).

## Data Flow
1. `app/page.tsx` imports generator functions from `lib/mock-data.ts` (`getKPIData`, `getTimeSeriesData`, etc.).
2. Generated datasets are passed into dashboard components (KPI cards and chart modules).
3. Components render visualizations using Recharts primitives or Tailwind-styled progress indicators, respecting responsive layouts and theme variables.

## Styling & Theming Notes
- CSS variables defined in `app/globals.css` establish the color system, spacing, and typography tokens for both light and dark modes.
- Tailwind utility classes combined with `cn` helper (`lib/utils.ts`) keep component styles consistent and composable.
- Theme toggling hooks are ready via `ThemeProvider`; UI controls can be added by consuming `useTheme` from `next-themes`.

## Available Scripts (pnpm)
- `pnpm install` — Install dependencies.
- `pnpm dev` — Start the development server at `http://localhost:3000`.
- `pnpm build` — Create a production build.
- `pnpm start` — Serve the production build.
- `pnpm lint` — Run ESLint on the project.

## Extending the Dashboard
- Use the existing KPI and chart components as patterns for new analytics modules.
- Expand `lib/mock-data.ts` or replace it with real API calls to feed production data.
- Leverage the UI primitives in `components/ui/` and utility hooks for consistent UX across new features.
