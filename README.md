# Agile Product Analytics Dashboard

Agile Product Analytics Dashboard is a data visualization experience built with Next.js 15 and Tailwind CSS. It showcases key performance indicators (KPIs) for a food-delivery product, including conversion, retention, customer sentiment, and engagement insights. Charts, KPI cards, and narrative insights are powered by mock data that can be swapped for live analytics sources.

## Features
- 📊 **Comprehensive KPIs** – Track revenue, orders, conversion rate, and repeat rate with visually rich KPI cards.
- 📈 **Interactive Charts** – Line, bar, and pie charts powered by Recharts highlight growth, churn, and NPS trends.
- 🌗 **Dark mode ready** – Theme configuration is wired up with `next-themes`, Tailwind CSS variables, and global styles.
- ⚙️ **Modular components** – Reusable UI primitives (buttons, dropdowns, dialogs, etc.) based on shadcn/ui conventions.
- 🚀 **Production friendly** – Includes Vercel Analytics integration and is optimized for deployment on Vercel or any Node.js host.

## Tech Stack
- [Next.js 15 App Router](https://nextjs.org/) with React 19 and TypeScript 5.
- [Tailwind CSS 4](https://tailwindcss.com/) with custom design tokens and dark-mode variants.
- [Recharts](https://recharts.org/) for data visualizations.
- [Lucide](https://lucide.dev/) icons and [next-themes](https://github.com/pacocoursey/next-themes) for theming support.
- `pnpm` for dependency management (lockfile included).

## Getting Started

### Prerequisites
- Node.js 18.18 or newer
- pnpm 8 or newer (`corepack enable` is recommended)

### Installation
```bash
pnpm install
```

### Development
Start the development server on [http://localhost:3000](http://localhost:3000):
```bash
pnpm dev
```

### Production Build
Create an optimized build and serve it locally:
```bash
pnpm build
pnpm start
```

### Linting
Run ESLint checks:
```bash
pnpm lint
```

## Project Structure
```
app/               # App Router entrypoints, layout, and global styles
components/        # Feature components and UI primitives (shadcn/ui inspired)
hooks/             # Reusable React hooks
lib/               # Mock data generators and shared utilities
public/            # Static assets (logos, avatars, favicons)
scripts/           # Automation and helper scripts
styles/            # Additional global stylesheet entrypoints
```

## Data Model Overview
- `lib/mock-data.ts` exposes helpers such as `getKPIData`, `getTimeSeriesData`, `getChurnData`, and `getNPSData` for generating synthetic analytics.
- `app/page.tsx` composes KPI cards and chart components with the mock data sources.
- Visualization components under `components/` (e.g., `orders-chart.tsx`, `churn-chart.tsx`, `nps-chart.tsx`, `conversion-funnel.tsx`) render the dashboard UI.

## Customization Tips
- Replace the mock data helpers in `lib/mock-data.ts` with API calls to connect real analytics data.
- Adjust design tokens in `app/globals.css` to update theming, typography, and spacing.
- Use the UI building blocks in `components/ui/` to extend the dashboard with new sections or interactions.

## Deployment
The app is ready for Vercel out of the box. Deploy by connecting this repository to Vercel or run:
```bash
pnpm build
pnpm start
```
For containerized deployments, ensure the production build directory `.next` is included and that the Node.js version matches the prerequisites above.

## License
This project is provided as-is for educational and demonstration purposes. Review repository policies or contact the maintainers before using it in production.
