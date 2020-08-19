import {Paginaperfil} from './templatePerfil.js'
import {perfil} from '../firebase.js'
import {inicio} from './templateLogin.js'


export const PagConfiguracionPerfil = () => {
    const configuracionPerfil = ` 
   
     <div class="contenedorInicio" id="inicio">
       <img src="img/logotipo1.png" class="logotipo" alt="logotipo">

            <main>
                <section>
                    
                <div id="search-container">
                        <input type="text" id="nameSearch" placeholder="Search for name">
                    </div>
                    
                    <div class="botonespaprincipal">
                        <button class="boton editarPerfil" id="editarPerfil">Editar Perfil</button>
                                                
                    </div>
               
                    </section>
                
            <div class="contenedorPerfil" id="contenedorPerfil">
            <textarea  id="inputNombre"> Ingresa tu Nombre Completo</textarea>
            <textarea  id="inputMbti"> Ingresa tu MBTI</textarea>
            <textarea  id="inputEmail"> Ingresa tu Email</textarea>
            <textarea  id="inputCiudad"> Ingresa tu Ciudad</textarea>
        <!--    <textarea  id="inputTrabajo"> Ingresa tu Trabajo</textarea>   -->   

            <button class="boton guardar" type="button" id="enviaPerfil"> Guardar </button> 
            <button class="boton cancelarperfil" type="button" id="cancelarPerfil"> Cancelar </button> 
            <button class="boton cerrarsesion" type="button" id="cerrarSesion"> Cerrar Sesion </button> 

            
            </div>

            
            `;

 window.location.hash = '#/templateConfiguracionPerfil';
 document.getElementById('root').innerHTML = configuracionPerfil;
 //LoadPosts();
 //leeme(); 
//  return posts;
 // LoadPerfil(); 
 // leemePerfil();
 LoadBotoncancelar();
 LoadPerfil();
 LoadBotoncerrarSesion();

};

 // esto es para configuracion de perfil recibir los datos
 export const LoadPerfil = () => {
    document.getElementById('enviaPerfil')
    .addEventListener('click', () =>{
       const inputPerfil = document.getElementById('contenedorPerfil').value;
       perfil(inputPerfil);
    })
  
  }; 

  //con esto llegue a boton cancelar
const LoadBotoncancelar= () => {
    const btnCancelar= document.querySelector('#cancelarPerfil');
    btnCancelar.addEventListener('click', Paginaperfil);
    }

//con esto llegue a boton cancelar
const LoadBotoncerrarSesion= () => {
    const btnCerrarSesion= document.querySelector('#cerrarSesion');
    btnCerrarSesion.addEventListener('click', inicio);
    }

    