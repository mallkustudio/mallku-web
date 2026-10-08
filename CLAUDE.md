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
- Tipografías autoalojadas con `@fontsource` (Fraunces itálica para
  titulares, Space Grotesk para UI/cuerpo).
- Hosting futuro: Cloudflare Pages (sin adapter SSR). Gestor: npm.

## Regla clave: config vs. estructura

Nada que cambie por cliente puede estar hardcodeado en componentes/layouts.
- Datos de marca/contacto/redes → `src/config/site.ts`.
- Tokens visuales (color, tipografía) → `@theme` en `src/styles/global.css`.
- Contenido → Content Collections (`src/content/`), no en componentes.

## Bloques de trabajo

Estamos en el **Bloque 1 (cimientos)**. No instalar ni usar animaciones,
WebGL, GSAP, Lenis ni Three.js hasta que un bloque posterior lo pida
explícitamente.

## Convenciones de commits

Conventional Commits, mensajes en español, un commit por tarea lógica
(`feat:`, `fix:`, `chore:`, `style:`, `docs:`, etc.).

## Comandos útiles

- `npm run dev` — servidor de desarrollo.
- `npm run build` — build estático a `dist/`.
- `npm run preview` — sirve el build de `dist/`.
- `npm run check` — `astro check` (TypeScript + diagnósticos Astro).
- `npm run format` — formatea con Prettier (incluye `.astro`).
