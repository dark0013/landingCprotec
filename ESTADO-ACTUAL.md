# CPROTEC — Estado actual del proyecto

**Fecha:** 30 de agosto de 2026  
**Repositorio:** `cprotec-landing`  
**Versión:** 1.0.0  
**Rama de trabajo:** `develop`

Sitio corporativo estático de CPROTEC (Portoviejo y Guayaquil). Se publica como HTML/CSS/JS para cPanel. Ya no es solo la landing de Producciones Digitales: incluye las cuatro líneas de negocio, contacto, nosotros, noticias, plataforma educativa y privacidad.

---

## 1. Resumen ejecutivo

| Aspecto | Estado |
|---|---|
| Stack | React 19 + Vite + TypeScript + Tailwind 4 |
| Identidad visual | Logo oficial extraído del brand book |
| Navbar | Navy en el top; blanco con logo a color al hacer scroll |
| Páginas | Home + 4 líneas + fichas de servicio + contacto + 4 páginas institucionales |
| Hosting | Estático (`dist/` → `public_html/`) + `contacto.php` |
| Build / lint | `npm run build` y `npm run lint` pasan |
| Pendiente crítico | URLs de redes, WhatsApp y chat (no hay enlaces oficiales) |

`BUILD-REPORT.md` describe una versión anterior (marca textual, CSS monolítico, solo Producciones). Este documento refleja el código actual.

---

## 2. Metodología y fuentes de verdad

El trabajo sigue el pipeline de `doc/`:

| Fase | Documento | Rol |
|---|---|---|
| Spec | `doc/spec/spec_inicio_landing_25082026.md` | Objetivos, stack, contenido, cPanel |
| Análisis | `doc/analysis/analysis.md` | Instrucciones de la fase 01 |
| Diseño | `doc/desing/DESIGN.md` | Dirección visual (carpeta con typo: `desing`) |
| Build | `doc/build/build.md` | Instrucciones de implementación |
| Maquetas y marca | `doc/recursos_grafico/` | Maquetas, fotos, brand book, tipografías |
| Respaldo | `doc/RESPALDO/` | Copia del pack original |

Prioridad cuando chocan maqueta e implementación web:

```text
Identidad de marca → Contenido → Intención de la maqueta
→ Design system → Usabilidad → Modernización visual
```

No se inventan teléfonos, redes, logos ni direcciones. Los originales de `recursos_grafico/` no se modifican; se copian versiones web a `public/`.

No existen `ANALYSIS-REPORT.md` ni `DESIGN-SYSTEM.md` (los pedían las fases 01 y 02).

---

## 3. Stack técnico

| Capa | Tecnología | Uso real |
|---|---|---|
| UI | React 19 + TypeScript strict | Componentes |
| Bundler | Vite 8 | SPA estática |
| Estilos | Tailwind 4 (`@tailwindcss/vite`) + CSS Modules | Tokens globales + estilos por componente |
| Routing | Hash (`window.location.hash`) | Compatible con cPanel, sin React Router |
| Animación | CSS + JS nativo | Sin Framer Motion |
| Correo | `public/contacto.php` | `mail()` en cPanel; fallback `mailto:` |
| Hosting | `dist/` | Sin Node/SSR en producción |

Dependencias en `package.json` usan `"latest"` en varios paquetes: los builds no son estrictamente reproducibles.

---

## 4. Arquitectura de código

```text
src/
├── App.tsx                      # Router por hash
├── main.tsx
├── index.css                    # Importa Tailwind + tokens + base
├── vite-env.d.ts
├── lib/route.ts                 # parseHash()
├── data/
│   ├── catalog.ts               # Líneas y ofertas
│   └── site.ts                  # Nav, contacto, privacidad, pagos
├── styles/
│   ├── tokens.css               # Paleta, fuentes, :root
│   └── base.css                 # Reset, .shell, .button, reduced-motion
├── pages/
│   └── HomePage.tsx
└── components/
    ├── Layout/Layout.tsx
    ├── Brand/
    ├── Navbar/
    ├── Hero/
    ├── Services/
    ├── ServiceCard/
    ├── LinePage/
    ├── OfferingPage/
    ├── ContactPage/
    ├── Footer/
    ├── FloatingActions/
    └── SimplePage/              # Nosotros, Noticias, Plataforma, Privacidad
```

