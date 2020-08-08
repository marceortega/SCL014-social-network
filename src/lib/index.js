// aqui exportaras las funciones que necesites

//import { sigupForm, siginForm, inicioGoogle, } from './firebase.js'


export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};



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
        </div>`;  


    const Logueo = () => {
        const mail = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        
        document.querySelector('#iniciarSesion').addEventListener('click', signInWithEmailAndPassword(mail, password));

    }

    document.querySelector('#iniciarSesion').addEventListener('click', Logueo);
};

//startLogin.addEventListener('click', Login);


// Funcion Registrarse
/*
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
            <button type="submit" class="btn-registro" id="btn-registro"> Registrarse</button>
        </div>
        </form>
   <!-- </main>-->
    `
;

}

//startRegistrarse.addEventListener('click', Registrarse);



function Paginaprincipal(){
  console.log('si escucho el click');
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
          <ul class="posts">
          </ul>
      </div>

  </main>
  `

}

//startRegistra.addEventListener('click', Paginaprincipal);

*/