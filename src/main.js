// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

//Esta función sirve para cambiar de pantalla y hacer HTML dinámico 

const startLogin = document.querySelector('#iniciarSesion');
const startRegistrarse = document.querySelector('#registrarse');
const startAtras = document.querySelector('#atras');
const startRegistra = document.querySelector('#btn-registra');
const container = document.querySelector ('#formulario');




// Funcion Logueo

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
            console.log('te logeaste guachita')
            auth.onAuthStateChanged(user => {
                if(user) {
                    //fs.collection('posteos')
                    //.get()
                    //.then((snapshot) => {
                    // console.log(snapshot.docs)
                    let startRegistra = document.querySelector('.iniciarSesion');
                    startRegistra.addEventListener('click',Paginaprincipal)
                   console.log( "auth:Fijate en este logueda")
                   
                //})
                
                }else {
                console.log('auth: Fijate en este no logueado')
            }
           })
        });    
    });     
}
startLogin.addEventListener('click', Login);


// Funcion Registrarse

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
        <!--<button type="submit" class="btn-registrarse" id="btn-registrarse">Registrarse</button>-->
        <!--</div>-->

        <div class="btons">
            <button type="submit" class="btn-registro" id="btn-registro" display="block"> Registrarse</button>
        </div>
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

let startLoginGoogle = document.querySelector('.botongoogle');
 startLoginGoogle.addEventListener('click',Paginaprincipal)



function Paginaprincipal(){
    document.querySelector('#inicio').innerHTML = `
    <img src="img/logotipo1.png" class="logotipo" alt="logotipo">

    <main>
        <section>
            <div id="search-container">
                <input type="text" id="nameSearch" placeholder="Search for name">
            </div>
            <div class="botonespaprincipal">
                <button class="loactual" id="loactual">Lo actual</button>
                <button class="favoritos" id="favoritos"> Favoritos</button>
                <button class="guardados" id="guardados"> Guardados</button>
            </div>
        </section>

        <div class="contenedorprincipal"> 
           <h1> mira esto </h1>

        <ul class="posts">
            </ul>
        </div>

    </main>
    `
    
}

startRegistra.addEventListener('click', Paginaprincipal);

/*const postList = document.querySelector(".posts");
     const setupPosts = (data) => {
            if (data.length) {
            let html = "";
            data.forEach((doc) => {
            const post = doc.data();
            const li = `
            <li class="list">
            <h5>${post.cuerpo}</h5>
            <p>${post.titulo}</p>
            </li>
             `;
              html += li;
             });
            postList.innerHTML = html;
            } else {
            postList.innerHTML = '<h4 class="text">Login to See Posts</h4>';
             }
           };
*/
    



        

    
    
    // Logout
const logout = document.querySelector("#deslogeo");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log(" Te saliste?signup out");
  });
});