Cada componente de UI tiene `*.tsx` + `*.module.css`.

### Enrutado

`App.tsx` lee `location.hash`. Rutas de página hacen scroll al inicio.

| Ruta | Vista |
|---|---|
| `#/` | Home — Producciones Digitales |
| `#/capacitaciones` | Línea Capacitaciones |
| `#/soluciones` | Línea Soluciones Tecnológicas |
| `#/productos` | Línea Productos Tecnológicos |
| `#/servicios/:slug` | Ficha de un servicio |
| `#/nosotros` | Nosotros |
| `#/plataforma` | Plataforma educativa (aviso de habilitación) |
| `#/noticias` | Noticias (sin copys inventados) |
| `#/contacto` | Contacto |
| `#/privacidad` | Política de privacidad |

---

## 5. Identidad visual

Colores del brand book y de las maquetas de línea:

| Token | Hex | Uso |
|---|---|---|
| `--blue` / `--nav` | `#274193` | Navbar en reposo, marca |
| `--cyan` | `#00a5ae` | Acento teal |
| `--red` | `#e02a37` | Hero Producciones, CTA |
| `--purple` | `#6f5aa0` | Hero Capacitaciones |
| `--gold` | `#f9b036` | Hero Soluciones |
| `--green` | `#46ad48` | Hero Productos |
| Tipografía | Montserrat 400 / 700 / 900 | Archivos locales |

### Logos oficiales (`public/assets/brand/`)

Exportados del *Brand book CPROTEC.pdf*, sin redibujar:

- `logo-horizontal-color.png`
- `logo-horizontal-white.png`
- `logo-vertical-color.png`
- `logo-vertical-white.png`
- `isotipo-color.png`
- `favicon.png`

Navbar y footer: logo horizontal. Heroes de línea: logo blanco grande + nombre de la línea.

---

## 6. Páginas y contenido

### Home (`#/`)

Navbar navy + hero rojo (como la maqueta de Producciones) + foto oficial + tres tarjetas + footer.

Servicios de home:

1. Diseño Gráfico Publicitario  
2. Marketing y publicidad  
3. Servicios audiovisuales para eventos sociales  

### Líneas de negocio

| Línea | Color | Ofertas |
|---|---|---|
| Producciones Digitales | Rojo | 3 |
| Capacitaciones | Morado | Marketing, Diseño Gráfico, Informática, Asesoría de proyectos |
| Soluciones Tecnológicas | Dorado | Auditoría, web, software, investigación de mercado, mantenimiento, transformación digital |
| Productos Tecnológicos | Verde | Equipos de cómputo, periféricos |

Los textos salen de las maquetas en `doc/recursos_grafico/maqueta/`.

### Contacto (`#/contacto`)

- Formulario al estilo de la maqueta CONTACTO (nombre, apellido, celular, correo, asunto, mensaje).
- POST a `/contacto.php`; si falla, abre `mailto:info@cprotec.net`.
- Mapas embebidos de Portoviejo y Guayaquil.
- Equipo: Ing. Rolando Cedeño e Ing. María Auxiliadora Núñez (datos de la maqueta).
- Facebook, Instagram y WhatsApp visibles, **sin URL** (dato no disponible).

### Institucionales

- **Nosotros:** líneas de negocio y sedes, sin misión/visión inventadas (los PNG de Recursos no traen copy).
- **Noticias:** estructura lista; un aviso de “próximamente” y la foto de ejemplo oficial.
- **Plataforma educativa:** aviso hasta que exista el acceso oficial.
- **Privacidad:** texto de la maqueta.

### Navbar

- En el top: fondo `#274193`, logo blanco, enlaces blancos.
- Tras 24 px de scroll: fondo blanco, logo color, texto oscuro, CTA rojo.
- Al cambiar de hash `#/...` se resetea a navy (no hereda el estado blanco).
- Escritorio: desplegable de Servicios.
- Móvil: hamburguesa, sublíneas visibles y CTA rojo.

