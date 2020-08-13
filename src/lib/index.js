
import {signIn} from './firebase.js';
import {Paginaprincipal} from './view/templatePosts.js'
// aqui exportaras las funciones que necesites

/*export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo loco!');
};*/



export  const Login = () => {
    //const divLoguearse = document.createElement ('div');
    const viewLogin = `
    <div class="contenedorInicio" id="inicio">

    <img src="img/logotipo1.png" class="logotipo" alt="logotipo">
    <p class="iniciarsesion">Iniciar Sesión</p>

    <form id="form-login" class="formato_login">
        <input class="email" id="email" type="text" placeholder="Correo eléctronico" required>
        <input class="password" id="password" type="password" placeholder="Contraseña" required>

        <div class="btns">
        <button <a  href="#" onclick="location.href = document.referrer; return false;" class="atras">Atrás</a>
        <button type="submit" id='btnLogearse'   class="iniciarSesion">Iniciar sesión</button>
        </div>
    </form>
    </div>
    `;

      window.location.hash = "#/IniciarSesion";
      document.getElementById('root').innerHTML = viewLogin;
      loadLogin();

    //divLoguearse.innerHTML=viewLoguerase;
   // return viewLogin;

} 

    const loadLogin = () => {
   // Función que lleva desde la pagina de inicio a la segunda
   const btnLogin = document.querySelector('#btnLogearse');
   btnLogin.addEventListener('click', () => {
    signIn(Paginaprincipal);
   });



  
  //const btnLogin = document.querySelector('#btnLogearse');
  //btnLogin.addEventListener('click', logeo);
/*
  function logeo() {
    const siginEmail = document.getElementById('email').value;
    const siginPassword = document.getElementById('password').value;

    console.log(siginEmail, siginPassword);

    const user = {
      siginEmail ,
      siginPassword,

    };

    if(siginEmail  === '' || siginPassword === '') {
      alert('Debe rellenar todos los campos');
      //console('los campos no deben quedar vacios');
     }else {
      signIn(Paginaprincipal, user);
      alert('Iniciaste Sesion Correctamente');
      console.log ('pasate a esta parte del logeo')
     }

  };*/
  }

   
      
 

   

