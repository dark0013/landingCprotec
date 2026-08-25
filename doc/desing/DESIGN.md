# DESIGN.md --- FASE 02: DISEÑO VISUAL CPROTEC

## Propósito

Este documento define la **Fase 02 --- Diseño** de la landing page de
CPROTEC.

Esta fase comienza después de completar `analysis.md`.

El objetivo es transformar el análisis y la maqueta existente en una
**especificación visual y de experiencia de usuario concreta**, antes de
realizar la implementación final.

> **IMPORTANTE:** esta fase debe definir el diseño. No debe convertirse
> todavía en una fase de programación completa.

------------------------------------------------------------------------

# 1. Objetivo

Crear una propuesta de diseño web moderna para CPROTEC que:

-   conserve la identidad de la empresa;
-   respete la maqueta original;
-   mejore su acabado visual;
-   tenga apariencia corporativa e internacional;
-   sea clara y fácil de navegar;
-   sea responsive;
-   tenga buena jerarquía visual;
-   esté preparada para React + Vite + Tailwind CSS;
-   pueda implementarse como sitio estático para cPanel + PHP.

La meta no es cambiar completamente la maqueta.

La meta es:

> **mantener la esencia de la maqueta y elevar su calidad visual y UX.**

------------------------------------------------------------------------

# 2. Documentos de referencia

Antes de comenzar, leer:

``` text
spec_inicio_landing_25082026.md
analysis.md
```

También inspeccionar nuevamente cuando sea necesario:

``` text
recursos_grafico/
```


------------------------------------------------------------------------

# 3. Principios de diseño

El diseño debe transmitir:

### Profesionalismo

CPROTEC debe percibirse como una empresa estable y profesional.

### Creatividad

La empresa trabaja con:

-   diseño;
-   marketing;
-   producción digital;
-   audiovisual.

El diseño debe reflejar creatividad.

### Tecnología

La interfaz debe sentirse actual.

### Confianza

Evitar un diseño experimental que reduzca la percepción corporativa.

### Proyección internacional

El resultado debe poder competir visualmente con páginas corporativas
modernas.

------------------------------------------------------------------------

# 4. Dirección visual

La dirección visual debe ser:

``` text
Moderna
Corporativa
Creativa
Limpia
Premium
Tecnológica
Accesible
```

Evitar que se vea:

``` text
Genérica
Anticuada
Sobrecargada
Demasiado informal
Excesivamente colorida
```

------------------------------------------------------------------------

# 5. Identidad visual

Mantener la identidad visual encontrada durante la Fase 01.

Utilizar prioritariamente:

-   logo oficial;
-   colores oficiales;
-   fotografías oficiales;
-   iconos existentes;
-   elementos gráficos de la maqueta.

No crear una identidad nueva.

------------------------------------------------------------------------

# 6. Sistema de colores

Crear una paleta de diseño basada en la maqueta.

Definir:

``` text
Primary
Primary Dark
Primary Light
Secondary
Accent
Background
Surface
Surface Alt
Text
Text Muted
Border
Success
```

No utilizar todos los colores con la misma intensidad.

La jerarquía debe ser aproximadamente:

``` text
Fondos neutros
       ↓
Color principal
       ↓
Color secundario
       ↓
Acentos
       ↓
CTA
```

Los colores más fuertes deben reservarse para:

-   CTA;
-   elementos importantes;
-   detalles de marca;
-   estados activos.

Evitar llenar todas las secciones con fondos saturados.

------------------------------------------------------------------------

# 7. Tipografía

Seleccionar una familia sans-serif moderna.

Definir una jerarquía:

``` text
Display
H1
H2
H3
Body Large
Body
Small
Caption
```

Los títulos deben tener suficiente contraste respecto al cuerpo.

Evitar utilizar demasiados pesos tipográficos.

Recomendación general:

``` text
H1 → fuerte
H2 → fuerte
H3 → semibold
Body → regular
Labels → medium
```

------------------------------------------------------------------------

# 8. Grid y contenedores

Definir un sistema de layout consistente.

Utilizar un ancho máximo aproximado para el contenido:

``` text
max-width: 1200px - 1280px
```

El valor exacto debe ajustarse según la maqueta y el análisis.

Todas las secciones deben compartir una lógica de alineación.

Evitar que cada sección tenga un ancho diferente sin una razón visual.

------------------------------------------------------------------------

# 9. Espaciado

Definir una escala consistente.

Ejemplo conceptual:

``` text
xs
sm
md
lg
xl
2xl
3xl
```

Utilizar mayor espacio:

-   entre secciones;
-   antes de títulos principales;
-   después de hero;
-   alrededor de CTAs.

Utilizar menor espacio:

-   entre título y subtítulo;
-   entre icono y título;
-   dentro de tarjetas.

El espaciado debe generar sensación de calidad.

------------------------------------------------------------------------

# 10. Navbar

Diseñar un navbar limpio.

