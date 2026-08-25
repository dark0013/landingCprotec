# BUILD.md --- FASE 03: BUILD / IMPLEMENTACIÓN CPROTEC

## Propósito

Este documento define la fase de construcción de la landing page de
CPROTEC.

La implementación debe realizarse tomando como fuentes de verdad los
documentos de análisis, diseño y especificación ubicados dentro de:

``` text
doc/
```

Los documentos esperados son:

``` text
doc/spec_inicio_landing_25082026.md
doc/analysis.md
doc/DESING.md
```

Antes de comenzar a programar, leer los tres documentos completos.

------------------------------------------------------------------------

# 1. Objetivo

Construir la landing page funcional de CPROTEC utilizando:

-   React
-   Vite
-   TypeScript
-   Tailwind CSS

Para animaciones, utilizar Framer Motion únicamente cuando aporte valor
real.

La landing debe:

-   respetar la identidad de CPROTEC;
-   utilizar los recursos disponibles en `recursos_grafico/`;
-   seguir las decisiones de `doc/analysis.md`;
-   seguir el sistema visual de `doc/DESING.md`;
-   cumplir los requisitos de `doc/spec_inicio_landing_25082026.md`;
-   mejorar el acabado visual de la maqueta;
-   ser responsive;
-   ser accesible;
-   tener SEO básico;
-   tener buen rendimiento;
-   poder desplegarse como sitio estático en cPanel + PHP.

------------------------------------------------------------------------

# 2. FUENTES DE VERDAD

Leer en este orden:

``` text
1. doc/spec_inicio_landing_25082026.md
2. doc/analysis.md
3. doc/DESING.md
```

### `spec_inicio_landing_25082026.md`

Define:

-   objetivos;
-   requisitos;
-   contenido;
-   restricciones;
-   stack;
-   estructura esperada.

### `analysis.md`

Define los resultados del análisis:

-   estado del proyecto;
-   recursos;
-   problemas detectados;
-   riesgos;
-   arquitectura recomendada.

### `DESING.md`

Define:

-   dirección visual;
-   colores;
-   tipografía;
-   layout;
-   componentes visuales;
-   responsive;
-   motion;
-   UX.

No ignorar ninguno de estos documentos.

Si existe una contradicción, identificarla y resolverla de forma
coherente con el objetivo general del proyecto.

------------------------------------------------------------------------

# 3. RECURSOS GRÁFICOS

Inspeccionar:

``` text
recursos_grafico/
```

antes de implementar los componentes.

Utilizar prioritariamente:

-   logo oficial;
-   fotografías oficiales;
-   iconos;
-   ilustraciones;
-   recursos de marca;
-   elementos de la maqueta.

No inventar recursos cuando exista uno apropiado.

No modificar los archivos originales de:

``` text
recursos_grafico/
```

Si es necesaria una optimización, generar una copia apropiada para web.

------------------------------------------------------------------------

# 4. STACK

El stack obligatorio es:

``` text
React
Vite
TypeScript
Tailwind CSS
```

Animaciones:

``` text
Framer Motion
```

No utilizar:

-   Next.js;
-   Angular;
-   Bootstrap;
-   Material UI;
-   librerías visuales innecesarias.

Mantener el proyecto ligero.

------------------------------------------------------------------------

# 5. HOSTING

El hosting objetivo es:

``` text
cPanel + PHP
```

La aplicación debe funcionar como sitio estático.

La producción debe generarse mediante:

``` bash
npm run build
```

No depender en producción de:

-   Node.js;
-   SSR;
-   servidor Node;
-   procesos persistentes;
-   APIs de Next.js.

La solución final debe poder copiarse al hosting como archivos
estáticos.

------------------------------------------------------------------------

# 6. INSPECCIÓN PREVIA

Antes de modificar código:

1.  leer los tres documentos de `doc/`;
2.  inspeccionar el proyecto;
3.  revisar `package.json`;
4.  revisar configuración de Vite;
5.  revisar TypeScript;
6.  revisar Tailwind;
7.  revisar estructura `src/`;
8.  revisar `public/`;
9.  inspeccionar `recursos_grafico/`;
10. identificar qué ya existe y qué falta.

No eliminar código existente sin justificación.

Reutilizar código correcto cuando sea posible.

------------------------------------------------------------------------

# 7. ARQUITECTURA

Implementar una arquitectura componentizada.

Como referencia:

``` text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── ServiceCard.tsx
│   ├── FloatingActions.tsx
│   ├── BackToTop.tsx
│   └── Footer.tsx
│
├── data/
│   └── services.ts
│
├── assets/
│
├── App.tsx
├── main.tsx
└── index.css
```

La estructura puede adaptarse si el proyecto existente requiere otra
organización.

