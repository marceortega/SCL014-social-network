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

    <form id="form-login" class="formato_login">
        <input class="email" id="email" type="text" placeholder="Correo eléctronico" required>
        <input class="password" id="password" type="password" placeholder="Contraseña" required>

        <div class="btns">
        <button <a  href="#" onclick="location.href = document.referrer; return false;" class="atras">Atrás</a>
        <button type="submit" class="iniciarSesion">Iniciar sesión</button>
        </div>
    </form>

    `;  

    const siginForm = document.querySelector('#form-login');
    siginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const siginEmail = document.querySelector('#email').value;
        const siginPassword = document.querySelector('#password').value;

        console.log(siginEmail, siginPassword);

        auth
        .signInWithEmailAndPassword(siginEmail, siginPassword)
        .then((userCredential) => {
            siginForm.reset();

            console.log('te conectaste guachita')
        });
    });  

}

startLogin.addEventListener('click', Login);


function Registrarse(){
    document.querySelector('#inicio').innerHTML = `
    <img src="img/logotipo1.png" class="logotipo" alt="logotipo">
    <p class="tituloRegi">Registrarse</p>
   <!-- <main>-->
        <form id="form-registrarse" class="formato_registrarse">
      <!--  <input class="nombre" id="nombre" type="text" placeholder="Nombre">
        <input class="apellido" id="apellido" type="text" placeholder="Apellido"> -->
        <input class="email" id="email" type="text" placeholder="Correo eléctronico" required>
        <input class="password" id="password" type="password" placeholder="Contraseña" required>

     <!--   <select id="mbti" class="mbti">
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
    -->
       <!-- <div class="btns">-->
        <button type="submit" class="btn-registrarse" id="btn-registrarse">Registrarse</button>
        <!--</div>-->
        </form>
   <!-- </main>-->
    `

    // Funcion Registrarse

    const sigupForm = document.querySelector('#form-registrarse');
    sigupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const sigupEmail = document.querySelector('#email').value;
        const sigupPassword = document.querySelector('#password').value;

        console.log(sigupEmail, sigupPassword);

        auth
        .createUserWithEmailAndPassword(sigupEmail, sigupPassword)
        .then((userCredential) => {
            sigupForm.reset();

            console.log('te conectaste guachita')
        });
    });  

}


startRegistrarse.addEventListener('click', Registrarse);


// Loguear con GOOGLE

const inicioGoogle = document.querySelector('#botongoogle')
inicioGoogle.addEventListener('click', e => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
    .then(result => {
        console.log('inicio con google')
    })
    .catch(err => {
        console.log(err)
    })
});

