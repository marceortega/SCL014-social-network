import {PagConfiguracionPerfil} from './templateConfiguracionPerfil.js'
import {leemePerfil} from '../firebase.js'
import {leeme} from '../firebase.js'
import {LoadPosts} from './templatePosts.js'



export const Paginaperfil = () => {
    const perfil = ` 
   
     <div class="contenedorInicio" id="inicio">
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
                        <button class="setting" id="setting"> Setting</button>
                        
                    </div>
               
                    </section>
                <textarea  id="inputPost"> Ingresa tu Post</textarea>
                <button type="button" id="enviaPost"> Publicar </button>
              
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
};

 

 //con esto llegue a pagina de configuracion perfil
 const LoadBotonSetting = () => {
  const btnSetting = document.querySelector('#setting');
  btnSetting.addEventListener('click', PagConfiguracionPerfil);
  }