# ANALYZER.md --- FASE 01: ANÁLISIS CPROTEC

## Propósito

Este documento define exclusivamente la **Fase 01 --- Análisis** del
desarrollo de la landing page de CPROTEC.

La finalidad es analizar el proyecto, la maqueta y los recursos gráficos
antes de comenzar la implementación.

> **IMPORTANTE:** durante esta fase NO se debe construir ni modificar la
> landing.

------------------------------------------------------------------------

# 1. Objetivo del análisis

Antes de escribir código, obtener una comprensión completa de:

-   la estructura actual del proyecto;
-   el stack existente;
-   los recursos disponibles;
-   la maqueta visual;
-   la identidad de CPROTEC;
-   los problemas actuales de diseño;
-   las oportunidades de mejora;
-   la arquitectura técnica necesaria;
-   los requisitos responsive;
-   los requisitos de rendimiento;
-   los requisitos SEO;
-   los requisitos de accesibilidad;
-   las restricciones del hosting cPanel + PHP.

El análisis debe servir como documento de referencia para la siguiente
fase de implementación.

------------------------------------------------------------------------

# 2. Regla principal

La maqueta visual disponible en:

``` text
recursos_grafico/
```

es la referencia principal del diseño.

Sin embargo, la maqueta debe interpretarse como una **referencia
visual**, no como una instrucción de copiarla literalmente.

El objetivo será conservar:

-   identidad;
-   contenido;
-   estructura;
-   colores;
-   logo;
-   recursos gráficos;
-   intención visual;

y posteriormente mejorar:

-   composición;
-   espaciado;
-   tipografía;
-   responsive;
-   jerarquía;
-   microinteracciones;
-   profundidad visual;
-   legibilidad;
-   percepción de calidad.

------------------------------------------------------------------------

# 3. Inspección inicial del proyecto

Revisar primero la estructura del proyecto.

Analizar:

``` text
package.json
src/
public/
```

y cualquier archivo de configuración existente.

Revisar especialmente:

-   `package.json`;
-   `vite.config.*`;
-   `tsconfig.*`;
-   configuración de Tailwind;
-   configuración de ESLint;
-   configuración de Prettier;
-   archivos CSS;
-   componentes existentes;
-   rutas;
-   assets existentes.

Determinar:

1.  qué tecnología utiliza actualmente el proyecto;
2.  si ya existe React;
3.  si ya existe TypeScript;
4.  si ya existe Vite;
5.  si ya existe Tailwind;
6.  qué dependencias están instaladas;
7.  qué dependencias faltan;
8.  qué partes pueden reutilizarse.

No eliminar ni reemplazar archivos durante esta fase.

------------------------------------------------------------------------

# 4. Inspección de `recurso grafico`

Explorar completamente:

``` text
recursos_grafico/
```

No asumir qué contiene la carpeta.

Crear un inventario de todos los recursos relevantes.

Para cada recurso registrar:

-   nombre;
-   formato;
-   dimensiones;
-   tipo;
-   posible uso;
-   sección relacionada;
-   observaciones.

Clasificar los recursos como:

``` text
Logo
Icono
Fotografía
Ilustración
Banner
Fondo
Red social
Método de pago
Decoración
Otro
```

------------------------------------------------------------------------

# 5. Identificación de recursos oficiales

Determinar cuáles recursos parecen ser oficiales de CPROTEC.

Dar prioridad a:

1.  logo;
2.  versiones del logo;
3.  iconografía;
4.  fotografías;
5.  elementos corporativos;
6.  imágenes de servicios.

No sustituir recursos oficiales por imágenes genéricas cuando exista un
recurso adecuado.

No modificar los archivos originales.

------------------------------------------------------------------------

# 6. Análisis de la maqueta

Analizar visualmente todas las maquetas disponibles.

Determinar:

## Header

-   altura;
-   color;
-   logo;
-   navegación;
-   CTA;
-   espaciado;
-   comportamiento esperado.

## Hero

-   composición;
-   distribución;
-   título;
-   subtítulo;
-   descripción;
-   CTA;
-   imagen;
-   colores;
-   proporciones.

## Servicios

-   cantidad de tarjetas;
-   distribución;
-   títulos;
-   textos;
-   iconos;
-   colores;
-   bordes;
-   sombras;
-   separación.

## Footer

