import '../css/components.css'
import webpackloggo from '../assets/img/webpack-logo.png'

export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');

    h1.innerText = ` Hola ${nombre} !!!`

    document.body.append(h1);



    // img
    console.log(webpackloggo)
    const img = document.createElement('img')
    img.src = webpackloggo;
    document.body.append(img)
}