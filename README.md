# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. UX Experiencia de usuario](#2-experiencia-de-usuario)
* [3. Ceación de prototipo](#3-creación-de-prototipo)
* [4. Imágenes de la aplicación](#4-imágenes-de-la-aplicación)
* [6. Checklist](#9-checklist)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. UX Experiencia del usuario
La página web denominada "Hide" se creo con la intención de ayudar a muchos usuarios a cifrar y descifrar sus contraseñas de las diferentes plataformas web que utilizan. 
Los principales objetivos son:
* Mantener sus contraseñas seguras.
* Cifrar sus contraseñas.
* Descifrar sus contrseñas

Al cifrar sus contraseñas, el usuario podrá guardarlas de manera segura y cualquier persona que pudiese acceder a ellas, no sabrá que significa.

El usuario podrá cifrar y descifrar sus contrseñas mediante una clave (desplazamiento).


## 3. Ceación de prototipo
El protofipo fue diseñado en PowerPoint.
Se realizó un diseño sencillo para que sea de fácil entendimeinto para el usuario.
Se diseño una página con 2 vistas, la primera muestra una bienvenida y dos botones, una de instrucciones que al hacer click te muestra una ventana emergente que contiene la instrucciones; y el otro botón de empezar que te lleva a la segunda vista donde se encuentra la funcionalidad de cifrar y descifrar.

![fondo] (/fondo/PROTOTIPO1.PNG)
![fondo] (/fondo/PROTOTIPO2.PNG)

## 4. Imagenes de la aplicación

![página] (/fondo/página1.PNG)
![página] (/fondo/página2.PNG)
![página] (/fondo/página3.PNG)

## 5. Tests unitarios

![test] (/fondo/test.PNG)

## 6. Checklist

Esta sección está para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria

* [X] `README.md` incluye info sobre proceso y decisiones de diseño.
* [X] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [X] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [X] Usa VanillaJS.
* [X] Implementa `cipher.encode`.
* [X] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [X] Pasa pruebas unitarias.
* [X] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [X] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [X] Interfaz permite escribir un texto para ser cifrado.
* [X] Interfaz muestra el resultado del cifrado correctamente.
* [X] Interfaz permite escribir un texto para ser descifrado.
* [X] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [X] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
