<<<<<<< HEAD
# Portfolio · Pol Gautier

Sitio estático con **Astro + TypeScript + CSS**, sin backend, sin analítica ni servicios externos (fuentes del sistema, sin CDN). Desplegable gratis en GitHub Pages.

## Ejecutar en local
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # comprueba tipos y genera /dist
npm run preview
```
Requiere Node 18.20+ (recomendado 20).

## Personalizar (todo en archivos editables)
| Qué | Dónde |
|---|---|
| Nombre, enlaces, disponibilidad | `src/config.ts` (deja `''` para ocultar un enlace) |
| Tecnologías y su nivel (proyectos / académico / aprendiendo) | `src/data/skills.ts` |
| Formación y trayectoria | `src/data/timeline.ts` (`hidden: true` oculta una entrada) |
| Proyectos | `src/content/projects/*.md` (`draft: true` los oculta) |
| Write-ups | `src/content/writeups/*.md` (imágenes en `public/img/`) |
| Colores | variables al inicio de `src/styles/global.css` |

Pendiente de completar: LinkedIn y correo (`src/config.ts`), repositorio y estado de `HoneyPot-IDS-IPS`, problema y tu contribución, y el write-up de ejemplo (es solo plantilla). Cuando confirmes tu disponibilidad, pon `availability.enabled: true`.

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub. Si se llama `polodemanzana.github.io`, la web quedará en `https://polodemanzana.github.io` y no cambias nada. Si usa otro nombre (ej. `portfolio`), en `astro.config.mjs` pon `base: '/portfolio'`.
2. Sube el código:
```bash
git init && git add . && git commit -m "Primera versión del portfolio"
git branch -M main
git remote add origin https://github.com/Polodemanzana/NOMBRE-REPO.git
git push -u origin main
```
3. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Cada `git push` a `main` ejecuta `.github/workflows/deploy.yml` y publica. Revisa la pestaña **Actions**.

## Seguridad
Sin secretos ni formularios; `.gitignore` excluye `.env` y claves. No publiques datos internos de tu empresa de prácticas.
=======
# Personal Portfolio

Personal portfolio website built with **Astro** and **TypeScript**, showcasing my journey in IT, systems administration, and cybersecurity.

The website brings together my technical projects, hands-on labs, and cybersecurity write-ups in one place.

## Features

- Responsive, dark-themed design
- Projects and technical write-ups
- Skills and technologies overview
- Personal introduction and career timeline
- Static site built with Astro
- Deployment support through GitHub Actions

## Tech Stack

- [Astro](https://astro.build/)
- TypeScript
- HTML and CSS
- GitHub Pages

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/Polodemanzana/portfolio.git
cd portfolio
npm install
npm run dev
```

Open the local URL shown in the terminal to preview the website.

### Build

```bash
npm run build
```

The generated website will be available in the `dist/` directory.

## Deployment

The project is configured for deployment using GitHub Actions. Check the repository workflow and Astro configuration before publishing.

## Author

**Polodemanzana**

Interested in cybersecurity, systems administration, networking, and infrastructure.

- GitHub: [@Polodemanzana](https://github.com/Polodemanzana)
>>>>>>> origin/main
