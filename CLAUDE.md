# Mallku Studio — Web

Sitio propio de Mallku Studio, consultora de software (Argentina/LATAM). Es la
vidriera del estudio ante clientes: SEO técnico, performance y calidad visual
son críticos. El proyecto está pensado para evolucionar a template reutilizable
para clientes.

## Stack

- Astro (TypeScript strict), salida estática.
- Tailwind CSS v4 vía `@tailwindcss/vite`, tokens con `@theme` en
  `src/styles/global.css` (sin `tailwind.config.js`).
- `@astrojs/react`, `@astrojs/mdx`, `@astrojs/sitemap`.
- Content Collections con validación Zod (`src/content.config.ts`).
- Tipografías `@fontsource`: Fraunces itálica (titulares), Space Grotesk (UI/cuerpo).
- Hosting: Cloudflare Workers (static assets), deploy automático al hacer push a main.
  Sin adapter SSR. Gestor: npm.

## Regla clave: config vs. estructura

Nada que cambie por cliente puede estar hardcodeado en componentes/layouts.
- Datos de marca/contacto/redes → `src/config/site.ts`.
- Tokens visuales (color, tipografía) → `@theme` en `src/styles/global.css`.
- Contenido → Content Collections (`src/content/`), no en componentes.
- `PUBLIC_ALLOW_INDEXING` (env) → controla `noindex` y `robots.txt`; sin dominio
  propio debe quedar ausente/distinto de `"true"` para no indexar el *.pages.dev.

## Sistema de diseño

- Tokens en `@theme`: `text-{display,h1,h2,h3,body,small,eyebrow}` (clamp),
  `*-gutter`, `*-stack`, `*-section-{sm,md,lg}`, `max-w-content`,
  `ease-{standard,emphasized,exit}`. En `:root`: `--z-*` y `--duration-*`.
- Primitivos sin JS en `src/components/ui/` (Container, Section, Eyebrow,
  LinkButton). Shell: Header, MenuOverlay, Footer en `BaseLayout`.

## Contrato del overlay de menú

`MenuOverlay` usa `<dialog>` nativo. Abrir/cerrar sin acoplarse con los CustomEvent
`mallku:menu-open` / `mallku:menu-close` en `window`, o con `data-menu-open` / `data-menu-close`.

## Bloques de trabajo

**Bloque 2 completo** (shell: tokens, primitivos, Header, MenuOverlay, Footer).
Próximo: **Bloque 3 (hero 3D)**. No instalar animaciones, WebGL, GSAP, Lenis,
Three.js/R3F ni View Transitions hasta que un bloque lo pida explícitamente.
Por ahora, solo transiciones CSS de hover/focus.

## Convenciones de commits

Conventional Commits, mensajes en español, un commit por tarea lógica
(`feat:`, `fix:`, `chore:`, `style:`, `docs:`, etc.).

## Comandos útiles

- `npm run dev` — servidor de desarrollo.
- `npm run build` — build estático a `dist/`.
- `npm run preview` — sirve el build de `dist/`.
- `npm run check` — `astro check` (TypeScript + diagnósticos Astro).
- `npm run format` — formatea con Prettier (incluye `.astro`).
- `npm run test:e2e` — Playwright (chromium) contra build + preview.
