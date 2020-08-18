import { registrarse } from './templateRegistrarse.js'
import { post} from '../firebase.js'
import {leeme} from '../firebase.js'
import {perfil} from '../firebase.js'



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
                        
                    </div>
               
                    </section>
                <textarea  id="inputPost"> Ingresa tu Post</textarea>
                <button type="button" id="enviaPost"> Publicar </button>
              
               <p id="outputPost"> </p>  

      <div class="contenedorPerfil" id="contenedor-perfil">
            <textarea  id="inputNombre"> Ingresa tu Nombre Completo</textarea>
            <textarea  id="inputEmail"> Ingresa tu Email</textarea>
            <textarea  id="inputCiudad"> Ingresa tu Ciudad</textarea>
            <textarea  id="inputTrabajo"> Ingresa tu Trabajo</textarea>
            <button type="button" id="enviaPerfil"> Subir Datos </button> 

            
            
               
            
            
            `;

 window.location.hash = "#/Perfil";
 document.getElementById('root').innerHTML = perfil;
 //LoadPosts();
 //leeme(); 
//  return posts;
  LoadPerfil(); 
  leemePerfil();
};

 export const LoadPosts = () => {
     document.getElementById('enviaPost')
     .addEventListener('click', () =>{
        const inputPosts = document.getElementById('inputPost').value;
        post(inputPosts);
        

     })
    // Función que lleva desde logo segunda pagina a primera página
    
  };

  export const LoadPerfil = () => {
    document.getElementById('enviaPerfil')
    .addEventListener('click', () =>{
       const inputPerfil = document.getElementById('inputNombre').value;
       perfil(inputPerfil);
    })
  
  };