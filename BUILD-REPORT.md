# CPROTEC — Build Report

## 1. Resumen

Se construyó desde cero una landing estática de CPROTEC con React, Vite, TypeScript y Tailwind CSS. El resultado está organizado por componentes y listo para publicarse en hosting cPanel.

## 2. Arquitectura implementada

`src/components` contiene componentes reutilizables; `src/data/services.ts` centraliza los datos repetitivos; `src/index.css` concentra el sistema visual global y los breakpoints.

## 3. Componentes creados

- `Navbar`: navegación fija, estado al hacer scroll y menú responsive accesible.
- `Hero`: presentación de CPROTEC, servicios principales, CTA e imagen oficial.
- `Services` y `ServiceCard`: rejilla de tres servicios basada en datos.
- `FloatingActions`: chat y WhatsApp identificados como pendientes de configuración, más volver arriba.
- `Footer` y `Brand`: contacto disponible, marca textual temporal, métodos de pago y redes sin URLs inventadas.

## 4. Recursos utilizados

Se copiaron a `public/assets` sin alterar los originales:

- Fotografía de hero: `IMÁGENES/Página principal/inicio.jpg`.
- Fotografías de servicios: los tres archivos `PD_*` de `IMÁGENES/Producciones digitales`.
- Montserrat Regular y Bold.
- Iconos oficiales de WhatsApp, chat, Facebook e Instagram.
- Logos de Mastercard y Diners Club.

## 5. Dependencias agregadas

React, React DOM, Vite, TypeScript, Tailwind CSS con `@tailwindcss/vite`, y ESLint con sus paquetes de TypeScript/React. No se añadió Framer Motion: las interacciones se resuelven con CSS y JavaScript nativo para mantener el bundle ligero.

## 6. Funcionalidades implementadas

- Navegación por anclas y CTA.
- Menú móvil con `aria-expanded`, cierre al elegir un enlace y foco visible.
- Hero y servicios responsive.
- Botón de volver al inicio visible después de desplazarse.
- Estados hover/focus y `prefers-reduced-motion`.
- Enlace de correo funcional (`mailto:info@cprotec.net`).

## 7. Responsive

El layout es mobile-first: menú desplegable y contenido apilado en móvil; dos columnas en tablet; hero en dos áreas y servicios en tres columnas en desktop. Se definieron cortes para 590px y 900px, además de tamaños fluidos para pantallas grandes.

## 8. Animaciones

Transiciones breves para navegación, CTA, tarjetas, menú móvil y acciones flotantes. Se desactivan prácticamente por completo si el usuario pide reducir movimiento.

## 9. SEO

Se añadieron `lang="es"`, title, meta description, Open Graph básico, un único H1, H2 semánticos y textos alternativos. Se incorporó un favicon temporal de letra `C`.

## 10. Accesibilidad

Se utilizaron elementos semánticos, enlace para saltar al contenido, botones reales, foco visible, etiquetas ARIA, textos alternativos y controles táctiles adecuados.

## 11. Rendimiento

Las imágenes de tarjetas usan `loading="lazy"`; la imagen principal usa prioridad de carga. Las fuentes se cargan desde archivos locales y no hay dependencias de animación adicionales.

## 12. Problemas encontrados

El workspace inicial no contenía proyecto, `package.json`, configuración ni `src`; se creó toda la base necesaria. En la primera compilación faltaban tipos de React y el plugin de Tailwind, que se añadieron y corrigieron.

## 13. Pendientes

- El logo oficial únicamente está disponible en archivos AI/PDF. Se usó una marca textual temporal, sin crear un logo alternativo. Conviene exportar y sustituirla por el logo oficial en SVG o PNG web.
- Configurar URLs oficiales de Facebook, Instagram, WhatsApp y el proveedor de chat. Por ello los controles correspondientes no simulan enlaces funcionales.
- Sustituir el favicon temporal por el oficial cuando se entregue un recurso web.
- Las anclas de futuras páginas (Nosotros, Plataforma Educativa y Noticias) están preparadas en navegación, pero sus secciones aún no forman parte de esta landing solicitada.

## 14. Comandos de desarrollo

```bash
npm install
npm run dev
```

## 15. Comando de producción

```bash
npm run build
npm run lint
```

## 16. Despliegue en cPanel

1. En local, ejecutar `npm install` y `npm run build`.
2. Abrir la carpeta `dist/` generada por Vite.
3. En el Administrador de archivos de cPanel, subir **el contenido interno** de `dist/` a `public_html/` (incluidos `index.html`, `assets/` y `favicon.svg`).
4. No es necesario instalar Node.js ni mantener procesos activos en cPanel.
5. Si se publica bajo una subcarpeta, configurar previamente `base` en `vite.config.ts` con la ruta correspondiente y volver a compilar.
