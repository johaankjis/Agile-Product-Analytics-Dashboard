# Agile Product Analytics Dashboard

Agile Product Analytics Dashboard is a Next.js application that showcases product KPIs for a hypothetical food delivery platform. The dashboard combines card-based summaries, interactive charts, and conversion funnel insights driven by mock data generators so you can prototype analytics experiences quickly.

## Features
- **Executive snapshot**: KPI cards surface conversion, retention, satisfaction, and engagement deltas at a glance with directional indicators.
- **Rich visualizations**: Line, bar, and pie charts built with Recharts illustrate order trends, churn distribution, and NPS sentiment.
- **Conversion insights**: A custom CSS funnel highlights drop-off across the acquisition journey to identify optimization opportunities.
- **Theme-ready UI kit**: A library of shadcn-inspired components and Tailwind theming primitives accelerates feature development while maintaining visual consistency.

## Tech Stack
- [Next.js 15 App Router](https://nextjs.org/) with global layout metadata and analytics wiring.
- [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/) for strongly typed component development.
- [Tailwind CSS 4](https://tailwindcss.com/) for utility-first styling and design tokens.
- [Recharts](https://recharts.org/) for responsive charting primitives.
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark theme management.

## Project Structure
```
app/
  layout.tsx        # Global metadata, font configuration, Vercel Analytics
  page.tsx          # Dashboard page assembling KPI cards, charts, and insights
  globals.css       # Tailwind layers, CSS variables, and dark-mode theming
components/
  kpi-card.tsx      # KPI metric card with trend indicators
  conversion-funnel.tsx
  churn-chart.tsx
  nps-chart.tsx
  orders-chart.tsx
  theme-provider.tsx
  ui/               # shadcn/ui-derived primitives (button, dialog, table, etc.)
lib/
  mock-data.ts      # Mock KPI/time-series/funnel data generators
  utils.ts          # Utility helpers (e.g., className merging)
public/
  *                 # Placeholder assets (logos, avatars)
styles/
  globals.css       # Tailwind import shim for compatibility
```

## Getting Started
1. **Install dependencies**
   ```bash
   pnpm install
   ```
2. **Run the development server**
   ```bash
   pnpm dev
   ```
   Visit `http://localhost:3000` to explore the dashboard. Hot module replacement is enabled out of the box.
3. **Run quality checks**
   ```bash
   pnpm lint
   pnpm build
   ```

> **Tip:** The repository ships with a `pnpm-lock.yaml`. Using `pnpm` is recommended to guarantee dependency parity.

## Data & Customization
- Update or replace the mock data utilities in `lib/mock-data.ts` when connecting to a real analytics backend.
- Extend the dashboard by composing existing UI primitives located in `components/ui/`.
- Modify theme tokens in `app/globals.css` to tweak color palettes, typography, and radii across light/dark modes.
- Wrap future pages with `components/theme-provider.tsx` once you introduce a theme toggle.

## Deployment
1. Create a production build: `pnpm build`
2. Start the server: `pnpm start`
3. Deploy to your preferred platform (e.g., Vercel) by following its Next.js deployment guide.

## License
This project is provided as-is without a specific license. Add a LICENSE file if you intend to distribute or open-source your modifications.
