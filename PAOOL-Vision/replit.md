# PAOOL - Regenerative Design Agency Website

## Overview

PAOOL is a marketing and portfolio website for a regenerative design agency focused on circular economy and sustainability principles. The application is a full-stack TypeScript project with a React frontend and Express backend, featuring a contact form that captures leads into a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing (Home, Blog, Signals, 404 pages)
- **Styling**: Tailwind CSS with a custom dark nature theme (deep forest green/charcoal palette)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for scroll-triggered animations and transitions
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Framework**: Express 5 on Node.js with TypeScript
- **API Design**: REST endpoints defined in shared route definitions (`shared/routes.ts`) with Zod schemas for input/output validation
- **Development**: Vite dev server with HMR integration during development
- **Production**: Static file serving of built client assets

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` using Drizzle's pgTable definitions
- **Validation**: Drizzle-Zod integration generates insert schemas from table definitions
- **Migrations**: Drizzle Kit for database schema management (`db:push` command)

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Database table definitions and Zod schemas
- `routes.ts`: API route definitions with paths, methods, and typed input/output schemas

This pattern ensures type safety across the full stack and eliminates API contract mismatches.

### Build System
- **Client**: Vite builds to `dist/public/`
- **Server**: esbuild bundles server code to `dist/index.cjs` with select dependencies bundled for faster cold starts
- **Development**: `tsx` runs TypeScript directly without compilation

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage (available but sessions not currently implemented)

### UI/UX Libraries
- **Radix UI**: Accessible component primitives (dialogs, dropdowns, tooltips, etc.)
- **Lucide React**: Icon library
- **react-icons**: Additional icons (social media platforms)
- **embla-carousel-react**: Carousel component
- **react-day-picker**: Calendar/date picker component
- **vaul**: Drawer component
- **cmdk**: Command palette component

### Fonts
- Google Fonts: Inter (sans-serif), Playfair Display (serif) loaded via CDN

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator