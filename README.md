# Proyecto 1 Sistemas y Tecnologías Web

## 🚗 Duplicando una página web

Para este proyecto se hizo una réplica de alguna página web que nosotros escogieramos, en este caso se realizó la del equipo Alpine de Fórmula 1 utilizando componentes de React y Vite.

## 💻 Páginas Web
- Página original: https://www.alpine-cars.co.uk/formula-1/f1-team.html
- Réplica: https://uvgenios.online/21169/Proyecto1_Web/dist/index.html

## 👩‍💻 Tecnologías implementadas y proceso

`Entorno Vite`: Para la creación del entorno vite del proyecto se ejecuta el comando 
```bash
npm create vite@latest <nombre-de-mi-proyecto>
```
Para poder instalas este proyecto en tu dispositivo corre el siguiente comando:
```bash
git clone https://github.com/LINDAINES213/Proyecto1_Web.git
```
`Dependencias`: Realiza una instalación de las dependencias npm con el comando 
```bash
npm install
``` 
en la terminal dentro de la carpeta del proyecto de vite creado o clonado. <br>
`Correr Programa`: Para correr el programa copia este comanto en la terminal dentro de la carpeta del proyecto
```bash
npm run dev
```
`React y ESLint`: Al código se le implementaron las siguientes reglas de ESLint como base 
```bash
'plugin:react/recommended', 'airbnb-base', 'airbnb/rules/react' 
``` 
pero tiene algunas extra añadidas.
`Script ESLint`: En el repositorio se proporciona un script (.eslintrc.json) para ver si el código de react contiene errores. Para probarlo se dirige a la carpeta donde se encuentre el archivo con extension .jsx que desee analizar y se corre el comando 
```bash
npx eslint nombre-archivo.jsx
```
Recuerde siempre estar dentro de la carpeta donde este el archivo .jsx a analizar
```bash
cd nombre-carptea
```

Realizado por: Linda Jimenez
