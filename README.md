# Proyecto 1 Sistemas y Tecnologías Web

## 🚗 Duplicando una página web

Para este proyecto se hizo desde cero la página web que nosotros escogieramos, en este caso se realizó la del equipo Alpine de Fórmula 1 utilizando componentes de React y Vite.

## 💻 Páginas Web
- Página original: https://www.alpine-cars.co.uk/formula-1/f1-team.html
- Réplica: https://uvgenios.online/21169/Proyecto1_Web/dist/index.html

## 👩‍💻 Tecnologías implementadas y proceso

`Entorno Vite`: Para la creación de un entorno vite del proyecto se ejecuta el comando en la terminal eligiendo de especificaciones React y Javascript.
```bash
npm create vite@latest <nombre-de-mi-proyecto>
```
Para poder correr este proyecto en tu dispositivo corre el siguiente comando:
```bash
git clone https://github.com/LINDAINES213/Proyecto1_Web.git
```
`Dependencias`: Realiza una instalación de las dependencias npm con el comando 
```bash
npm install
``` 
en la terminal dentro de la carpeta del proyecto de vite creado o clonado. <br><br>
`Correr Programa`: Para correr el programa copia este comanto en la terminal dentro de la carpeta del proyecto
```bash
npm run dev
```
Si se corrio exitosamente deberia salirte esto en la terminal, donde se muestra el link donde se esta ejecutando la pagina web para que la puedas ir visualizando. <br><br>
![image](https://github.com/LINDAINES213/Proyecto1_Web/assets/77686175/ed35df22-ec90-445c-b8c2-bbc0dd2f91db)
<br><br>
`React y ESLint`: Al código se le implementaron las siguientes reglas de ESLint como base 
```bash
'plugin:react/recommended', 'airbnb-base'
``` 
pero tiene algunas extra añadidas como el prittier para los puntps y coma, entre otros. <br><br>
`Script ESLint`: En el repositorio se proporciona un script (.eslintrc.json) para ver si el código de react contiene errores. Para probarlo se dirige a la carpeta donde se encuentre el archivo con extension .jsx que desee analizar y se corre el comando 
```bash
npx eslint nombre-archivo.jsx
```
Recuerde siempre estar dentro de la carpeta donde este el archivo .jsx a analizar. <br><br>
```bash
cd nombre-carptea
```
Si el archivo no contiene ningun error, luego de ingresar el comando de `npx eslint` en la terminal, no deberia de imprimirse nada en la consola y solo deberia de dar otra linea para escribir algun otro comando. Este seria el ejemplo de como se deberia de ver: <br><br>
![image](https://github.com/LINDAINES213/Proyecto1_Web/assets/77686175/b1948871-6a67-42d1-9413-eb369d25fdc8) <br><br>
En este caso se analizaron los archivos de App.jsx, main.jsx y BarraInicial.jsx donde no se imprimio nada mas que la linea para seguir escribiendo comandos.

Realizado por: Linda Jimenez
