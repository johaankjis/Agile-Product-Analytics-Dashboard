# Agile Product Analytics Dashboard

This repository contains a product analytics dashboard built with Next.js and Tailwind CSS. It visualizes key performance indicators (KPIs) for a food delivery product, focusing on conversion, retention, satisfaction, and engagement metrics.

## Tech Stack
- **Next.js 15 App Router** with a single-page dashboard entry point defined in `app/page.tsx` and global layout metadata in `app/layout.tsx`.【F:app/page.tsx†L1-L101】【F:app/layout.tsx†L1-L26】
- **React 19** and **TypeScript 5** for component-driven UI development.【F:package.json†L1-L54】
- **Tailwind CSS 4** with custom design tokens, animation utilities, and CSS variables for light/dark theming defined in `app/globals.css`.【F:app/globals.css†L1-L92】
- **Recharts** for data visualization components (line, bar, pie charts).【F:components/orders-chart.tsx†L1-L43】【F:components/churn-chart.tsx†L1-L33】【F:components/nps-chart.tsx†L1-L41】
- **Lucide icons**, **shadcn/ui-derived primitives**, and **next-themes** for consistent styling and theming support.【F:components/kpi-card.tsx†L1-L37】【F:components/theme-provider.tsx†L1-L10】【F:components/ui/button.tsx†L1-L87】
- **Vercel Analytics** is pre-wired for usage tracking in the root layout.【F:app/layout.tsx†L1-L26】

## Directory Structure
- `app/`
  - `layout.tsx`: Configures global metadata, fonts, analytics, and wraps the React tree.【F:app/layout.tsx†L1-L26】
  - `page.tsx`: Main dashboard view assembling KPI cards, charts, and insights.【F:app/page.tsx†L1-L101】
  - `globals.css`: Tailwind imports, CSS variable theme definitions, and base styles.【F:app/globals.css†L1-L92】
- `components/`
  - `kpi-card.tsx`: Reusable metric card with directional change indicators.【F:components/kpi-card.tsx†L1-L39】
  - `orders-chart.tsx`, `churn-chart.tsx`, `nps-chart.tsx`, `conversion-funnel.tsx`: Dashboard visualizations backed by Recharts or custom renders.【F:components/orders-chart.tsx†L1-L43】【F:components/churn-chart.tsx†L1-L33】【F:components/nps-chart.tsx†L1-L41】【F:components/conversion-funnel.tsx†L1-L32】
  - `theme-provider.tsx`: Wrapper around `next-themes` provider for consistent theme context.【F:components/theme-provider.tsx†L1-L10】
  - `ui/`: Library of foundational components (buttons, charts, tables, dialogs, etc.) generated from shadcn/ui patterns for building complex interfaces quickly.【F:components/ui/button.tsx†L1-L87】
- `lib/`
  - `mock-data.ts`: Generates synthetic KPI, time series, churn, NPS, and funnel data used by the dashboard components.【F:lib/mock-data.ts†L1-L89】
  - `utils.ts`: Common utility helpers (e.g., Tailwind class merging).【F:lib/utils.ts†L1-L6】
- `public/`: Placeholder assets (logos, avatars) for branding or user imagery.【44e929†L1-L2】
- `styles/`: Additional global styles (currently mirrors `app/globals.css` import strategy).【F:styles/globals.css†L1-L1】

## Data Flow Overview
1. `app/page.tsx` retrieves mock analytics data via helper functions exported from `lib/mock-data.ts` (`getKPIData`, `getTimeSeriesData`, etc.).【F:app/page.tsx†L1-L101】【F:lib/mock-data.ts†L25-L89】
2. The page passes structured data into modular components (`KPICard`, chart components) to render KPI summaries and visualizations.【F:app/page.tsx†L34-L86】
3. Visualization components (orders, churn, NPS, funnel) transform the data into responsive charts and progress bars using Recharts primitives or CSS-based displays.【F:components/orders-chart.tsx†L10-L43】【F:components/churn-chart.tsx†L10-L33】【F:components/nps-chart.tsx†L10-L41】【F:components/conversion-funnel.tsx†L9-L32】

## Styling and Theming
- CSS custom properties define the color system, radii, and sidebar palette for both light and dark modes, enabling consistent styling across shadcn/ui components.【F:app/globals.css†L6-L92】
- Tailwind’s `@apply` is used to enforce border and text defaults globally, while `@custom-variant dark` enables dark-mode styling across the component tree.【F:app/globals.css†L1-L92】
- The `ThemeProvider` component is ready to wrap the app when theme switching UI is introduced.【F:components/theme-provider.tsx†L1-L10】

## Available Scripts
Run commands with `pnpm` (preferred because the repo includes a `pnpm-lock.yaml`):【F:package.json†L1-L54】

```bash
pnpm install       # install dependencies
pnpm dev           # start the development server on localhost:3000
pnpm build         # create an optimized production build
pnpm start         # serve the production build
pnpm lint          # run ESLint across the project
```

## Development Tips
- Update the mock data generator in `lib/mock-data.ts` or swap it with real API calls to display live metrics.【F:lib/mock-data.ts†L25-L89】
- Use the prebuilt components under `components/ui` for consistent UI patterns when adding new sections to the dashboard.【F:components/ui/button.tsx†L1-L87】
- Customize theming by adjusting CSS variables in `app/globals.css`; Tailwind automatically propagates the design tokens across components.【F:app/globals.css†L6-L92】
- Instrument additional analytics events by expanding the configuration in `app/layout.tsx` where Vercel Analytics is initialized.【F:app/layout.tsx†L1-L26】
