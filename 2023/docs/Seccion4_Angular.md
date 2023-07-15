# Seccion 4 : Angular

---

<br>

## Indice

---

- [x] 1. [Introduccion a la seccion](#1-introduccion-a-la-seccion)
- [x] 2. [Temas puntuales de la Seccion](#2-temas-puntuales-de-la-seccion)
- [x] 3. [Exposicion sobre Angular](#3-exposicion-sobre-angular)
- [x] 4. [Nuestro primer proyecto en Angular](#4-nuestro-primer-proyecto-en-angular)
- [x] 5. [Explicacion de cara archivo del proyecto](#5-explicacion-de-cara-archivo-del-proyecto)

<br>

## 1. Introduccion a la seccion

---

Cuando estamos en `Angular` vamos a ver muchos archivos, el objetivo es poder saber que hacer cada uno de los archivos en una aplicacion de `Angular`.

Casi todo lo que hacemos en `Angular` es `Class`, ya sea componente, servicio, modulo, etc..., lo unico que cambia es un decorador (`@`), lo cual nos facilita al momento de usar cada uno de estos.

tambien vamos a empesar a hablar sobre directivas principales de `Angular`, el `*ngIf` y el `*ngFor`.
El `*ngIf` ayuda a ocultar y mostrar elementos `html`. Realmente está mal dicho de que sea ocultar, porque realmente no es que lo oculta, literalmente lo destruye, no existe.
Es más, la palabra destruir es correcta porque ustedes van a poder llamar en el ciclo de vida de Angular de los componentes que veremos más adelante.
Van a ver que llaman el ng o un destroy, es decir, cuando ustedes tienen un componente. Y este componente lo asocian a un gif.Lo asocian a un gif cuando.O mejor dicho, cuando la condición lo oculta entre comillas. Destruye el componente y llama a ese espacio en el ciclo de vida que es la limpieza y el `ngOnDestroy` lo cual es súper genial y luego ustedes lo muestran y automáticamente va a reconstruirlo. Eso es genial y sucede muy, muy, muy rápido.

También nosotros tenemos el `*ngFor` que nos va a ayudar a nosotros a **_duplicar elementos HTML_**. A qué me refiero con eso?
Puede ser que ustedes estén trabajando con una lista de elementos o una lista de propiedades, una lista de productos, y quieren duplicar el mismo bloque de HTML.
El `*ngFor` es para ustedes y es sumamente fácil de utilizar e integrar.

Cuando nosotros estamos hablando de un componente angular, cuenta con tres partes, realmente la única importante es el punto TS.
Un componente en Angular sólo necesita un archivo punto TS, es todo, no necesita ninguna otra parte más, exceptuando un HTML, que puede estar en línea. Es decir, que no tenga un archivo externo, o sea separado, que todo esté dentro del mismo archivo de TypeScript, o pueden extraerlo a un HTML.
Usualmente la regla para definir cuándo colocarlo en línea y cuándo ser un elemento externo queda mucho a su discreción, pero yo le recomendaría si su código HTML tiene más de cuatro líneas piensen en un archivo HTML.

Luego vamos a tener archivos de CSS que pueden tener uno o más, puede tener tanto CSS un componente como necesiten. Y ese componente está encapsulado.
Quiere decir que aunque ustedes definan que todos sus H1 o los párrafos van a tener cierta forma, sólo se van a aplicar a este componente.

Y por último, es opcional.

Pero también van a ver los archivos como spec. Que estos son archivos relacionados al testing, los spec no es algo que ustedes van a necesitar ahorita para emprender, pero los archivos spec es para todo lo que es el testing automatico. Cuando ustedes quieren probar sus componentes, quieren ver si funciona como ustedes estan esperando.

Y la parte del testing es muy importante porque cada vez que ustedes vayan a crear su aplicación de producción, tienen que asegurarse de que todo su testing pase. Claro, si ustedes no tienen ninguna prueba, obviamente todo su código va a funcionar. Y no es que las pruebas tienen algo que ver con Angular, más bien es algo que es buenas prácticas o son puras buenas prácticas en cualquier desarrollador de desarrollo de software.

Pero bueno, esto básicamente es lo que quiero hablar en esta sección.

Vamos a hacer un par de aplicaciones, vamos a crear módulos, vamos a entrar con nuestros primeras o nuestros primeros pasos en Angular y van a ver porqué se dice de que Angular es sumamente poderoso.
<br>

## 2. Temas puntuales de la Seccion

---

**_¿Qué veremos en esta sección?_**

Este es un breve listado de los temas fundamentales:

- Crear proyectos de Angular

- Explicar cada archivo y directorio de un proyecto

- Componentes

- Módulos

- One way data binding

- Uso del AngularCLI - Angular Command Line Interface

- Directivas creadas por Angular

- ngIf y ngIf-else

- Y más...

Esta es la sección donde empezaremos nuestro camino de Angular.

<br>

## 3. Exposicion sobre Angular

---

Podemos ver rápidamente que habla de que con Angular nosotros podemos desarrollar para un montón de plataformas y eso es totalmente cierto. Nosotros podemos desarrollar para la web, para el móvil, para móvil de forma nativa o en el propio escritorio, o para aplicaciones de Windows, Linux y Mac.

**_Podemos hacer todo eso con Angular con el mismo código de Angular?_**

Claro, aquí ya intervienen otros factores, como por ejemplo para la web. Podemos hacerlo directamente con Angular o utilizar Angular universal para hacer un service a rendering. Para los dispositivos móviles tenemos de dos tipos, podemos utilizar native Script que lo compila directo a Swift o Java. En este caso también tenemos mobile web.

Qué podríamos usar la mismo código de Angular o bien utilizar otros otros frameworks de terceros, como por ejemplo Ionic, que es uno de los exponentes más fuertes en ese ámbito para hacer aplicaciones híbridas. Y también podemos hacer doble o más directamente con Angular o con Ionic.
Podemos hacer aplicaciones de escritorio gracias a Electron, pero siempre **_todo con el mismo código de Angular._**

_Eso sonará bastante complicado, pero realmente es el mismo código de Angular que se aplica en diferentes tecnologías_, lo cual si tú aprendes angular es muy fácil entrar a cualquier otra de esas tecnologías.

Angular es un framework, esto significa que es un marco de trabajo estandarizado.

**_A qué nos referimos con esto?_**

Pues muy probablemente. Si tú ves el código de angular de otra persona, va a ser muy parecido al código de Angular que tú estás desarrollando, porque aquí vamos a seguir ciertos estándares que recomienda el mismo equipo de Angular para desarrollar aplicaciones. Vas a ver que los componentes se llaman igual o tienen nombres parecidos. Vas a ver que los servicios se llaman parecido, las directivas y otro montón de cosas.

Otro punto es que Angular viene con todo lo que tú necesitas para trabajar.
Es raro de que tú digas ok, necesito incorporar otro paquete de terceros, no digo que no pasa, pero usualmente con una aplicación de Angular ya tienes todo lo que necesitas para comenzar. Obviamente si ocupas Google Maps, obviamente si ocupas Mapbox, obviamente si ocupas algo especializado de alguna otra librería con la que, cual, bueno, con la cual quieres trabajar, probablemente sí necesitas algo extra, pero por lo general ya viene bien completo con todo lo que vas a ocupar para trabajar luego es una aplicación o las aplicaciones de Angular son modulares, _A que nos referimos con esto?_, pues básicamente nosotros vamos a crear módulos.
Estos módulos van a servir o van a tener objetivos específicos.

Y también por si te lo preguntas, Google es quien mantiene hoy en día el framework de Angular, por si acaso tienes esa curiosidad.

Por otro lado, quiero hablar sobre los **_bloques fundamentales de Angular_**.

Angular se compone de cinco bloques o pilares fundamentales que son:

- los componentes

- las rutas

- las directivas

- los servicios

- los módulos

**_Los componentes_**
Los componentes podrían verse como un bloque de código que tiene su segmento de HTML y tiene una contraparte de TypeScript que usualmente es una clase. Una clase común y corriente que tiene un decorador. Eso es todo.

La parte del HTML es el HTML que tu estás acostumbrado, tiene un div, puede tener botones, puede tener span, puede tener textos en negrita, el código HTML que tu ya conoces. Ok, eso es básicamente un componente.

También se busca que los componentes sean bloques pequeños de código y lo más simples posibles.

Luego tenemos **_los servicios_**
Los servicios es algo interesante porque es bastante fuerte lo que los servicios pueden hacer en Angular. Esto ha hecho de que la verdad no sea tan necesario que tu necesites entrar en Redux. No te preocupes si no sabes que es eso.

Pero bueno, para las personas que conocen más de Redux pues sabrán de lo que hablo, pero para las personas que ya conocen un poco de Angular sabrán que los servicios pueden utilizarse de tal manera de que tu no vas a ocupar, trabajar con Redux, blog u otro tipo de gestor de estado.

Claro, son opcionales, siempre hay muchas alternativas y hay unos beneficios en cada uno de ellos, pero usualmente los servicios de Angular son singleton bastante fuertes que te van a permitir trabajar toda la aplicación con la información centralizada.

Podríamos decir que los servicios son lugares centralizados de información, usualmente ustedes van a tener un componente, ese componente puede tener un botón HTML. Ese botón es el que va a llamar el servicio para que graben base de datos, para que traiga información o cualquier otra cosa.
Pero usualmente los servicios son los lugares centrales de información.

Luego nosotros tenemos **_las directivas_**.

Hay tres tipos de directivas:

- directivas de componentes

- directivas estructurales

- directivas de atributos

Esto va a tener más sentido obviamente cuando ya lo miremos, pero solo para hacer algo general. Tampoco les estoy pidiendo que se memoricen esto, obviamente, porque es mucha información.

Las **_directivas de componentes_**, básicamente es muy parecido a un componente, solo que tiene un pedazo de código HTML reutilizable, el cual ya viene como conectadom, es decir, tú lo colocas en la directiva y ya crea ese HTML con cierta funcionalidad integrada.Eso es bien útil, Ya lo van a ver.

Luego tenemos las **_directivas estructurales_** que lo que hacen es modificar el DOM o el HTML, ya sea añadiendo elementos o removiendo elementos.

Luego tenemos las **_directivas de atributos_** que básicamente cambian la apariencia o el comportamiento de un elemento, otro componente o bien una directiva. Sé que esto sonará raro, pero no se preocupen, ya lo terminaremos viendo.

Luego tenemos las **_rutas_**

Las rutas son básicamente diferentes componentes que ustedes pueden mostrar basados en el URL del navegador web o el URL en el cual se encuentra el cliente.

Y por último, el último bloque que tenemos aquí para hablar son **_los módulos_**.

**_Los módulos_** es genial porque permiten agrupar todo lo que nosotros hemos hablado, inclusive otros módulos. En un módulo para que tenga algo más sentido. Podríamos verlos así podemos tener un módulo de productos en el cual va a estar todo lo relacionado a productos, por ejemplo, las formas de las pantallas para mostrar los productos, las pantallas para agregar productos, editar productos o servicios que estén relacionados a los productos. Todo puede estar ahí, en el mismo módulo.
Lo mismo con módulos de autenticación. Quiere decir que ahí estaría todo lo relacionado a la autenticación de mi aplicación o módulo de proveedores.
Módulo de clientes. Imagino que eso ya tiene un poco más de sentido.

Obviamente todo esto es muy abstracto, todavía no lo vemos en código, pero así funciona. Otra cosa interesante de los módulos es que si nosotros ocupáramos, por ejemplo, crear este calendario, cómo lo haríamos?
Bueno, probablemente alguien que tenga un conocimiento técnico bastante avanzado va a poder decir bueno, yo me voy a poner a crear este calendario de cero, pero muy probablemente ese es el caso del calendario que están viendo en pantalla.
Ya hay componentes hechos para que ustedes simplemente los descarguen y los utilicen en su proyecto. Eso es todo, lo que ustedes necesitan ya existe en Angular.
Muy probablemente va a ser un módulo lo que ustedes van a descargar ese módulo, ustedes lo van a incorporar a otros módulos de su aplicación y ya tienen toda la funcionalidad lista.

Recuerden que no necesariamente el código de Angular es el que ustedes van a poder utilizar de terceros. Pueden utilizar librerías propias de JavaScript que no están escritas en Angular, porque realmente Angular es el mismo JavaScript.
Ok, se va a poder hacer.
Pero lo genial de esto es que si ustedes encuentran el paquete y el paquete está soportado por Angular, van a haber un gran potencial ya incorporándolo en sus aplicaciones.

Yo sé que tal vez esto será bastante abrumador.

Hay muchas cosas, pero quería salir con este tema de entrada.

Ya en las próximas clases vamos a empezar ahora si, a ver código propio de Angular.

<br>

## 4. Nuestro primer proyecto en Angular

---

Para crear nuestro primer proyecto y de la misma manera con el resto de proyecto que haremos en este curso, las instrucciones son las siguientes :

Primero que nada tenemos que tener instalado `Node`, `npm` y por sobretodo `Angular CLI`. Este ultimo para poder utilizar las dependencias del `Angular CLI`.

1. Abrir la terminal y dirigirnos a la carpeta en la cual queremos que este alojado el proyecto:

```bash
cd .\2023\projects # o donde sea su preferencia, en lo personal, ahi alojare todos los proyectos de este curso
```

2. Crear una nueva aplicación angular usando `ng new`:

```bash
ng new 02-bases --routing=true   # crea nuevo proyecto llamado "bases" y en este caso, al poner `--routing=true` le estoy diciendo a Angular CLI que cree el proyecto con el Router de Angular
```

3. Selecciona las opciones de tu preferencia en las preguntas al crear el proyecto, por ejemplo aqui al elegir el tipo de estilo:

```bash
? Which stylesheet format would you like to use? (Use arrow keys)
> CSS
  SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less   [ http://lesscss.org                                             ]
```

Aqui podemos movernos con las flechas de `arriba` y `abajo` y seleccionamos con `Enter`
Seleccionamos **CSS** para usar hojas de estilo en cascada (*C*lass*S*tylesheets).

Al terminar de seleccionar las respuestas de las preguntas de creacion inicia `Angular CLI` a crear el proyecto...

Luego de terminar de crear el proyecto, con la terminal, nos dirijimos adentro de la carpeta del proyecto :

```bash
cd .\02-bases\
```

Podemos hacer correr el mismo con el comando :

```bash
ng serve
```

Este comando ejecutara el proyecto y lo abrira en el navegador en el http://localhost:4200/ por defecto.

<br>

## 5. Explicacion de cara archivo del proyecto

---

**_Archivos indepedientes :_**

- **_`.editorconfig` ->_** Este archivo establece las configuraciones del editor de codigo `VSCode` para ese proyecto en particular.

- **_`.gitignore` ->_** Este erchivo contiene nombres de directorios y/o archivos a ser ignorados por git para su respectivo seguimiento.

- **_`angular.json` ->_** Este es un archivo en el cual le decimos Angular ciertas configuraciones para ejecutar el proyecto.

- **_`package-lock.json` ->_** Esto dice como fueron posibles los modulos de Node. Es un archiuvo en el cual nunca se lo toca manualmente. Se lo manupula cuando hacemos comandos de instalacion o remover dependencias en el `package.json`, esto no se modifica directamente y nunca se tiene que modificar este archivo directamente.

- **_`package.json` ->_** Basicamente es algo propio de las aplicaciones de Node. El cual dice cual es el nombre de la aplicacion, que escripts tenemos, cuales son los comandos que podemos hacer. Este archivo se puede editar a voluntad basados en sus nesecidades. Aqui tambien tenemos las `dependencias` que son paquetes que son requeridos para nosotros podamos crear la aplicacion de produccion las cuales cuando hagamos el `build` a produccion Angular los va a desechar. Luego tenemos las `devDependencias` las cuales solo son dependencias que me ayudaran a mi cuando estoy creando la aplicacion.

- **_`README.md` ->_** Originalmente es un archivo donde se explica o deverian de ocupar para explicar como hacer correr la aplicacion, como funciona la aplicacion, si hay alguna configuracion especial, usen este archivo para indicarle a los otros desarrolladores como usarla como correrla y que dependencias tiene la misma.

- **_`tsconfig._` ->\*** Todos estos son configuraciones de `TypeScript`. Por lo general estos archivos no se modifican, son muy raras veces en las que se lo hace. Tenemos :

  - **_`tsconfig.app.json` ->_** Configuraciones de la aplicacion, cuales son los archivos que tenemos que revisar, cual es el directorio de salida.
  - **_`tsconfig.json` ->_** La base de `tsconfig.*` que son las recomendaciones para trabajar `TypeScript` dentro de **_Angular_** y asi poderlo trabajar de una manera estandarisada.
  - **_`tsconfig.spec.json` ->_** Es el mismo `tsconfig.*` pero esta enfocado en la parte del `Testing`.

**_Directorios :_**

- **_`.angular/` ->_** Esta carpeta ayuda a **_Angular_** a manejar rapidamente cuando se detecta algun cambio, a levantar rapidamente la aplicacion cuando no se detecta algun cambio, maneja basicamente el cache de nuestro proyecto en desarrollo. Por lo general esta carpera no se toca por nada del mundo.

- **_`.vscode/` ->_** Esto es algo propiamente de `VSCode`, esta es otra carpeta que no le vas a dar mantenimiento.

- **_`node_modules/` ->_** Esta carpeta es en la que se guardan los modulos de Node, todas la librerias que se usan para hacer el proyecto.

- **_`src/` ->_** Es la carpeta en la que se aloja el proyecto, el codigo y todo eso. Adentro de esta carpeta se encuentra las carpetas para el desarrollo del proyecto. A continuacion se explicara las carpetas.

  - **_`src/app/` ->_**

    - **_`src/app/` ->_**

    - **_`src/app/` ->_**

    - **_`src/app/` ->_**

  - **_`favicon.icon` ->_**

  - **_`index.html` ->_**

  - **_`main.ts` ->_**

  - **_`styles.css` ->_**

  - **_`src/assets/` ->_**

[indice](#indice)