Debe contener:

-   logo;
-   enlaces;
-   CTA principal.

### Desktop

Los enlaces deben tener:

-   separación consistente;
-   estados hover;
-   estado activo cuando corresponda.

El CTA debe destacar sin parecer desconectado de la marca.

### Scroll

Puede utilizar:

-   fondo ligeramente diferente;
-   blur sutil;
-   sombra ligera.

No convertirlo en una barra excesivamente pesada.

### Mobile

Diseñar:

``` text
Logo + Menu
```

El menú debe abrirse con una animación corta y suave.

------------------------------------------------------------------------

# 11. Hero

El hero debe ser la sección visualmente más importante.

Mantener la idea principal de la maqueta:

``` text
Marca
Título
Descripción
Servicios
CTA
Imagen
```

Pero mejorar:

-   composición;
-   proporción;
-   jerarquía;
-   profundidad;
-   integración de imagen.

------------------------------------------------------------------------

## Hero --- Desktop

Usar una composición de dos áreas:

``` text
┌───────────────────────┬───────────────────────┐
│                       │                       │
│      CONTENIDO        │        IMAGEN         │
│                       │                       │
│      CPROTEC          │                       │
│      Producciones     │                       │
│      Digitales        │                       │
│                       │                       │
│       CTA             │                       │
└───────────────────────┴───────────────────────┘
```

No necesariamente debe ser exactamente 50/50.

La composición debe aprovechar el espacio disponible.

------------------------------------------------------------------------

## Hero --- Mobile

Transformar a:

``` text
Logo / marca
↓
Título
↓
Descripción
↓
CTA
↓
Imagen
```

La imagen no debe aplastar el contenido.

------------------------------------------------------------------------

# 12. CTA

El CTA principal debe ser visualmente claro.

Ejemplo:

``` text
CONTÁCTANOS
```

o el texto definido por la maqueta.

Debe incluir:

-   hover;
-   focus;
-   transición;
-   buen contraste;
-   tamaño cómodo en mobile.

Evitar botones excesivamente grandes.

------------------------------------------------------------------------

# 13. Servicios

Crear una sección visualmente limpia.

Título:

``` text
NUESTROS SERVICIOS
```

Presentar los tres servicios principales:

1.  Diseño Gráfico Publicitario
2.  Marketing y publicidad
3.  Servicios audiovisuales para eventos sociales

------------------------------------------------------------------------

# 14. Service Card

Diseñar cada tarjeta con:

``` text
┌──────────────────────┐
│       ICONO          │
│                      │
│      TÍTULO          │
│      ─────           │
│                      │
│    DESCRIPCIÓN       │
│                      │
└──────────────────────┘
```

Las tarjetas deben tener:

-   buen padding;
-   radius consistente;
-   sombra suave;
-   borde opcional;
-   icono;
-   título;
-   descripción.

### Hover

Agregar:

-   elevación ligera;
-   sombra;
-   transformación pequeña;
-   transición.

No realizar animaciones exageradas.

------------------------------------------------------------------------

# 15. Diferenciación de servicios

Las tarjetas pueden utilizar pequeñas variaciones visuales de los
colores de marca.

No convertir cada tarjeta en un bloque de color completamente diferente.

La sección debe sentirse como un solo sistema.

------------------------------------------------------------------------

# 16. Footer

El footer debe sentirse como el cierre de la experiencia.

Estructura propuesta:

``` text
┌──────────────────────────────────────────┐
│ Logo                                     │
│ Descripción                              │
│                                          │
│ Contacto      Enlaces      Redes         │
│                                          │
│ Política / Pagos                         │
│                                          │
│ Copyright                                │
└──────────────────────────────────────────┘
```

Mantener la información existente en la maqueta.

Mejorar:

-   separación;
-   jerarquía;
-   legibilidad;
-   alineación.

------------------------------------------------------------------------

# 17. Elementos flotantes

Implementar visualmente:

-   WhatsApp;
-   chat;
-   volver arriba.

No deben competir con el CTA principal.

### Orden recomendado

``` text
Chat
WhatsApp
Back to top
```

El orden exacto debe ajustarse según el análisis y mobile.

------------------------------------------------------------------------

# 18. Iconografía

Utilizar preferentemente los iconos existentes.

Si se necesita una librería:

-   utilizar una única familia de iconos;
-   mantener tamaños consistentes;
-   mantener grosor consistente.

No mezclar iconos visualmente incompatibles.

------------------------------------------------------------------------

# 19. Imágenes

Las imágenes deben utilizarse como parte del diseño, no como simples
bloques rectangulares.

Considerar:

-   `object-fit`;
-   `object-position`;
-   bordes;
-   máscaras;
-   overlays;
-   composición;
-   contraste.

No aplicar filtros agresivos que alteren las fotografías corporativas.

------------------------------------------------------------------------

# 20. Microinteracciones

Diseñar microinteracciones para:

