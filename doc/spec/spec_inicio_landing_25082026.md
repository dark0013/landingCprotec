# SPEC.md --- CPROTEC Landing Page

## 1. Objetivo

Construir la landing page corporativa de **CPROTEC** utilizando
**React + Vite + TypeScript + Tailwind CSS**.

La implementación debe tomar como referencia principal las maquetas
visuales disponibles en el directorio:

``` text
recursos_grafico/
```

La maqueta representa la intención visual y la estructura general de la
página. **No debe hacerse una copia rígida píxel por píxel**. El
objetivo es convertirla en una interfaz web moderna, profesional,
responsive y preparada para una empresa con proyección internacional.

La identidad visual de CPROTEC debe conservarse, pero el resultado final
debe sentirse más actual, limpio y premium que la maqueta original.

------------------------------------------------------------------------

## 2. Regla principal de diseño

Usar la maqueta de `recursos_grafico/` como fuente visual de verdad para:

-   identidad de marca;
-   colores principales;
-   logo;
-   textos;
-   estructura general;
-   orden de las secciones;
-   elementos visuales;
-   intención de composición.

Sin embargo, mejorar cuando sea necesario:

-   espaciado;
-   tipografía;
-   jerarquía visual;
-   tamaños;
-   alineaciones;
-   responsive;
-   sombras;
-   bordes;
-   botones;
-   tarjetas;
-   microinteracciones;
-   composición del hero;
-   accesibilidad;
-   legibilidad.

**No inventar una identidad visual completamente diferente.**

------------------------------------------------------------------------

## 3. Stack obligatorio

Utilizar:

-   React
-   Vite
-   TypeScript
-   Tailwind CSS

Para animaciones, utilizar preferentemente:

-   Framer Motion

No introducir Next.js.

La aplicación debe poder compilarse como sitio estático y desplegarse
posteriormente en un hosting tradicional con **cPanel + PHP**.

El proyecto debe funcionar correctamente después de:

``` bash
npm install
npm run dev
```

y generar producción mediante:

``` bash
npm run build
```

El resultado de producción debe quedar listo para ser publicado como
archivos estáticos.

------------------------------------------------------------------------

## 4. Uso de recursos gráficos

Antes de crear componentes, inspeccionar completamente:

``` text
recursos_grafico/
```

Utilizar los recursos existentes siempre que correspondan a la maqueta.

Prioridad:

1.  logo oficial;
2.  imágenes oficiales de la empresa;
3.  iconos oficiales;
4.  fotografías;
5.  recursos gráficos complementarios.

No reemplazar un recurso oficial por una imagen genérica si existe el
recurso correspondiente.

No crear logos alternativos.

No modificar los archivos originales del directorio `recursos_grafico/`.

Si es necesario optimizar una imagen para web, generar una copia
optimizada dentro de la estructura pública del proyecto.

------------------------------------------------------------------------

## 5. Estructura visual de la landing

La página debe conservar aproximadamente esta estructura:

``` text
Navbar
   ↓
Hero / presentación principal
   ↓
Servicios
   ↓
Footer corporativo
```

La implementación debe permitir agregar posteriormente:

-   Nosotros
-   Plataforma Educativa
-   Noticias
-   Contacto
-   Casos de éxito
-   Otras páginas corporativas

Por ahora, priorizar una homepage sólida.

------------------------------------------------------------------------

# 6. Navbar

Crear un navbar corporativo moderno.

Debe incluir:

-   logo CPROTEC;
-   Inicio;
-   Nosotros;
-   Servicios;
-   Plataforma Educativa;
-   Noticias;
-   Contáctanos.

### Desktop

El menú debe estar horizontalmente alineado y tener buena separación.

Evitar que el navbar se vea saturado.

El botón **Contáctanos** debe tener mayor jerarquía visual que los demás
enlaces.

### Mobile

Implementar menú responsive con botón hamburguesa.

El menú móvil debe:

-   abrir/cerrar correctamente;
-   ser accesible;
-   tener animación suave;
-   cerrar al seleccionar una sección;
-   evitar overflow horizontal.

### Comportamiento

El navbar puede incorporar un efecto sutil al hacer scroll:

-   fondo ligeramente más sólido;
-   sombra ligera;
-   transición suave.

