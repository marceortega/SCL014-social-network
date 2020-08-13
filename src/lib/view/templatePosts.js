import { registrarse } from './templateRegistrarse.js'

export const Paginaprincipal = () => {
    const posts = `
    <!--<div class="contenedorInicio" id="inicio">-->
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

                <div class="contenedorprincipal" id="inicio"> 
                    <ul class="posts">
                    Que usuaria Mas Linda !!!
                    Estamos trabajando para ti!!!!
                    </ul>
                </div>

            </main>
            <div class="btn-imagenes">
                <img class="previous" src="img/previous.png" alt="">
                <img class="house" src="img/house.png" alt="">
                <img class="heart" src="img/heart.png" alt="">
            </div>
   <!-- </div>-->
  `;

  window.location.hash = "#/Posts";
  document.getElementById('root').innerHTML = posts;
  //LoadPosts();

 // return posts;

};
/*
const LoadPosts = () => {
    // Función que lleva desde logo segunda pagina a primera página
    const posts = document.getElementById('posts');
    posts.addEventListener('click', registrarse);
  };

*/