No colocar toda la aplicación en un único componente.

------------------------------------------------------------------------

# 8. IMPLEMENTACIÓN

Construir en este orden:

## 8.1 Base

Configurar:

-   Tailwind;
-   estilos globales;
-   tipografía;
-   variables;
-   layout base.

## 8.2 Navbar

Implementar:

-   logo;
-   navegación;
-   CTA;
-   sticky;
-   scroll state;
-   menú mobile.

## 8.3 Hero

Implementar:

-   marca;
-   título;
-   subtítulo;
-   descripción;
-   servicios;
-   CTA;
-   imagen.

El Hero debe ser la sección visualmente dominante.

## 8.4 Servicios

Implementar:

-   título;
-   tres servicios;
-   ServiceCard;
-   iconos;
-   contenido;
-   hover;
-   responsive.

## 8.5 Floating Actions

Implementar:

-   WhatsApp;
-   chat;
-   volver arriba.

## 8.6 Footer

Implementar:

-   logo;
-   contacto;
-   redes;
-   privacidad;
-   métodos de pago;
-   copyright.

------------------------------------------------------------------------

# 9. DISEÑO

Seguir estrictamente la dirección visual definida en:

``` text
doc/DESING.md
```

El resultado debe conservar la intención de la maqueta, pero no debe
sentirse como una conversión automática de una imagen.

Priorizar:

-   jerarquía;
-   espaciado;
-   composición;
-   tipografía;
-   contraste;
-   consistencia;
-   apariencia corporativa;
-   acabado premium.

Evitar:

-   exceso de gradientes;
-   tarjetas pesadas;
-   sombras exageradas;
-   demasiados colores;
-   animaciones excesivas;
-   apariencia de plantilla genérica.

------------------------------------------------------------------------

# 10. RESPONSIVE

Implementar mobile-first.

Verificar como mínimo:

``` text
360px
390px
430px
768px
1024px
1280px
1440px
1920px
```

No permitir:

-   overflow horizontal;
-   texto cortado;
-   botones fuera de pantalla;
-   imágenes deformadas;
-   navbar roto;
-   tarjetas desbordadas.

Adaptar la composición, no solamente reducir tamaños.

------------------------------------------------------------------------

# 11. ANIMACIONES

Usar Framer Motion solo donde aporte valor.

Aplicar preferentemente:

-   fade;
-   slide;
-   stagger;
-   hover;
-   menú móvil;
-   navbar;
-   aparición de tarjetas.

Las animaciones deben ser:

-   rápidas;
-   suaves;
-   discretas;
-   profesionales.

Respetar:

``` text
prefers-reduced-motion
```

------------------------------------------------------------------------

# 12. ACCESIBILIDAD

Implementar:

-   HTML semántico;
-   `alt` en imágenes;
-   botones reales;
-   enlaces reales;
-   navegación por teclado;
-   focus visible;
-   `aria-label` cuando corresponda;
-   contraste suficiente;
-   tamaños táctiles adecuados.

No utilizar `<div>` como botón.

------------------------------------------------------------------------

# 13. SEO

Implementar:

-   title;
-   meta description;
-   `lang="es"`;
-   favicon;
-   Open Graph básico;
-   H1;
-   H2;
-   headings semánticos;
-   alt text.

Preparar la arquitectura para una futura versión internacional.

------------------------------------------------------------------------

# 14. RENDIMIENTO

Optimizar:

-   imágenes;
-   fuentes;
-   JavaScript;
-   dependencias;
-   animaciones.

Evitar dependencias innecesarias.

Utilizar lazy loading cuando corresponda.

No cargar imágenes enormes si existe una alternativa optimizada.

------------------------------------------------------------------------

# 15. CONTENIDO

Utilizar el contenido definido en:

``` text
doc/spec_inicio_landing_25082026.md
```

y los recursos disponibles.

No inventar:

-   información corporativa;
-   direcciones;
-   redes sociales;
-   teléfonos;
-   correos;
-   métodos de pago.

Si falta información imprescindible:

1.  utilizar un placeholder claramente identificable;
2.  documentar el dato pendiente;
3.  continuar con la implementación sin inventarlo.

------------------------------------------------------------------------

# 16. DATOS Y COMPONENTES

Los elementos repetitivos deben manejarse mediante estructuras de datos.

Por ejemplo:

``` ts
const services = [
  {
    title: "...",
    description: "...",
    icon: "..."
  }
]
```

No duplicar manualmente estructuras equivalentes.

------------------------------------------------------------------------

# 17. VERIFICACIÓN DURANTE EL BUILD

Trabajar incrementalmente.

Después de implementar cada bloque importante verificar:

-   compilación;
-   imports;
-   TypeScript;
-   estilos;
-   imágenes;
-   errores de consola.

