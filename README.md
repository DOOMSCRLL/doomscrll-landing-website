# DOOMSCRLL Landing Website

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![Framework](https://img.shields.io/badge/Astro-6.1-FF5D01.svg)](https://astro.build/)
[![Styling](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4.svg)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Cloudflare-Workers-F38020.svg)](https://workers.cloudflare.com/)

This repository powers the official public landing portal and brand launch site for the **DOOMSCRLL** ecosystem, hosted live at [https://doomscrll.com](https://doomscrll.com).

---

## 🌐 DOOMSCRLL Open Source Ecosystem

- **Landing Website** (`doomscrll-landing-website`) — _You are here_
- **Backend API** (`doomscrll-backend`) — Fastify 5 REST API & PostgreSQL schema
- **Audience Webapp** (`doomscrll-webapp-audience`) — SvelteKit 2 showcase & discovery feed
- **Creator Webapp** (`doomscrll-webapp-doomlit`) — SvelteKit 2 slot reservation & creator dashboard
- **Audience Mobile App** (`doomscrll_app_audience`) — Cross-platform Flutter MVVM mobile app

---

## 1. Tech Stack & Key Features

- **Astro 6.1**: Component-driven static site generator with Server-Side Rendering (SSR) capabilities.
- **Tailwind CSS v4**: High-performance utility-first styling integrated via `@tailwindcss/vite`.
- **Cloudflare Workers Adapter**: Deployed natively to Cloudflare Edge Network using `@astrojs/cloudflare` and Wrangler.
- **Multilingual Support (i18n)**: Dynamic locale-based routing (`[...locale]`) with localized dictionaries for English (EN) and Turkish (TR).
- **Embedded Pitch Deck**: Clean, self-hosted presentation deck accessible at [/pitch-deck](https://doomscrll.com/pitch-deck).
- **SEO & Performance**: Optimized web manifests, favicons, open graph metadata, and automated `@astrojs/sitemap` generation.

---

## 2. Project Structure

```text
doomscrll-landing-website/
├── public/
│   ├── brand-assets/     # High-res logos, typography, and brand marks
│   ├── img-assets/       # Feature preview screenshots and graphics
│   ├── pitch-deck/       # Clean self-hosted presentation slide deck
│   └── legal.txt         # Terms of Service & Privacy Policy document
├── src/
│   ├── components/       # UI components (Header, Footer, HelpPopup, PromoPopup)
│   ├── layouts/          # Base Astro layout wrappers
│   ├── pages/            # Dynamic locale routing ([...locale].astro)
│   ├── repos/locales/    # EN & TR dictionary translation files
│   └── styles/           # Tailwind CSS imports and custom design tokens
├── astro.config.mjs      # Astro configuration (Cloudflare adapter + Tailwind Vite)
└── wrangler.jsonc        # Cloudflare Workers environment configuration
```

---

## 3. Local Development & Deployment

### Prerequisites

- **Node.js**: `v22.12.0` or higher
- **npm**: `v10.x` or higher

### Commands

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start Local Development Server**:

   ```bash
   npm run dev
   ```

   Open `http://localhost:4321` in your browser.

3. **Build for Production**:

   ```bash
   npm run build
   ```

4. **Preview Production Worker (Local Cloudflare Emulation)**:

   ```bash
   npm run preview
   ```

5. **Deploy to Cloudflare Workers**:
   ```bash
   npm run deploy
   ```

---

## 📄 License & Trademark Notice

- **Code License**: Source code is licensed under the [Apache License, Version 2.0](LICENSE).
- **Trademark Policy**: The **DOOMSCRLL** name, logos, brand identity, and custom design assets are reserved trademarks. See [TRADEMARK.md](TRADEMARK.md) for usage policy and rebranding guidelines for forks.