-   logo;
-   información de contacto;
-   redes;
-   privacidad;
-   métodos de pago;
-   copyright;
-   botón volver arriba.

## Elementos flotantes

-   WhatsApp;
-   chat;
-   volver arriba.

------------------------------------------------------------------------

# 7. Diagnóstico de diseño

Evaluar objetivamente la maqueta.

Identificar:

### Problemas

-   elementos demasiado grandes;
-   exceso de espacio;
-   falta de espacio;
-   tipografía poco jerarquizada;
-   contraste;
-   saturación de colores;
-   tarjetas visualmente pesadas;
-   composición poco equilibrada;
-   botones poco destacados;
-   footer demasiado denso;
-   problemas de responsive potenciales.

### Fortalezas

Identificar también qué funciona bien:

-   identidad de marca;
-   colores;
-   estructura;
-   contenido;
-   distribución;
-   elementos importantes.

No asumir que todo debe cambiar.

------------------------------------------------------------------------

# 8. Dirección visual recomendada

Proponer una dirección visual para modernizar la página.

Debe transmitir:

-   profesionalismo;
-   confianza;
-   creatividad;
-   tecnología;
-   solidez empresarial;
-   proyección internacional.

La mejora debe ser progresiva.

Evitar:

-   convertir la página en una plantilla genérica;
-   exagerar efectos;
-   abusar de glassmorphism;
-   abusar de gradientes;
-   usar demasiadas animaciones;
-   introducir elementos que no pertenecen a la marca.

------------------------------------------------------------------------

# 9. Sistema visual preliminar

Proponer:

## Colores

Identificar:

``` text
Primary
Secondary
Accent
Background
Surface
Text
Muted
Border
```

Siempre que sea posible, obtener los valores desde la identidad visual o
los recursos existentes.

## Tipografía

Proponer:

-   familia;
-   pesos;
-   tamaño H1;
-   tamaño H2;
-   tamaño H3;
-   cuerpo;
-   texto secundario;
-   line-height.

## Espaciado

Proponer una escala coherente para:

-   secciones;
-   contenedores;
-   tarjetas;
-   botones;
-   títulos.

## Bordes

Definir una estrategia para:

-   radius;
-   cards;
-   botones;
-   inputs futuros.

## Sombras

Proponer pocas variantes reutilizables.

------------------------------------------------------------------------

# 10. Arquitectura de componentes

Proponer una arquitectura antes de programar.

Ejemplo:

``` text
App
├── Navbar
├── Hero
├── Services
│   └── ServiceCard
├── FloatingActions
├── BackToTop
└── Footer
```

Determinar qué componentes deberían ser:

-   reutilizables;
-   independientes;
-   configurables mediante props;
-   basados en datos.

Separar los datos repetitivos cuando sea apropiado.

------------------------------------------------------------------------

# 11. Responsive

Analizar cómo adaptar la maqueta a:

``` text
360px
390px
768px
1024px
1280px
1440px
```

Determinar:

-   breakpoint del navbar;
-   comportamiento del hero;
-   cantidad de columnas;
-   ancho máximo de contenido;
-   tamaño de títulos;
-   espaciado;
-   footer;
-   botones flotantes.

El diseño debe ser mobile-first.

------------------------------------------------------------------------

# 12. Animaciones

Definir qué animaciones tendrán valor real.

Posibles usos:

-   entrada del hero;
-   aparición de servicios;
-   hover de tarjetas;
-   hover de botones;
-   navbar al hacer scroll;
-   menú móvil;
-   elementos flotantes.

Priorizar animaciones:

-   cortas;
-   suaves;
-   profesionales;
-   de bajo costo computacional.

Considerar:

``` text
prefers-reduced-motion
```

------------------------------------------------------------------------

# 13. SEO

Analizar necesidades de:

-   title;
-   meta description;
-   idioma;
-   headings;
-   alt text;
-   Open Graph;
-   favicon;
-   sitemap futuro;
-   estructura para idiomas futuros.

La web debe quedar preparada para una futura estrategia internacional.

Posible estructura futura:

``` text
/es/
/en/
```

No implementar la internacionalización durante esta fase.

------------------------------------------------------------------------

# 14. Accesibilidad

Detectar necesidades relacionadas con:

-   contraste;
-   tamaños de texto;
-   teclado;
-   focus;
-   botones;
-   enlaces;
-   imágenes;
-   navegación móvil;
-   lectores de pantalla.

