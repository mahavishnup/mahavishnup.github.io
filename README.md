# 🚀 Mahavishnu — Personal Portfolio & Blog

A modern, high-performance developer portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Designed for **Static Export** and optimized for **GitHub Pages**. Features a 3D hero scene, local Markdown blog system, and premium dark-mode aesthetics.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss)
![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub_Pages-black?logo=github-pages)

---

## ✨ Features

- **3D Hero Section** — Interactive React Three Fiber scene with ambient glow animations
- **Static Export** — Zero-maintenance architecture, perfect for GitHub Pages
- **Responsive Design** — Pixel-perfect on mobile, tablet, and desktop
- **Dark / Light Mode** — System-aware theme with smooth transitions
- **Markdown Blog** — Content managed via local `.md` files with YAML frontmatter
- **SEO Optimized** — OpenGraph, Twitter cards, sitemap.xml, robots.txt, and professional keywords
- **Custom Cursor** — Hydration-safe animated cursor (desktop only)
- **Static Forms** — Contact and Newsletter forms integrated with Formspree
- **Framer Motion** — Staggered animations throughout
- **Automated Deploy** — GitHub Actions workflow for zero-click deployment

---

## 🛠 Tech Stack

| Layer         | Technology                             |
| :------------ | :------------------------------------- |
| Framework     | Next.js 16 (App Router, Static Export) |
| Language      | TypeScript                             |
| Styling       | Tailwind CSS 4                         |
| UI Components | ShadCN UI                              |
| Animations    | Framer Motion                          |
| 3D            | React Three Fiber + Drei               |
| Blog Content  | Markdown + Gray-Matter                 |
| Forms         | Formspree                              |
| Deployment    | GitHub Pages                           |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm / yarn / pnpm

### 1. Clone & Install

```bash
git clone https://github.com/mahavishnup/mahavishnup.github.io.git ./personal-portfolio
cd personal-portfolio
npm install
```

### 2. Environment Variables

```bash
cp .env.example .env
```

Fill in your **Formspree** endpoints in `.env`:

- `NEXT_PUBLIC_FORMSPREE_URL`: Your contact form endpoint.
- `NEXT_PUBLIC_NEWSLETTER_URL`: Your newsletter form endpoint.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (main)/          # Public routes (home, about, blogs, etc.)
│   └── sitemap.ts       # Dynamic sitemap generator
├── content/
│   └── blogs/           # Blog posts (.md files)
├── components/
│   ├── 3d/              # Three.js hero scene
│   ├── blog/            # Blog card, listing
│   ├── contact/         # Contact form (Formspree)
│   ├── home/            # Skills, projects, about sections
│   ├── layout/          # Header, footer (Newsletter)
│   └── ui/              # ShadCN UI + custom cursor
├── lib/                 # Static data, blog reader, utils
└── env.ts               # Environment variable validation
```

---

## 🌐 Deployment (GitHub Pages)

This project is configured for automatic deployment via GitHub Actions:

1. Push your code to the `master` branch.
2. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy the site to the `gh-pages` branch.
3. Ensure your Repository Settings -> **Pages** is set to deploy from **GitHub Actions**.

---

## 📜 Scripts

| Command          | Description               |
| :--------------- | :------------------------ |
| `npm run dev`    | Start development server  |
| `npm run build`  | Static export build       |
| `npm run format` | Format code with Prettier |
| `npm run lint`   | Lint with ESLint          |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Mahavishnu P**

- [GitHub](https://github.com/mahavishnup)
- [LinkedIn](https://www.linkedin.com/in/developermahavishnu)
- [YouTube](https://www.youtube.com/@mahavishnu9312)
- [Instagram](https://www.instagram.com/developermahavishnu)
- [Linktree](https://linktr.ee/Mahavishnup)
- [Whatsapp](https://wa.me/message/U6MXBH4QLX4XA1)
- [Portfolio](https://mahavishnup.github.io)
