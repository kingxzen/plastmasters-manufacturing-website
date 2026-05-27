# Plastmasters Manufacturing Inc. — Official Website

> PET Bottles, HDPE Gallons, PP Jars & Caps Manufacturer in Mexico, Pampanga, Philippines

---

## About

This is the official marketing website for **Plastmasters Manufacturing Inc.**, an SEC-registered plastic packaging manufacturer with over 40 years of experience in the industry. The site is built with React, Tailwind CSS, and Framer Motion.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Page animations |
| Lucide React | Icons |
| Formspree | Contact form email delivery |

---

## Pages / Sections

- **Hero** — Headline, CTA buttons, product overview cards
- **Products** — PET Bottles, HDPE Gallons, PP Jars, Caps & Closures
- **Why Us** — Manufacturing expertise, bulk orders, quality, supply
- **Process** — 4-step inquiry to delivery workflow
- **About** — Company background, 40+ years experience
- **Gallery** — Product visual showcase
- **Facebook Feed** — Embedded Facebook page timeline
- **Location** — Embedded Google Map + directions
- **Contact** — Quote request form (Formspree)
- **FAQ** — Frequently asked questions with schema markup
- **Footer** — Legal modals (Privacy Policy, Terms)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## Configuration Required Before Launch

### 1. Formspree Form ID

In `src/PlastmastersWebsite.jsx`, replace:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

With your real Formspree form endpoint. Sign up at [formspree.io](https://formspree.io) to get your form ID.

### 2. Logo Image

The logo currently uses an external image URL. For best reliability, download the logo and save it to:

```
public/images/plastmasters-logo.png
```

Then update `logoUrl` in `src/PlastmastersWebsite.jsx`:

```js
const logoUrl = "/images/plastmasters-logo.png";
```

### 3. Deploy robots.txt and sitemap.xml

Move the included `public/robots.txt` and `public/sitemap.xml` to your live site root. Update the domain in `sitemap.xml` to your actual production URL.

---

## SEO Features

- Dynamic `<title>` and meta description
- Open Graph and Twitter Card tags
- JSON-LD structured data (LocalBusiness + FAQPage)
- Canonical URL tag
- robots meta tag

---

## Accessibility

- All form inputs have explicit `htmlFor` / `id` associations
- ARIA labels on navigation, buttons, iframes, and modals
- Keyboard focusable all interactive elements
- `lang="en"` set on `<html>` in `index.html`

---

## Contact

**Plastmasters Manufacturing Inc.**  
Blk 11 Lot 11, Global Aseana Business Park 2, Brgy. Mexico, 2015 Pampanga  
Phone: 0917 163 8921  
Email: plastmasters.mfg@gmail.com  
Facebook: [Plastmasters Manufacturing Inc.](https://www.facebook.com/p/Plastmasterss-Manufacturing-Inc-100076153209329/)

---

## License

© 2026 Plastmasters Manufacturing Inc. All rights reserved.