Al finalizar ejecutar:

``` bash
npm run build
```

Si existe:

``` bash
npm run lint
```

ejecutarlo también.

Corregir errores críticos y warnings relevantes.

------------------------------------------------------------------------

# 18. REVISIÓN VISUAL

Comparar la implementación final con:

``` text
recursos_grafico/
```

y:

``` text
doc/DESING.md
```

Revisar especialmente:

### Navbar

-   logo;
-   proporciones;
-   navegación;
-   CTA.

### Hero

-   composición;
-   jerarquía;
-   imagen;
-   CTA;
-   responsive.

### Servicios

-   tarjetas;
-   iconos;
-   espaciado;
-   legibilidad.

### Footer

-   columnas;
-   contacto;
-   redes;
-   pagos;
-   copyright.

### Mobile

-   menú;
-   hero;
-   servicios;
-   footer;
-   botones flotantes.

------------------------------------------------------------------------

# 19. CRITERIO DE MODERNIZACIÓN

Cuando la maqueta tenga un elemento visual que se perciba anticuado o
demasiado rústico, no copiarlo literalmente.

Aplicar esta prioridad:

``` text
Identidad de marca
        ↓
Contenido
        ↓
Intención de la maqueta
        ↓
Design System
        ↓
Usabilidad
        ↓
Modernización visual
```

El objetivo es producir una evolución profesional de la maqueta.

------------------------------------------------------------------------

# 20. ARCHIVOS

Se pueden crear o modificar los archivos necesarios para la
implementación.

Ejemplos:

``` text
src/components/*
src/data/*
src/assets/*
src/styles/*
```

No modificar:

``` text
doc/spec_inicio_landing_25082026.md
doc/analysis.md
doc/DESING.md
```

Estos documentos son las fuentes de verdad.

No modificar:

``` text
recursos_grafico/
```

salvo que sea estrictamente necesario y mediante copias.

------------------------------------------------------------------------

# 21. DOCUMENTACIÓN FINAL

Al terminar la implementación crear:

``` text
BUILD-REPORT.md
```

Debe contener:

``` text
# CPROTEC — Build Report

## 1. Resumen

## 2. Arquitectura implementada

## 3. Componentes creados

## 4. Recursos utilizados

## 5. Dependencias agregadas

## 6. Funcionalidades implementadas

## 7. Responsive

## 8. Animaciones

## 9. SEO

## 10. Accesibilidad

## 11. Rendimiento

## 12. Problemas encontrados

## 13. Pendientes

## 14. Comandos de desarrollo

## 15. Comando de producción

## 16. Despliegue en cPanel
```

------------------------------------------------------------------------

# 22. DESPLIEGUE

Documentar:

``` bash
npm install
npm run build
```

Indicar cuál es la carpeta generada por Vite y qué contenido debe
publicarse en:

``` text
public_html/
```

La documentación debe asumir un hosting tradicional con cPanel + PHP.

------------------------------------------------------------------------

# 23. DEFINICIÓN DE TERMINADO

La Fase 03 se considera terminada cuando:

-   la landing está implementada;
-   los componentes principales funcionan;
-   los recursos gráficos están integrados;
-   el diseño sigue `doc/DESING.md`;
-   los requisitos siguen `doc/spec_inicio_landing_25082026.md`;
-   las decisiones técnicas son coherentes con `doc/analysis.md`;
-   responsive funciona;
-   las animaciones funcionan;
-   SEO básico está implementado;
-   accesibilidad básica está implementada;
-   no existen errores críticos;
-   `npm run build` termina correctamente;
-   el proyecto está preparado para despliegue estático en cPanel.

------------------------------------------------------------------------

# 24. REGLA FINAL

Antes de finalizar, volver a verificar:

``` text
doc/spec_inicio_landing_25082026.md
doc/analysis.md
doc/DESING.md
```

La implementación debe ser coherente con los tres.

Si aparece una contradicción:

1.  identificarla;
2.  resolverla de forma razonable;
3.  documentarla en `BUILD-REPORT.md`.

No cambiar silenciosamente requisitos fundamentales.

------------------------------------------------------------------------

# 25. INICIO DE LA FASE

Comienza leyendo:

``` text
doc/spec_inicio_landing_25082026.md
doc/analysis.md
doc/DESING.md
```

Después inspecciona:

``` text
recursos_grafico/
```

y el proyecto existente.

A continuación comienza la implementación.

Trabaja de forma incremental y verifica el proyecto durante todo el
proceso.

Al finalizar:

1.  ejecutar `npm run build`;
2.  ejecutar `npm run lint` si existe;
3.  corregir errores;
4.  realizar una revisión visual;
5.  crear `BUILD-REPORT.md`;
6.  entregar un resumen final de lo construido.