No utilizar efectos exagerados.

------------------------------------------------------------------------

# 7. Hero

El hero es la sección más importante de la página.

La maqueta muestra:

-   identidad CPROTEC;
-   título principal;
-   subtítulo;
-   descripción de servicios;
-   área visual/fotográfica.

Mantener esta idea, pero mejorar la composición para que parezca una
landing corporativa internacional.

### Requisitos

Debe incluir:

-   logo o símbolo de marca cuando corresponda;
-   título: `CPROTEC`
-   subtítulo: `Producciones Digitales`
-   servicios:
    -   Diseño Gráfico Publicitario
    -   Marketing y publicidad
    -   Servicios audiovisuales para eventos sociales

Agregar un CTA principal como:

``` text
CONOCE MÁS
```

El CTA debe tener interacción hover/focus.

### Imagen

Utilizar el recurso visual correspondiente disponible en:

``` text
recursos_grafico/
```

Si existe una fotografía o composición adecuada, utilizarla en lugar de
un placeholder.

La imagen debe integrarse visualmente con el bloque de marca y no
parecer un rectángulo aislado.

### Responsive

Desktop:

``` text
contenido + imagen
```

Mobile:

``` text
contenido
↓
imagen
↓
CTA
```

No permitir que el texto quede ilegible sobre la imagen.

------------------------------------------------------------------------

# 8. Sección de servicios

La maqueta contiene tres servicios principales.

Crear tres tarjetas:

### Diseño Gráfico Publicitario

Texto de referencia:

> En CPROTEC te asesoraremos y guiaremos paso a paso desarrollando
> marcas con personalidad, conceptos creativos a la vanguardia del
> diseño y la funcionalidad, alineados a tus objetivos y propuesta para
> un rápido posicionamiento en el mercado.

### Marketing y publicidad

Texto de referencia:

> Con CPROTEC genera empatía y diseña campañas que destaquen tu marca y
> la hagan crecer, maximizando el retorno de tu inversión. Realizamos
> campañas personalizadas de marketing de acuerdo con las necesidades de
> cada cliente.

### Servicios audiovisuales para eventos sociales

Texto de referencia:

> CPROTEC cuenta con un equipo capacitado para realizar todo tipo de
> trabajos y eventos audiovisuales. Además, trabajamos con equipos de
> última tecnología y marcas profesionales, brindando lo mejor de
> nosotros y estando atentos a las necesidades de nuestros clientes.

------------------------------------------------------------------------

## 9. Diseño de las tarjetas

No copiar literalmente los grandes bloques degradados de la maqueta.

Modernizar las tarjetas.

Preferir:

-   fondo limpio;
-   bordes suaves;
-   border-radius moderno;
-   sombra sutil;
-   iconografía;
-   buena separación entre título y descripción;
-   microinteracción hover.

La identidad azul/turquesa de CPROTEC debe mantenerse como parte del
sistema visual.

Cada tarjeta puede incluir:

``` text
icono
título
línea/acento
descripción
```

En hover:

-   elevación ligera;
-   sombra;
-   pequeño desplazamiento;
-   transición suave.

Evitar animaciones excesivas.

------------------------------------------------------------------------

# 10. Footer

El footer debe conservar la información corporativa de la maqueta.

Debe incluir:

### Marca

Logo CPROTEC.

### Contacto

Portoviejo:

``` text
Calle 5 de Octubre y Av. del Ejército.
```

Guayaquil:

``` text
Av. Francisco de Orellana, Sky Building
```

### Canales

-   info@cprotec.net
-   Facebook
-   Instagram
-   WhatsApp

Los enlaces sociales deben ser reales únicamente si están disponibles en
los recursos/configuración del proyecto.

### Política de privacidad

Mantener el contenido proporcionado en la maqueta, pero mejorar:

-   ancho de columna;
-   legibilidad;
-   interlineado;
-   jerarquía.

### Pagos

Utilizar los logos disponibles en `recursos_grafico/` si existen.

No inventar métodos de pago.

### Copyright

Mostrar:

``` text
Derechos reservado para CPROTEC ©
```

Corregir la redacción a una forma profesional si corresponde, por
ejemplo:

``` text
Todos los derechos reservados — CPROTEC ©
```

------------------------------------------------------------------------

# 11. Botones flotantes

La maqueta incluye:

-   WhatsApp;
-   chat.

Implementarlos como botones flotantes.

Requisitos:

-   posición fija;
-   buena separación;
-   no bloquear contenido;
-   accesibles en mobile;
-   tooltip o texto accesible;
-   hover;
-   tamaño adecuado.

No inventar un sistema de chat backend.

Si todavía no existe backend, utilizar enlaces/placeholders claramente
aislados para que posteriormente puedan conectarse.

------------------------------------------------------------------------

# 12. Botón volver arriba

Implementar botón flotante para volver al inicio.

Debe:

-   aparecer después de cierto scroll;
-   tener transición;
-   llevar al inicio suavemente;
-   ser accesible mediante teclado.

------------------------------------------------------------------------

# 13. Sistema visual

Crear un pequeño sistema visual coherente.

### Colores

Tomar los colores directamente de la identidad visual y recursos de la
maqueta.

La combinación principal gira alrededor de:

-   azul corporativo;
-   rojo;
-   blanco;
-   tonos complementarios azul/turquesa.

No convertir toda la página en una sucesión de fondos saturados.

El objetivo es utilizar el color de marca como **acento y jerarquía**,
manteniendo espacios claros y profesionales.

### Tipografía

Utilizar una tipografía moderna, limpia y altamente legible.

Priorizar una familia sans-serif.

Definir una jerarquía clara:

``` text
H1
H2
H3
Body
Small
```

No utilizar demasiadas familias tipográficas.

------------------------------------------------------------------------

# 14. Responsive design

La página debe diseñarse mobile-first.

Probar como mínimo:

-   360px;
-   390px;
-   768px;
-   1024px;
-   1280px;
-   1440px.

No debe existir:

-   scroll horizontal;
-   texto cortado;
-   botones fuera de pantalla;
-   imágenes deformadas;
-   navbar roto;
-   tarjetas con alturas problemáticas.

En mobile, las tarjetas de servicios deben apilarse verticalmente.

------------------------------------------------------------------------

# 15. Animaciones

Utilizar animaciones discretas y profesionales.

Framer Motion puede utilizarse para:

-   entrada del hero;
-   aparición de tarjetas al entrar al viewport;
-   hover;
-   navegación móvil;
-   botones;
-   elementos flotantes.

Las animaciones deben transmitir calidad, no distraer.

Evitar:

-   demasiados efectos;
-   parallax pesado;
-   animaciones permanentes;
-   efectos que afecten el rendimiento.

Respetar `prefers-reduced-motion`.

------------------------------------------------------------------------

# 16. Arquitectura de componentes

Separar la página en componentes reutilizables.

