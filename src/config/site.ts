/**
 * Configuración específica de cliente/sitio.
 *
 * Este archivo es el único lugar donde deben vivir los datos que cambian
 * de un cliente a otro (nombre, copy de marca, contacto, redes, etc.).
 * Ningún componente o layout debe hardcodear estos valores: siempre se
 * importan desde aquí.
 */

export const siteConfig = {
  /** Nombre de la marca / estudio. */
  name: 'Mallku Studio',

  /** Descripción corta usada como meta description por defecto. */
  description:
    'Mallku Studio es una consultora de software especializada en desarrollo, QA y arquitectura backend para equipos que necesitan construir con calidad.',

  /**
   * URL base del sitio, sin slash final. Se lee de la variable de entorno
   * PUBLIC_SITE_URL (ver .env.example) y cae a un placeholder si no está
   * definida, para que el proyecto siga siendo buildeable localmente.
   */
  url: (import.meta.env.PUBLIC_SITE_URL ?? 'https://www.mallkustudio.com').replace(/\/+$/, ''),

  /** Idioma principal del sitio (atributo lang del documento). */
  lang: 'es',

  /** Email de contacto público (placeholder). */
  contactEmail: 'hola@mallkustudio.com',

  /** Número de WhatsApp en formato internacional, sin signos (placeholder). */
  whatsappNumber: '5491100000000',

  /** Redes sociales (placeholders, completar por cliente). */
  social: {
    instagram: 'https://instagram.com/mallkustudio',
    linkedin: 'https://www.linkedin.com/company/mallkustudio',
    github: 'https://github.com/mallkustudio',
  },
} as const;

export type SiteConfig = typeof siteConfig;
