Cifrado César
Cifrar significa codificar. El cifrado César es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

caeser-cipher

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (offset) de 3 posiciones:

La letra A se cifra como D.
La palabra CASA se cifra como FDVD.
Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

Resumen del proyecto
¿Qué tengo que hacer exactamente? En este proyecto crearás la primera aplicación web del bootcamp. Servirá para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (offset).

La temática es libre. Tú debes pensar en qué situaciones de la vida real se necesitaría cifrar un mensaje y pensar en cómo debe ser esa experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc.

Algunas ideas de ejemplo:

Crear claves seguras para el email.
Encriptar/cifrar una tarjeta de crédito.
Herramienta de mensajería interna de una organización de derechos humanos en una zona de conflicto.
Mensajería secreta para parejas.
Consideraciones generales
Este proyecto se debe resolver de manera individual.
El proyecto será entregado subiendo tu código a GitHub (commit/push) y la interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no te preocupes, lo aprenderás durante este proyecto.
Tiempo para completarlo: El proyecto dura 2 semanas, trabaja con sprints y planificando tus tareas.

Definición del producto
En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

Quiénes son los principales usuarios de producto.
Cuáles son los objetivos de estos usuarios en relación con tu producto.
Cómo crees que el producto que estás creando está resolviendo sus problemas.
Interfaz de usuario (UI)
La interfaz debe permitir al usuario:

Elegir un desplazamiento (offset) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
Insertar un mensaje (texto) que queremos cifrar.
Ver el resultado del mensaje cifrado.
Insertar un mensaje (texto) a descifrar.
Ver el resultado del mensaje descifrado.
Scripts / Archivos
README.md
: debe explicar cómo descargar, instalar y ejecutar la aplicación así como una introducción a la aplicación, su funcionalidad y decisiones de diseño que tomaron.
src/index.html: este es el punto de entrada a tu aplicación. Este archivo debe contener tu markup (HTML) e incluir el CSS y JavaScript necesario.
src/cipher.js: acá debes implementar el objeto cipher, el cual debe estar exportado en el objeto global (window). Este objeto (cipher) debe contener dos métodos:
cipher.encode(offset, string): offset es el número de posiciones que queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.
cipher.decode(offset, string): offset es el número de posiciones que queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos descifrar.
src/index.js: acá debes escuchar eventos del DOM, invocar cipher.encode() o cipher.decode() según sea necesario y actualizar el resultado en la UI.
test/cipher.spec.js: este archivo contiene algunos tests de ejemplo y acá tendrás que implementar los tests para cipher.encode() y cipher.decode().
Funcionalidad extra o “Hacker edition”
Las secciones llamadas “Hacker Edition” son opcionales. Si alcanzaste los objetivos de aprendizaje y te queda tiempo, intenta realizar el hacker edition. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El boilerplate incluye algunos tests (comentados en principio) que puedes usar como punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del hacker edition te invitamos a explorar también esta caso por tu cuenta.

Vamos a los detalles. Consideraciones Técnicas
La lógica del proyecto debe estar implementada completamente en JavaScript (ES6). En este proyecto NO está permitido usar librerías o frameworks, sólo vanilla JavaScript.

No se debe utilizar la pseudo-variable this.

Los tests unitarios deben cubrir un mínimo del 70% de statements, functions y lines, y un mínimo del 50% de branches. El boilerplate ya contiene el setup y configuración necesaria para ejecutar los tests (pruebas) así como code coverage para ver el nivel de cobertura de los tests usando el comando npm test.

El boilerplate incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio que contiene el boilerplate.

El boilerplate contiene una estructura de archivos como punto de partida así como toda la configuración de dependencias y tests de ejemplo:

./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── 
README.md

├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
El boilerplate incluye tareas que ejecutan eslint y htmlhint para verificar el HTML y JavaScript con respecto a una guías de estilos. Ambas tareas se ejecutan automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando npm run test. En el caso de JavaScript estamos usando un archivo de configuración de eslint que se llama .eslintrc que contiene un mínimo de información sobre el parser que usar (qué version de JavaScript/ECMAScript), el entorno (browser en este caso) y las reglas recomendadas ("eslint:recommended"). En cuanto a reglas/guías de estilo en sí, usaremos las recomendaciones por defecto de tanto eslint como htmlhint.

Pistas sobre cómo comenzar a trabajar en el proyecto
Antes que nada, asegúrate de tener un 📝 editor de texto en condiciones, algo como Atom o Code.
Para ejecutar los comandos a continuación necesitarás una 🐚 UNIX Shell, que es un programita que interpreta líneas de comando (command-line interpreter) así como tener git instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente git también). Si usas Windows puedes usar Git bash, aunque recomendaría que consideres probar 🐧 GNU/Linux.
Haz tu propio 🍴 fork del repo de tu cohort, tus coaches te compartirán un link a un repo y te darán acceso de lectura en ese repo.
⬇️ Clona tu fork a tu computadora (copia local).
📦 Instala las dependencias del proyecto con el comando npm install. Esto asume que has instalado Node.js (que incluye npm).
Si todo ha ido bien, deberías poder ejecutar las 🚥 pruebas unitarias (unit tests) con el comando npm test.
A codear se ha dicho! 🚀

Recursos y temas relacionados
A continuación un video de Michelle que te lleva a través de la fórmula matemática del Cifrado César y un par de cosas más que debes saber para resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! 😃

https://www.youtube.com/watch?v=zd8eVrXhs7Y

tips caesar cipher

Diseño de experiencia de usuario (User Experience Design):

Ideación
Prototipado (sketching)
Testeo e Iteración
Desarrollo Front-end:

Conceptos a repasar 

Valores
Tipos
Variables
Control de flujo
Tests unitarios

Aprende más sobre charCodeAt()
Aprende más sobre String.fromCharCode()
Aprende más sobre ASCII
Documentación de NPM
Herramientas:

GitHub y GitHub Pages
Guía de Scrum: solamente para comenzar a entender cómo organizar tu trabajo.
Checklist
Esta sección está para ayudarte a llevar un control de los objetivos de aprendizaje y las funcionalidades.

 
README.md
 incluye info sobre proceso y decisiones de diseño.
 
README.md
 explica claramente quiénes son los usuarios y su relación con el producto.
 
README.md
 explica claramente cómo el producto soluciona los problemas/necesidades de los usuarios.
 Usa VanillaJS.
 No utiliza this.
 Implementa cipher.encode.
 Implementa cipher.decode.
 Pasa linter con configuración provista.
 Pasa pruebas unitarias.
 Pruebas unitarias cubren 70% de statements, functions y lines, y un mínimo del 50% de branches.
 Interfaz permite elegir el offset o desplazamiento a usar en el cifrado/descifrado.
 Interfaz permite escribir un texto para ser cifrado.
 Interfaz muestra el resultado del cifrado correctamente.
 Interfaz permite escribir un texto para ser descifrado.
 Interfaz muestra el resultado del descifrado correctamente.
Funcionalidad extra o “Hacker edition”
 Cifra/descifra minúsculas
 Cifra/descifra otros caracteres (espacios, puntuación, ñ, á, ...)
 Permite usar un offset negativo.
