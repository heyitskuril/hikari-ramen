# Hikari Ramen House — Modern Web Experience

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-1B1B1F?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://hikari-ramen.vercel.app)

---

**Hikari Ramen House** is a premium landing page built for the F&B (Food & Beverage) industry. This project combines high-impact visual aesthetics with conversion-focused functionality to deliver an authentic digital Japanese restaurant experience, representing a real local business in Sawangan, Depok.

Live URL: [hikari-ramen.vercel.app](https://hikari-ramen.vercel.app)

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19 |
| Build Tool | Vite | 6 |
| Language | TypeScript | 5.8 |
| Styling | Tailwind CSS | 4 |
| Animation | Motion (Framer Motion) | 12 |
| Icons | Lucide React | latest |

---

## Project Goals

This project was developed around three main pillars:

1. **Portfolio Showcase** : Demonstrating full-cycle web development expertise within the F&B niche, from architecture to deployment.
2. **SME Digitalization** : A real-world case study in giving local Indonesian businesses a professional digital presence and a digital asset they own (website + domain).
3. **Reusable Boilerplate** : A modular, feature-based architecture designed to be adapted quickly for future restaurant, cafe, or MSME clients.

---

## Key Features

- **Performance-First** : Lazy-loaded images, passive scroll listeners, and Vite's optimized build pipeline for near-instant load times.
- **Mobile-First** : Fully responsive layout engineered for seamless experience across all screen sizes.
- **Digital Menu Catalog** : Category-based visual menu with direct WhatsApp ordering per item.
- **WhatsApp Integration** : Pre-filled message links on every call-to-action to minimize friction and maximize conversion.
- **Motion Design** : Scroll-aware animations and hover micro-interactions using the Motion library for a premium feel.
- **SEO Foundation** : Semantic HTML, meta description, Open Graph tags, and local keywords baked into `index.html`.
- **Feature-Based Architecture** : Clean separation of concerns; each feature is independently maintainable and scalable.

---

## Project Architecture

```text
hikari-ramen/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── FloatingWhatsApp.tsx
│   │       ├── FloatingDevBadge.tsx
│   │       └── WhatsAppIcon.tsx
│   ├── features/
│   │   ├── hero/               # First impression & branding
│   │   ├── about/              # Brand story & values
│   │   ├── menu/               # Dynamic menu catalog & product cards
│   │   ├── testimonials/       # Social proof & trust builder
│   │   ├── how-to-order/       # Customer journey guide
│   │   ├── gallery/            # Visual ambiance showcase
│   │   └── contact/            # Location map & direct communication
│   ├── constants/
│   │   ├── business.ts         # Single source of truth for business data
│   │   ├── navigation.ts
│   │   ├── products.ts
│   │   ├── testimonials.ts
│   │   └── steps.tsx
│   ├── hooks/
│   │   └── useScrollDetection.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── whatsapp.ts         # WhatsApp link builder utilities
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
└── tsconfig.json
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/heyitskuril/hikari-ramen.git
cd hikari-ramen

# Install dependencies
npm install

# Run development server
npm run dev

# Type check
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Customization

All business information is centralized in `src/constants/business.ts`. To adapt this project for a different client, update that file along with the data in `src/constants/products.ts` and `src/constants/testimonials.ts`. No hunting through component files required.

```typescript
// src/constants/business.ts
export const BUSINESS_INFO = {
  name: 'Hikari Ramen House',
  phone: '08985175971',
  wa: '628985175971',
  address: 'Jl. Raya Sawangan, Depok, Jawa Barat',
  hours: '14:00 – 23:00 (Senin Tutup)',
  // ...
} as const;
```

---

## Deployment

This project is deployed on Vercel with zero configuration. Push to `main` triggers an automatic production deployment.

```bash
# Install Vercel CLI (optional, for manual deploys)
npm i -g vercel

# Deploy
vercel --prod
```

---

## Author

**Kuril Web Developer**
<br/>
Empowering Indonesian MSMEs and local brands to go digital.

- WhatsApp: [+62 898-5175-971](https://wa.me/628985175971)
- Instagram: [@heyitskuril](https://instagram.com/heyitskuril)
- Portfolio: [Kuril.dev](https://kuril.dev)
---

## Note

This is a concept project created for portfolio purposes and is not an official website for a registered commercial brand. The business data used is fictional and for demonstration only.