Proponer soluciones concretas para la implementación.

------------------------------------------------------------------------

# 15. Rendimiento

Analizar:

-   tamaño de imágenes;
-   formatos;
-   imágenes grandes;
-   fuentes;
-   dependencias;
-   JavaScript;
-   animaciones;
-   carga inicial.

Identificar los recursos que probablemente tendrán mayor impacto en
rendimiento.

Proponer optimizaciones.

------------------------------------------------------------------------

# 16. Compatibilidad con cPanel + PHP

El hosting objetivo es:

``` text
cPanel + PHP
```

La solución final debe poder convertirse en una aplicación estática
mediante:

``` bash
npm run build
```

y posteriormente publicarse en:

``` text
public_html/
```

No asumir disponibilidad de:

-   Node.js;
-   servidor SSR;
-   procesos persistentes;
-   backend Node.

React + Vite debe ser la base del proyecto.

PHP solo debe considerarse para funcionalidades específicas que
posteriormente lo requieran.

------------------------------------------------------------------------

# 17. Riesgos técnicos

Detectar posibles riesgos.

Ejemplos:

-   SPA routing en hosting estático;
-   rutas incorrectas;
-   imágenes demasiado pesadas;
-   recursos faltantes;
-   enlaces inexistentes;
-   formularios sin backend;
-   chat sin integración;
-   dependencias innecesarias;
-   problemas de responsive;
-   fuentes externas;
-   problemas de SEO.

Cada riesgo debe incluir una recomendación.

------------------------------------------------------------------------

# 18. Plan preliminar de implementación

Definir el orden recomendado para la Fase 02.

Ejemplo:

``` text
1. Preparar stack
2. Configurar Tailwind
3. Organizar assets
4. Crear layout global
5. Crear Navbar
6. Crear Hero
7. Crear Services
8. Crear FloatingActions
9. Crear Footer
10. Responsive
11. Animaciones
12. SEO
13. Accesibilidad
14. Optimización
15. Build de producción
16. Revisión final
```

------------------------------------------------------------------------

# 19. Formato obligatorio del resultado

Al finalizar el análisis, generar un informe llamado:

``` text
ANALYSIS-REPORT.md
```

El informe debe contener:

``` text
# CPROTEC — Análisis del Proyecto

## 1. Resumen ejecutivo

## 2. Estado actual del proyecto

## 3. Stack detectado

## 4. Recursos gráficos encontrados

## 5. Recursos oficiales identificados

## 6. Análisis de la maqueta

## 7. Fortalezas visuales

## 8. Problemas visuales

## 9. Dirección visual recomendada

## 10. Sistema de diseño propuesto

## 11. Arquitectura de componentes

## 12. Estrategia responsive

## 13. Estrategia de animaciones

## 14. SEO

## 15. Accesibilidad

## 16. Rendimiento

## 17. Compatibilidad con cPanel

## 18. Riesgos técnicos

## 19. Dependencias necesarias

## 20. Plan de implementación

## 21. Preguntas o información faltante
```

------------------------------------------------------------------------

# 20. Reglas estrictas de la Fase 01

Durante esta fase:

-   NO implementar la landing.
-   NO modificar componentes existentes.
-   NO modificar la maqueta.
-   NO modificar recursos gráficos originales.
-   NO reemplazar archivos existentes.
-   NO instalar dependencias innecesarias.
-   NO inventar información corporativa.
-   NO inventar recursos que no existan.
-   NO comenzar la Fase 02 automáticamente.

Si una decisión requiere información que no está disponible,
documentarla en:

``` text
## 21. Preguntas o información faltante
```

------------------------------------------------------------------------

# 21. Condición para finalizar

La Fase 01 termina únicamente cuando:

1.  se haya inspeccionado el proyecto;
2.  se hayan inspeccionado los recursos gráficos;
3.  se haya analizado la maqueta;
4.  se hayan identificado fortalezas y problemas;
5.  se haya propuesto la dirección visual;
6.  se haya definido la arquitectura;
7.  se hayan analizado responsive, SEO, accesibilidad y rendimiento;
8.  se hayan identificado riesgos;
9.  se haya generado `ANALYSIS-REPORT.md`.

Después de completar todo lo anterior:

> **DETENERSE Y ESPERAR AUTORIZACIÓN PARA INICIAR LA FASE 02 ---
> IMPLEMENTACIÓN.**
