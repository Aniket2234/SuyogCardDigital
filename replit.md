# SAHYOG Tax & Finance Advisory - Digital Business Card

## Overview

This is a modern, LinkedIn-style digital business card web application for SAHYOG Tax & Finance Advisory Limited. The application presents a professional, single-page interface showcasing business registration and support services offered across India. Built as a responsive, mobile-first web application with a focus on professional corporate aesthetics and user engagement through call-to-action elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (single-page application with minimal route requirements)
- **React Query (@tanstack/react-query)** for server state management and data fetching

**UI Component System**
- **shadcn/ui** component library with Radix UI primitives for accessible, unstyled components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for managing component variant styles
- Custom color palette featuring sky blue primary colors, dark blue accents, and subtle red highlights for CTAs
- Responsive design with mobile-first approach (breakpoint: 768px)

**Design Philosophy**
- LinkedIn-inspired profile layout with banner, circular profile image, and card-based content sections
- Gradient backgrounds and hover effects for visual engagement
- Fixed bottom navigation for mobile navigation
- Custom theme system supporting light/dark modes via CSS variables

### Backend Architecture

**Server Framework**
- **Express.js** on Node.js for the HTTP server
- TypeScript throughout the stack for type safety
- ESM (ES Modules) architecture for modern JavaScript support

**API Structure**
- RESTful API design with `/api` prefix for all backend routes
- Currently minimal backend logic - designed as a static business card presentation
- Request logging middleware for monitoring API calls
- JSON body parsing with raw body preservation for webhook support

**Storage Layer**
- In-memory storage implementation (`MemStorage` class) for user data
- Interface-based storage design (`IStorage`) allowing easy swapping to persistent storage
- PostgreSQL schema defined using Drizzle ORM but not yet connected
- User model with username/password fields prepared for future authentication

### Database Architecture

**ORM & Schema**
- **Drizzle ORM** configured for PostgreSQL with type-safe query building
- **Drizzle Kit** for schema migrations
- Schema validation using Zod through `drizzle-zod`
- Database schema located in `shared/schema.ts` for full-stack type sharing

**Current Schema**
- Users table with UUID primary keys, unique username, and password fields
- PostgreSQL connection configured via `DATABASE_URL` environment variable
- Schema currently defined but application uses in-memory storage (migration path ready)

**Design Decision**: The application uses in-memory storage initially for simplicity but has PostgreSQL infrastructure prepared. This allows for quick prototyping while maintaining a clear migration path to persistent storage when user authentication or data persistence becomes required.

### External Dependencies

**UI & Interaction Libraries**
- **Radix UI** component primitives (accordion, dialog, dropdown, popover, etc.) for accessible UI patterns
- **Lucide React** for icon components
- **React Icons** for social media icons (WhatsApp, Instagram, LinkedIn)
- **QRCode.react** for generating shareable QR codes
- **Embla Carousel** for carousel/slider components
- **React Hook Form** with Zod resolvers for form validation

**Backend Services**
- **@neondatabase/serverless** - PostgreSQL driver for Neon Database (serverless-optimized)
- **connect-pg-simple** - PostgreSQL session store for Express sessions

**Development Tools**
- **Replit-specific plugins**: runtime error overlay, cartographer (code intelligence), dev banner
- **TypeScript** for static type checking
- **PostCSS** with Autoprefixer for CSS processing

**Third-Party Integrations**
- WhatsApp Business API for direct messaging (`wa.me` links)
- Email clients via `mailto:` links
- LinkedIn sharing via share URLs
- Designed to support vCard downloads (VCF format) for contact sharing

**Design Decision**: The application prioritizes social sharing and direct communication channels (WhatsApp, email) over complex backend authentication. This aligns with the business card use case where immediate contact and service discovery are primary goals.