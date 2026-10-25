# Personal Portfolio — Pol Gautier

A personal portfolio built with **Astro, TypeScript, and CSS**, showcasing my journey in IT, systems administration, networking, and cybersecurity.

The website brings together my technical projects, hands-on labs, and cybersecurity write-ups in one place.

Designed as a lightweight static website, with no backend, analytics, or external runtime services.

## Features

- Responsive design with a dark, minimalist aesthetic
- Projects and technical write-ups
- Skills and technologies overview
- Education and career timeline
- Customizable content through Markdown and TypeScript
- Automated deployment workflow for GitHub Pages

## Tech Stack

- [Astro](https://astro.build/)
- TypeScript
- HTML and CSS
- Markdown
- Git and GitHub Actions
- GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20 (recommended)
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Polodemanzana/Polodemanzana.github.io.git
cd Polodemanzana.github.io
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:4321`.

### Build

Check the project and generate the production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated website is available in the `dist/` directory.

## Project Structure

```text
src/
├── content/
│   ├── projects/
│   └── writeups/
├── data/
│   ├── skills.ts
│   └── timeline.ts
├── styles/
└── config.ts

public/
.github/
└── workflows/
```

## Customization

Most of the portfolio content can be edited without changing the site's core components.

| Content | Location |
|---|---|
| Personal details and links | `src/config.ts` |
| Skills and technologies | `src/data/skills.ts` |
| Education and experience | `src/data/timeline.ts` |
| Projects | `src/content/projects/` |
| Technical write-ups | `src/content/writeups/` |
| Global styles and colors | `src/styles/global.css` |

Review placeholder content before publishing and ensure that all project descriptions accurately reflect your own work and contributions.

## Deployment

This repository is intended to be published through **GitHub Pages**.

1. Open the repository's **Settings → Pages**.
2. Select **GitHub Actions** as the deployment source.
3. Check the workflow in `.github/workflows/deploy.yml`.
4. Push your changes to `main`.
5. Check the **Actions** tab to verify that the build and deployment succeed.

The expected website URL is:

**https://polodemanzana.github.io/**

## Security

- Do not commit API keys, passwords, tokens, or other secrets.
- Keep local environment files out of version control.
- Do not publish confidential information from internships, employers, or client environments.
- Use sanitized examples and lab environments for security write-ups.

## Author

**Polodemanzana**

Interested in cybersecurity, systems administration, networking, and infrastructure.

- GitHub: [@Polodemanzana](https://github.com/Polodemanzana)