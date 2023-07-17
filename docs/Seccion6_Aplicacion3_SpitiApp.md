# Seccion 6 : Aplicacion #3 : SpotiApp

---

<br>

## Indice

---

- [x] 1. [¿Que aprenderemos en esta seccion?](#1-¿que-aprenderemos-en-esta-seccion)
- [x] 2. [Sitio web de developer de Spotify](#2-sitio-web-de-developer-de-spotify)
- [x] 3. [Iniciando el proyecto Spotify](#3-iniciando-el-proyecto-spotify)
  - [x] 3.1. [Intrucciones para crear el proyecto : SpotiApp](#31-intrucciones-para-crear-el-proyecto--spotiapp)
  - [x] 3.2. [API de Spotify](#32-api-de-spotify)
- [x] 4. [Comando para Crear un componente sin los archivos de estilo y test](#4-comando-para-crear-un-componente-sin-los-archivos-de-estilo-y-test)

<br>

## 1. ¿Que aprenderemos en esta seccion?

---

Vamos a crear una aplicación que nos ayudará a comprender sobre los siguientes temas:

1. Reforzamiento de rutas y parámetros de rutas.

2. Uso de carruseles del Bootstrap 4

3. Uso del HTTP para obtener información

4. Uso de la API de Spotify para obtener información de:

   a. Artistas

   b. Albumes

   c. Audio

5. Trabajo sobre el manejo de data asíncrona.

6. ngModel para enlazar campos de texto a variables del componente.

7. Widgets de Spotify

8. HTML5 audio

9. Observables

10. Maps

Durante la sección tendremos tareas y al final un examen teórico para reforzar los conocimientos adquiridos.

<br>

## 2. Sitio web de developer de Spotify

---

En esta sección crearemos una aplicación que consume los servicios de Spotify.

Pueden ver lo servicios en esta dirección

- **_[Spotify for Developores]_**(https://developer.spotify.com/documentation/web-api)

**_Tengan esa página a mano, la necesitaremos pronto..._**

<br>

## 3. Iniciando el proyecto Spotify

---

### 3.1. Intrucciones para crear el proyecto : SpotiApp

Para iniciar este proyecto, primero tenemos que, en la consola, dirigirnos a la carpeta donde queremos que el proyecto se aloje, una vez ahi con el siguiente comando en la consola procedemos a crear el proyecto :

```bash
ng new 03-SpotiApp # preciona 'Enter'
```

Te parecera una serie de preguntas en las cuales actua de la siguiente manera :

```bash
? Would you like to add Angular routing? (y/N) y # preciona 'y' y luego 'Enter'
? Which stylesheet format would you like to use? (Use arrow keys)
> CSS                                                                       # Aqui puedes navegar con las flechas de arriba y abajo, en esta opcion preciona 'Enter'
  SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less   [ http://lesscss.org                                             ]
```

Y listo..., _procedera a crearse tu proyecto en Angular !!!_

<br>

### 3.2. API de Spotify

Lo primero que hago estando en la pagina de **_[Spotify for Developores]_**(https://developer.spotify.com/documentation/web-api) es iniciar sesion(loguearme), esto puedo hacerlo a travez de tu cuenta de **_Spotify_**, la cual si no tienes procedes a crearte una, indiferentemente de si es de paga o gratuita.

Luego, te diriges al **_Dashboard_** y si es tu primera vez aceptas los terminos y condiciones. Luego te pedira que verifiques tu correo.

Despues de esto procede **_create app_**.

Ya creada la cuenta, te vas a configuraciones y ahi encontraras el `client ID` el cual usaremos para el consumo de la API.

Ahora, procedemos a crear algunos componentes que utilizaremos para este proyecto, en la consola dentro la carpeta :

Creamos el `home`

```bash
ng g c components/home --style=none
```

Creamos el `search`

```bash
ng g c components/search --style=none
```

Creamos el `navbar`

```bash
ng g c components/shared/navbar --style=none
```

Y para terminar, instalamos el bootstrap, de la siguiente pagina -> [getbootstrap](https://getbootstrap.com/)
En lo personal lo hago a travez del CDN.

## 4. Comando para Crear un componente sin los archivos de estilo y test

---

Para crear un nuevo componente con las carpetas por defecto pero sin los archivos de estilo y test, podemos usar:

```bash
ng g c shared/homePage --style=none --skip-tests=true
```

<br>

- [x] [Indice](#indice)
