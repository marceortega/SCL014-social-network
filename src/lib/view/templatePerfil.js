import {PagConfiguracionPerfil} from './templateConfiguracionPerfil.js'
import {leemePerfil} from '../firebase.js'
import {leeme} from '../firebase.js'
import {LoadPosts} from './templatePosts.js'
import {Paginaprincipal} from './templatePosts.js'
    



export const Paginaperfil = () => {
    const perfil = ` 
   
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
        <input type="text" id="nameSearch" placeholder="Ingresar nombre">
        <img src="img/magnifying-glass.png" width="20" />
    </div>
         <nav class="posts-botonera">
         <button class="boton loactual" id="loactual">Lo actual</button>
        <button class="boton favoritos" id="favoritos">Favoritos</button>
        <button class="boton guardados" id="guardados">Guardados</button>
        <img class="boton setting" id="setting"  src="img/settings.png"   width="50" />
</nav>
</header>
                        
                       
                        
                    </div>
               
                    </section>
                <textarea  id="inputPost"> Ingresa tu Post</textarea>
                <button class="boton publicarperfil" type="button" id="enviaPost"> Publicar </button>
              
               <p id="outputPost"> </p>  

            
            `;

 window.location.hash = "#/Perfil";
 document.getElementById('root').innerHTML = perfil;
  LoadPosts();
 //leeme(); 
//  return posts;
  LoadBotonSetting();
  leemePerfil();
 // leeme(); 
 LoadHome();
 LoadHomeH();
 LoadLoActual();
};

 

 //con esto llegue a pagina de configuracion perfil
 const LoadBotonSetting = () => {
  const btnSetting = document.querySelector('#setting');
  btnSetting.addEventListener('click', PagConfiguracionPerfil);
  }

  const LoadHome = () => {
    const btnLogo = document.querySelector('#isologo');
    btnLogo.addEventListener('click', Paginaprincipal);
    }

const LoadHomeH = () => {
    const btnLogoEscrito = document.querySelector('#postsTituloPagina');
    btnLogoEscrito.addEventListener('click', Paginaprincipal);
    }

    const LoadLoActual = () => {
        const btnLoActual = document.querySelector('#loactual');
        btnLoActual.addEventListener('click', Paginaprincipal);
        }