-   enlaces;
-   botones;
-   tarjetas;
-   navbar;
-   menú móvil;
-   elementos flotantes.

Ejemplos:

``` text
Hover
Focus
Active
Enter
Exit
```

Todas deben ser rápidas y discretas.

------------------------------------------------------------------------

# 21. Motion Design

Definir una regla general:

> La animación debe reforzar la jerarquía, no ser el contenido
> principal.

Usar:

-   fade;
-   slide;
-   scale mínimo;
-   stagger corto.

Evitar:

-   animaciones infinitas;
-   rebotes excesivos;
-   efectos pesados;
-   parallax innecesario.

------------------------------------------------------------------------

# 22. Responsive Design

Definir el comportamiento para:

### Mobile

-   360px;
-   390px;
-   430px.

### Tablet

-   768px;
-   820px;
-   1024px.

### Desktop

-   1280px;
-   1440px;
-   1920px.

------------------------------------------------------------------------

# 23. Mobile-first

La interfaz debe diseñarse primero para pantallas pequeñas.

En mobile:

-   reducir títulos;
-   reducir espacios;
-   apilar contenido;
-   simplificar navegación;
-   mantener CTA visible;
-   adaptar elementos flotantes.

No simplemente reducir el diseño desktop.

------------------------------------------------------------------------

# 24. Accesibilidad visual

Garantizar:

-   contraste;
-   legibilidad;
-   focus;
-   tamaños adecuados;
-   áreas táctiles suficientes;
-   jerarquía semántica.

Los botones móviles deben tener un área táctil cómoda.

------------------------------------------------------------------------

# 25. SEO visual

El diseño debe permitir:

-   H1 único;
-   H2 por sección;
-   contenido legible;
-   alt text;
-   estructura semántica.

No esconder contenido importante detrás de animaciones.

------------------------------------------------------------------------

# 26. Performance visual

Evitar diseños que dependan de:

-   videos pesados;
-   fondos enormes;
-   demasiadas imágenes;
-   efectos WebGL innecesarios.

Si se utiliza un recurso pesado, documentar su necesidad.

------------------------------------------------------------------------

# 27. Arquitectura visual

Definir visualmente:

``` text
Navbar
   ↓
Hero
   ↓
Services
   ↓
Footer
```

Mantener una transición visual coherente entre cada sección.

No hacer que cada sección parezca pertenecer a una web diferente.

------------------------------------------------------------------------

# 28. Diseño de estados

Definir visualmente:

``` text
Default
Hover
Focus
Active
Disabled
Loading
```

Aunque algunos estados se implementen posteriormente.

------------------------------------------------------------------------

# 29. Diseño para contenido futuro

La arquitectura visual debe poder crecer.

Considerar futuras secciones:

``` text
Nosotros
Casos de éxito
Noticias
Contacto
Plataforma educativa
```

El diseño actual no debe dificultar la incorporación posterior.

------------------------------------------------------------------------

# 30. Preparación para internacionalización

Aunque inicialmente el sitio esté en español, evitar diseños que
dependan de textos con una longitud exacta.

Los componentes deben tolerar textos más largos.

Por ejemplo:

``` text
Español
English
```

El diseño debe seguir funcionando si un título ocupa una línea
adicional.

------------------------------------------------------------------------

# 31. Resultado de la Fase 02

Al terminar esta fase debe existir un documento:

``` text
DESIGN-SYSTEM.md
```

que documente:

``` text
# CPROTEC — Design System

## 1. Dirección visual

## 2. Paleta de colores

## 3. Tipografía

## 4. Grid

## 5. Espaciado

## 6. Bordes y sombras

## 7. Navbar

## 8. Hero

## 9. CTA

## 10. Services

## 11. Service Cards

## 12. Footer

## 13. Floating Actions

## 14. Iconografía

## 15. Responsive

## 16. Motion

## 17. Accesibilidad

## 18. SEO

## 19. Performance

## 20. Componentes visuales

## 21. Decisiones de diseño
```

------------------------------------------------------------------------

# 32. Reglas de esta fase

Durante la Fase 02:

-   respetar la maqueta;
-   utilizar los recursos identificados;
-   definir el sistema visual;
-   definir componentes;
-   definir responsive;
-   definir motion;
-   documentar decisiones.

No:

-   inventar identidad de marca;
-   cambiar contenido corporativo sin justificación;
-   eliminar recursos;
-   crear backend;
-   utilizar Next.js;
-   ignorar el hosting objetivo.

------------------------------------------------------------------------

# 33. Implementación

La implementación se realizará en la siguiente fase.

La Fase 02 debe dejar suficiente información para que un desarrollador
pueda construir la interfaz sin tener que volver a tomar decisiones
fundamentales de diseño.

Al finalizar:

> **DETENERSE Y ESPERAR AUTORIZACIÓN PARA INICIAR LA FASE 03 ---
> IMPLEMENTACIÓN.**
