// aqui exportaras las funciones que necesites

//import { sigupForm, siginForm, inicioGoogle, } from './firebase.js'



/*export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
*/

// Funcion Logueo

export const Login = () => {
    const inicio = document.getElementById('inicio');
    inicio.innerHTML = ''; 
        inicio.innerHTML = `
        <div id="containerInicio">
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
        </div>`


   // const Logueo = () => {
     //   const mail = document.querySelector('#email').value;
       // const password = document.querySelector('#password').value;
        
       // document.querySelector('#iniciarSesion').addEventListener('click', signInWithEmailAndPassword(mail, password));

    };  

    //document.querySelector('#iniciarSesion').addEventListener('click', Logueo);

//startLogin.addEventListener('click', Login);


