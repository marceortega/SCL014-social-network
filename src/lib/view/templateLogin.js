export const botones = () => {
    const viewBotones = `
  <div class="contenedorInicio" id="inicio">
        <img src="img/logotipo1.png" class="logotipo" alt="logotipo">

        <p>La comunidad Jungiana más grande, creada para compartir intereses en común y distintas personalidades.</p>
        <input type="image" class="logoGoogle" src="img/google.png" alt="imagenGoogle"/>
        <p class="parrafoGoogle">Iniciar sesión con Google</p>
        <button type="button"  class="botongoogle" id="botongoogle">Iniciar sesión con Google</button>

      <div class="botones">
        <!--<button class="iniciarSesion" id="iniciarSesion">Iniciar sesión</button>
            <button class="registrarse" id="registrarse"> Registrarse</button>
            <button type="button" class="btn-registra" id="btn-registra" display="none"> Registrarse</button> 
        -->
          <ul class="ejemplo">
            <li>
                <a class="btn-iniciosesion" href="#/Iniciar-Sesion">Iniciar Sesion</a>
            </li>
            <li>
                <a class="btn-registrarse" href="#/Registrarse">Registrarse</a>
            </li>
          </ul> 
      </div>

    <a href="https://www.16personalities.com/es/test-de-personalidad">
      <img  class="icono16" src="img/icono16.png" alt="logo 16 personalidades">
    </a>
    <p class="parrafo16"> Test 16personalities</p>
  </div>
    `;

    return viewBotones; 
};

