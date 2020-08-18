import { post} from '../firebase.js'
import {leeme} from '../firebase.js'
import {Paginaperfil} from '../view/templatePerfil.js'


export const Paginaprincipal = () => {
    const posts = ` 
   
    
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
                        <button class= "fotoperfil" id="fotoperfil"> aqui va una foto </button>
                    </div>
               
                    </section>
                <textarea  id="inputPost"> Ingresa tu Post</textarea>
                <button type="button" id="enviaPost"> Publicar </button>
              
               <p id="outputPost"> </p>  
       
               <!--        <div class="contenedorprincipal" id="inicio"> 
                    <ul class="posts" id="posts">
                    
                    </ul>
                </div>   -->

                <!--  </main>
             <div class="btn-imagenes">
                <img class="previous" src="img/previous.png" alt="">
                <img class="house" src="img/house.png" alt="">
                <img class="heart" src="img/heart.png" alt="">
            </div> -->
   <!-- </div>-->
   
  `;

  window.location.hash = "#/Posts";
 document.getElementById('root').innerHTML = posts;
 
 LoadPosts();
 leeme(); 
//  return posts;
 LoadDatosPerfil();
};

 export const LoadPosts = () => {
     document.getElementById('enviaPost')
     .addEventListener('click', () =>{
        const inputPosts = document.getElementById('inputPost').value;
        post(inputPosts);
     })
    
    
  };
 //con esto llegue a perfil
  const LoadDatosPerfil = () => {
  const btnPerfil = document.querySelector('#fotoperfil');
  btnPerfil.addEventListener('click', Paginaperfil);
  }