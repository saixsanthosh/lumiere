# LUMIERE — Premium Artisan Cafe Website

A stunning, fully-functional premium cafe website built with Next.js 14, TypeScript, and TailwindCSS. Cinematic video backgrounds, online ordering with cart, table reservations, blog, events, loyalty rewards, gift cards, and more — all with a warm artisan luxury aesthetic.

## Features

- **Cinematic Video Hero** — Full-screen autoplay video background with mute toggle and reduced-motion fallback
- **Full Interactive Menu** — 40+ items, category tabs, search, dietary filters, add-to-cart with toast notifications
- **Online Ordering** — Cart drawer, checkout with order type (dine-in / takeaway / delivery), promo codes, tips
- **Table Reservations** — Date/time picker, party size, occasion selector, confirmation flow
- **Our Story** — Animated timeline, team profiles, values section
- **Photo Gallery** — Masonry grid with category filters and lightbox
- **Events & Live Music** — Event cards with RSVP modal
- **Blog / Journal** — Article listings with individual article pages, related posts
- **Contact** — Embedded map, live open/closed status, working contact form
- **Loyalty Rewards** — Three-tier rewards program with signup
- **Gift Cards** — Digital gift card purchase with live preview card
- **Smooth Animations** — Framer Motion scroll reveals, page transitions, hover effects, Lenis smooth scroll
- **Fully Responsive** — Desktop, tablet, and mobile optimized
- **prefers-reduced-motion** respected throughout

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS + CSS Variables |
| Animations | Framer Motion + Lenis Smooth Scroll |
| State | Zustand (cart, UI) |
| Icons | Lucide React + Custom SVG |
| UI | Custom component library |

## Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/lumiere.git
cd lumiere

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

See `.env.example` for a complete list. For demo/development, the site works without any env vars — payment and email integrations are ready to connect when you add keys.

## Deployment on Vercel

### Option A: GitHub + Vercel Dashboard
1. Push to GitHub (see commands below)
2. Go to [vercel.com](https://vercel.com) -> **New Project** -> Import GitHub repo
3. Add environment variables from `.env.example` in the Vercel dashboard
4. Click **Deploy**

### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

## Git Setup

```bash
git init
git add .
git commit -m "Initial commit: Lumiere premium cafe website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lumiere.git
git push -u origin main
```

## Project Structure

```
src/
  app/                    # Next.js App Router pages
    page.tsx              # Home
    menu/                 # Full interactive menu
    cart/                 # Cart + checkout
    reservations/         # Table booking
    about/                # Our story
    gallery/              # Photo gallery
    events/               # Events & live music
    blog/                 # Blog index + [slug]
    contact/              # Contact + map
    loyalty/              # Rewards program
    gift-cards/           # Digital gift cards
    order-confirmation/
  components/
    layout/               # Navbar, Footer, ClientLayout
    sections/             # Home page sections
    cart/                 # Cart drawer
    shared/               # Video background, motion wrappers, section headings
    ui/                   # Toast, custom icons
  data/                   # Demo data (menu, blog, events, gallery, testimonials)
  hooks/                  # Custom React hooks
  lib/                    # Utilities (cn, formatPrice, etc.)
  store/                  # Zustand stores (cart, toast)
  types/                  # TypeScript interfaces
```

---

**Designed & Developed by B SAI SANTHOSH**

- Email: saisanthosh102030@gmail.com
- Phone: +91 8925075593
- Instagram: [@saixsanthosh](https://instagram.com/saixsanthosh)
- WhatsApp: [Chat](https://wa.me/918925075593)
