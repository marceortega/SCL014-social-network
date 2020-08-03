// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();


const startLogin = document.querySelector('#iniciarSesion');
const startRegistrarse = document.querySelector('#registrarse');
const startAtras = document.querySelector('#atras');


function Login(){
    document.querySelector('#inicio').innerHTML = `
    <img src="img/logotipo1.png" class="logotipo" alt="logotipo">
    <p class="iniciarsesion">Iniciar Sesión</p>
    <main>
        <section id="login" class="formato_login">
        <input class="email" type="email" placeholder="Correo eléctronico"/>
        <input class="password"type="password" placeholder="Contraseña"/>
        <div class="btns">
        <button <a  href="#" onclick="location.href = document.referrer; return false;" class="atras">Atrás</a>
        <button class="iniciarSesion">Iniciar sesión</button>
        </div>
        </section>
    </main>
    `;  

}
startLogin.addEventListener('click', Login);


function Registrarse(){
    document.querySelector('#inicio').innerHTML = `
    <img src="img/logotipo1.png" class="logotipo" alt="logotipo">
    <p class="tituloRegi">Registrarse</p>
    <main>
        <section id="registrarse" class="formato_registrarse">
        <input class="nombre" type="text" placeholder="Nombre">
        <input class="apellido" type="text" placeholder="Apellido">
        <input class="email" type="email" placeholder="Correo eléctronico"/>
        <input class="password"type="password" placeholder="Contraseña"/>

        <select id="mbti" class="mbti">
            <option value="">MBTI</option>
            <option value="ESTJ">ESTJ </option>
            <option value="ESTP">ESTP </option>
            <option value="ESFJ">ESFJ </option>
            <option value="ESFP">ESFP </option>
            <option value="ISTJ">ISTJ </option>
            <option value="ISTP">ISTP </option>
            <option value="ISFJ">ISFJ </option>
            <option value="ISFP">ISFP </option>
            <option value="ENTJ">ENTJ </option>
            <option value="ENTP">ENTP </option>
            <option value="ENFJ">ENFJ </option>
            <option value="ENFP">ENFP </option>
            <option value="INTJ">INTJ </option>
            <option value="INTP">INTP </option>
            <option value="INFJ">INFJ </option>
            <option value="INFP">INFP </option>
        </select>

        <div class="btns">
        <button class="btn-registrarse">Registrarse</button>
        </div>
        </section>
    </main>
    `;  

}
startRegistrarse.addEventListener('click', Registrarse);


/*
function start() {
    window.location = 'index.html';
  }
  
  
  let startButton = document.querySelector('#inicio');
  startButton.addEventListener('click', start);
*/