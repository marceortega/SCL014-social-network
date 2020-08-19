import { Paginaperfil } from "./templatePerfil.js";
import { perfil } from "../firebase.js";
import { inicio } from "./templateLogin.js";
import { Paginaprincipal } from "./templatePosts.js";

export const PagConfiguracionPerfil = () => {
  const configuracionPerfil = ` 
    <header class="posts-header">
        <div class="isologo" id="isologo">
            <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="-0.5" x2="41.3282" y2="-0.5" transform="matrix(0.507589 -0.861599 0.949891 0.31258 28.0222 39)" stroke="white"/>
                <line y1="-0.5" x2="31.3753" y2="-0.5" transform="matrix(-0.861256 -0.508172 0.726203 -0.687481 28.0222 39)" stroke="white"/>
                <line y1="-0.5" x2="15.4732" y2="-0.5" transform="matrix(-0.482554 -0.875866 0.955765 -0.294131 28.0222 39)" stroke="white"/>
                <line y1="-0.5" x2="35.9937" y2="-0.5" transform="matrix(0.79026 -0.612772 0.811394 0.584499 20.5555 25.4475)" stroke="white"/>
                <line y1="-0.5" x2="19.7012" y2="-0.5" transform="matrix(0.992604 0.121394 -0.213881 0.97686 1.00003 23.0559)" stroke="white"/>
                <line y1="-0.5" x2="27.2421" y2="-0.5" transform="matrix(0.991927 -0.126809 0.223102 0.974795 1.00003 23.0559)" stroke="white"/>
                <line x1="28.5222" y1="19.0699" x2="28.5222" y2="39" stroke="white"/>
                <line y1="-0.5" x2="16.6969" y2="-0.5" transform="matrix(0.830492 0.557031 -0.768425 0.639939 14.1556 10.3007)" stroke="white"/>
                <line y1="-0.5" x2="18.3239" y2="-0.5" transform="matrix(-0.717945 0.696099 -0.866493 -0.49919 14.1556 10.3007)" stroke="white"/>
                <line y1="-0.5" x2="35.5228" y2="-0.5" transform="matrix(0.980903 -0.194497 0.33453 0.942385 14.1556 10.3007)" stroke="white"/>
                <line y1="-0.5" x2="14.6955" y2="-0.5" transform="matrix(0.774237 -0.632896 0.825651 0.564181 14.1556 10.3007)" stroke="white"/>
                <line y1="-0.5" x2="10.2637" y2="-0.5" transform="matrix(-0.51963 -0.854392 0.946854 -0.321663 14.1556 10.3007)" stroke="white"/>
                <line y1="-0.5" x2="22.9017" y2="-0.5" transform="matrix(-0.341555 0.939862 -0.980013 -0.198934 8.82224 1.53149)" stroke="white"/>
                <line y1="-0.5" x2="16.7207" y2="-0.5" transform="matrix(0.999495 -0.0317873 0.0568446 0.998383 8.82224 1.53149)" stroke="white"/>
                <line y1="-0.5" x2="23.5882" y2="-0.5" transform="matrix(0.994847 0.10139 -0.179493 0.983759 25.5334 1)" stroke="white"/>
            </svg>
            <h1 class="posts-titulo-pagina" id="postsTituloPagina">MBTI Social</h1>
        </div>
        <img class="avatar header-avatar" id="fotoperfil" width="50" />
        <div class="search-container">
            <input type="text" id="nameSearch" placeholder="Ingresar nombre" />
            <img src="img/magnifying-glass.png" width="20" />
        </div>
    </header>
    <div class="tarjeta-inicio">
        <h2 class="tituloRegi">Editar Perfil</h2>
        <form class="form-editar-perfil">
            <div class="fila">       
                <input class="input x2 inputNombre" id="inputNombre" type="text" placeholder="Nombre">
                <input class="input x2 inputApellido" id="inputApellido" type="text" placeholder="Apellido">
            </div>
            <input class="input inputEmail" id="inputEmail" type="text" placeholder="Email">
            <input class="input inputCiudad" id="inputCiudad" type="text" placeholder="Ciudad">
            <input class="input inputTrabajo" id="inputTrabajo" type="text" placeholder="Trabajo">

            <select id="inputMbti" class="input mbti" placeholder="MBTI">
                <option value="">MBTI</option>
                <option value="ESTJ">ESTJ</option>
                <option value="ESTP">ESTP</option>
                <option value="ESFJ">ESFJ</option>
                <option value="ESFP">ESFP</option>
                <option value="ISTJ">ISTJ</option>
                <option value="ISTP">ISTP</option>
                <option value="ISFJ">ISFJ</option>
                <option value="ISFP">ISFP</option>
                <option value="ENTJ">ENTJ</option>
                <option value="ENTP">ENTP</option>
                <option value="ENFJ">ENFJ</option>
                <option value="ENFP">ENFP</option>
                <option value="INTJ">INTJ</option>
                <option value="INTP">INTP</option>
                <option value="INFJ">INFJ</option>
                <option value="INFP">INFP</option>
            </select>

            <div style="margin-top:15px" class="fila">
                <button class="boton guardar" type="button" id="enviaPerfil">Guardar</button> 
                <button class="boton cancelarperfil" type="button" id="cancelarPerfil">Cancelar</button> 
                <button class="boton cerrarsesion" type="button" id="cerrarSesion">Cerrar Sesión</button>
            </div>
        </form>
    </div>
    `;

  window.location.hash = "#/templateConfiguracionPerfil";
  document.getElementById("root").innerHTML = configuracionPerfil;
  //LoadPosts();
  //leeme();
  //  return posts;
  // LoadPerfil();
  // leemePerfil();
  LoadBotoncancelar();
  LoadPerfil();
  LoadBotoncerrarSesion();
  LoadHome();
  LoadHomeH();
};

// esto es para configuracion de perfil recibir los datos
export const LoadPerfil = () => {
  document.getElementById("enviaPerfil").addEventListener("click", () => {
    const inputPerfil = document.getElementById("contenedorPerfil").value;
    perfil(inputPerfil);
  });
};

//con esto llegue a boton cancelar
const LoadBotoncancelar = () => {
  const btnCancelar = document.querySelector("#cancelarPerfil");
  btnCancelar.addEventListener("click", Paginaperfil);
};

//con esto llegue a boton cancelar
const LoadBotoncerrarSesion = () => {
  const btnCerrarSesion = document.querySelector("#cerrarSesion");
  btnCerrarSesion.addEventListener("click", inicio);
};

const LoadHome = () => {
  const btnLogo = document.querySelector("#isologo");
  btnLogo.addEventListener("click", Paginaprincipal);
};

const LoadHomeH = () => {
  const btnLogoEscrito = document.querySelector("#postsTituloPagina");
  btnLogoEscrito.addEventListener("click", Paginaprincipal);
};