Ejemplo:

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
│   └── ...
│
├── App.tsx
├── main.tsx
└── index.css
```

No colocar toda la página dentro de `App.tsx`.

Los datos repetitivos, como servicios o enlaces, deben manejarse
mediante arrays/objetos cuando tenga sentido.

------------------------------------------------------------------------

# 17. Tailwind CSS

Utilizar Tailwind CSS para el sistema de estilos.

Evitar CSS gigantescos y estilos duplicados.

El CSS personalizado debe reservarse para:

-   variables globales;
-   efectos que Tailwind no cubra razonablemente;
-   utilidades muy específicas.

No abusar de clases arbitrarias si existe una solución estándar de
Tailwind.

------------------------------------------------------------------------

# 18. Accesibilidad

Implementar:

-   HTML semántico;
-   `header`;
-   `nav`;
-   `main`;
-   `section`;
-   `footer`;
-   botones reales;
-   `aria-label` cuando corresponda;
-   alt text en imágenes;
-   foco visible;
-   navegación mediante teclado;
-   contraste suficiente.

Los botones que realizan acciones no deben implementarse como simples
`<div>`.

------------------------------------------------------------------------

# 19. SEO básico

Aunque es una aplicación React estática, preparar correctamente:

-   `<title>`;
-   meta description;
-   Open Graph;
-   favicon;
-   headings semánticos;
-   textos descriptivos;
-   `lang="es"`.

Preparar la estructura para que posteriormente pueda añadirse versión
internacional.

No crear una estrategia SEO ficticia ni inventar keywords.

------------------------------------------------------------------------

# 20. Rendimiento

Priorizar:

-   imágenes optimizadas;
-   lazy loading donde corresponda;
-   evitar librerías innecesarias;
-   evitar JavaScript pesado;
-   evitar animaciones costosas;
-   minimizar renderizados innecesarios.

La landing debe sentirse rápida.

------------------------------------------------------------------------

# 21. Restricciones importantes

NO:

-   utilizar Next.js;
-   introducir backend innecesario;
-   inventar información corporativa;
-   inventar direcciones;
-   inventar redes sociales;
-   inventar logos;
-   reemplazar la identidad de CPROTEC;
-   copiar una plantilla genérica;
-   utilizar imágenes externas sin necesidad;
-   generar una interfaz que parezca una plantilla de administración;
-   abusar de gradientes;
-   saturar la página con animaciones.

SÍ:

-   utilizar los recursos de `recursos_grafico/`;
-   mejorar la maqueta;
-   mantener la identidad de marca;
-   crear una interfaz moderna;
-   usar Tailwind CSS;
-   usar componentes reutilizables;
-   priorizar responsive;
-   mantener buen rendimiento.

------------------------------------------------------------------------

# 22. Criterio de aceptación visual

La implementación final debe cumplir:

### Identidad

La persona debe reconocer inmediatamente a CPROTEC.

### Modernidad

Debe verse como una web corporativa actual, no como una página antigua
basada únicamente en bloques de color.

### Profesionalismo

Debe ser adecuada para presentar la empresa a clientes nacionales e
internacionales.

### Conversión

El usuario debe entender rápidamente:

1.  quién es CPROTEC;
2.  qué ofrece;
3.  por qué debería interesarle;
4.  cómo contactar a la empresa.

### Responsive

Debe verse correctamente en móvil, tablet y escritorio.

### Código

Debe ser:

-   limpio;
-   tipado;
-   componentizado;
-   mantenible;
-   fácil de ampliar.

------------------------------------------------------------------------

# 23. Flujo de trabajo para Codex

Antes de escribir código:

1.  Inspeccionar el proyecto existente.
2.  Inspeccionar todos los archivos de `recursos_grafico/`.
3.  Identificar qué imagen corresponde a cada elemento de la maqueta.
4.  Revisar dimensiones y formatos de las imágenes.
5.  Identificar logo, iconos, fotografías y recursos de marca.
6.  Revisar la maqueta visual completa.
7.  Crear un pequeño plan de implementación.
8.  Verificar si ya existe configuración de React/Vite/Tailwind.
9.  Reutilizar infraestructura existente cuando sea posible.

Después:

1.  Crear la estructura de componentes.
2.  Implementar primero el layout.
3.  Implementar identidad visual.
4.  Implementar responsive.
5.  Agregar interacciones.
6.  Agregar animaciones.
7.  Optimizar imágenes.
8.  Revisar accesibilidad.
9.  Ejecutar build.
10. Corregir errores.
11. Revisar visualmente la página completa.

------------------------------------------------------------------------

# 24. Regla para tomar decisiones

Cuando exista una diferencia entre la maqueta y una implementación web
de calidad:

**mantener la intención de la maqueta, pero priorizar una implementación
web moderna, responsive, accesible y profesional.**

No modificar contenido corporativo importante sin justificarlo.

Si falta información, utilizar la información disponible en la maqueta y
los recursos del proyecto antes de inventar contenido.

------------------------------------------------------------------------

# 25. Resultado esperado

Al finalizar debe existir una landing de CPROTEC completamente funcional
en React/Vite/TypeScript/Tailwind CSS que:

-   reproduzca la identidad visual de la maqueta;
-   utilice los recursos gráficos disponibles;
-   mejore el acabado visual;
-   tenga responsive completo;
-   tenga animaciones discretas;
-   tenga navegación funcional;
-   tenga botones y enlaces preparados;
-   pueda compilarse con `npm run build`;
-   pueda desplegarse como sitio estático en un hosting cPanel/PHP.

El resultado debe sentirse como una **web corporativa moderna y
profesional**, no como una simple conversión automática de una imagen a
HTML.
