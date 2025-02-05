## DevTinder UI

- create vite-react app
  npm create vite@latest devTinderUI -- --template react
- Install all node packages required
  npm install
- Remove unnecessary code
- Write Hello world Program and run
  npm run dev
- Now In this project we are using tailwind css and daisyUI
- Install tailwind css v4.0
  npm install tailwindcss @tailwindcss/vite

- write the above code in vite.config.js file
  import { defineConfig } from 'vite'
  import tailwindcss from '@tailwindcss/vite'
  export default defineConfig({
  plugins: [
  tailwindcss(),
  ],
  })

- import tailwindcss in index.css file
  @import "tailwindcss";

- Now write some tailwindcss commands in the code and start the app. It should reflect

-Now install daisyUi
npm i -D daisyui@latest

- put require('daisyui') in vite.config.js
