// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();


const startLogin = document.querySelector('#iniciarSesion');


function Login(){
    document.querySelector('#inicio').innerHTML = `
    <img src="img/logotipo1.png" class="logotipo" alt="logotipo">
    <p class="iniciarsesion">Iniciar Sesión</p>
    <main>
        <section id="login" class="formato_login">
        <input class="email" type="email" placeholder="Correo eléctronico"/>
        <input class="password"type="password" placeholder="Contraseña"/>
        <div class="btns">
        <button class="atras">Atrás</button>
        <button class="iniciarSesion">Iniciar sesión</button>
        </div>
        </section>
    </main>
    `;  

}
startLogin.addEventListener('click', Login);