---

## 7. Recursos en `public/`

```text
public/
├── contacto.php
├── favicon.svg                    # legado (letra C); el head usa favicon.png
└── assets/
    ├── brand/                     # logos oficiales
    ├── fonts/                     # Montserrat Regular, Bold, Black
    ├── hero.jpg                   # ~100 KB (antes ~4 MB)
    ├── icons/                     # chat, Facebook, Instagram, WhatsApp
    ├── lines/                     # héroes y tarjetas de las 4 líneas
    ├── payments/                  # Visa, Mastercard, Diners, Amex
    └── services/                  # JPG optimizados (+ PNG originales)
```

Los originales siguen en `doc/recursos_grafico/`.

---

## 8. SEO, accesibilidad y rendimiento

**SEO:** `lang="es"`, title, meta description, Open Graph básico, H1 por página, alt en imágenes, favicon del isotipo. Un solo `index.html` (límite del hash routing).

**Accesibilidad:** skip link, `header`/`nav`/`main`/`footer`, `aria-expanded` en el menú, foco visible, `prefers-reduced-motion`, botones reales.

**Rendimiento:** hero e imágenes de servicio comprimidas a JPEG; lazy load en tarjetas; fuentes locales; sin librería de motion.

---

## 9. Cómo correrlo y desplegarlo

### Local

```bash
npm install
npm run dev
```

### Producción

```bash
npm run build
npm run lint
```

La salida queda en `dist/`.

### cPanel

1. Subir el **contenido interno** de `dist/` a `public_html/` (`index.html`, `assets/`, `contacto.php`).
2. No hace falta Node en el servidor.
3. El envío del formulario requiere que `mail()` de PHP esté habilitado.
4. Si el sitio vive en una subcarpeta, definir `base` en `vite.config.ts` y volver a compilar.

---

## 10. Hecho vs pendiente

### Cerrado respecto al informe anterior

- Logo oficial (ya no es marca textual).
- Favicon del isotipo.
- CSS por módulo de componente.
- Navbar: deja de fundirse en azul; hero de Producciones en rojo.
- Páginas Nosotros, Capacitaciones, Soluciones, Productos, Noticias, Plataforma, Privacidad.
- Formulario con `contacto.php` y fallback de correo.
- Política de privacidad en footer y página propia.
- Cuatro logos de pago.
- Compresión del hero y de fotos de servicio.

### Sigue pendiente

| Ítem | Motivo |
|---|---|
| URLs de Facebook, Instagram, WhatsApp y chat | No constan en los recursos; no se inventaron |
| Fotos del equipo en Contacto | La maqueta tiene recuadros vacíos |
| Misión / visión / valores con copy | Solo hay iconos; no hay textos oficiales |
| Noticias reales | Solo hay imagen de ejemplo |
| Plataforma educativa | No hay URL ni maqueta de producto |
| Logo en SVG vectorial | El brand book se exportó a PNG |
| Versiones fijas en `package.json` | Varios paquetes están en `"latest"` |
| PNG viejos en `public/assets/services/` | Quedaron junto a los JPG nuevos |
| `favicon.svg` legado | El HTML ya apunta al PNG oficial |
| i18n `/es/` `/en/` | Previsto en spec, no implementado |
| Pruebas automatizadas | No hay suite |

---

## 11. Riesgos abiertos

| Riesgo | Impacto |
|---|---|
| Hash routing | Un HTML; SEO de fichas limitado |
| Formulario PHP | En `npm run dev` no hay PHP; se usa `mailto:` |
| `"latest"` en dependencias | Builds no reproducibles |
| Pack gráfico + zip en `doc/` | Repo pesado |
| Redes sin URL | Iconos visibles pero no clicables, a propósito |

---

## 12. Criterio de madurez

El proyecto **superó la Fase 03** de la landing original. La base (identidad, layout, routing, contacto, líneas de negocio) está implementada y el build es verde.

Lo que falta para un cierre comercial es principalmente **configuración de canales** (redes y WhatsApp), **contenido editorial** (noticias, misión/visión) y **higiene de repo** (versiones fijadas, PNG duplicados, pack gráfico fuera del deploy).
