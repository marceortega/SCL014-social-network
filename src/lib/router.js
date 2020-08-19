import { inicio } from "./view/templateLogin.js";
import { Login } from "./index.js";
import { registrarse } from "./view/templateRegistrarse.js";
import { Paginaprincipal } from "./view/templatePosts.js";
import { Paginaperfil } from "./view/templatePerfil.js";
import { PagConfiguracionPerfil } from "./view/templateConfiguracionPerfil.js";

//import { Paginaprincipal} from './view/templatePosts.js'

export const changeRoute = (hash) => {
  //return showTemplate(hash)
  /*
     if (hash === '#/') {
        return showTemplate(hash)
     } else if (hash === '#/IniciarSesion') {
         return showTemplate(hash)
 
     } else if (hash === '#/Registrarse') {
         return showTemplate(hash)
         
     } else if (hash === '#/Posts') {
        return showTemplate(hash)   
     
     } else {
         return showTemplate(hash)
     }
 
 */

  //const containerRoot = document.getElementById('root');
  const showTemplate = (hash) => {
    switch (hash) {
      case "#/":
        // containerRoot.appendChild(Login());
        inicio();
        break;
      case "#/IniciarSesion":
        //containerRoot.innerHTML = Login();
        Login();
        break;
      case "#/Registrarse":
        //containerRegistrarse.innerHTML = registrarse();
        registrarse();
        break;
      case "#/Posts":
        //containerPost.innerHTML = Paginaprincipal();
        Paginaprincipal();
        break;
      case "#/Perfil":
        Paginaperfil();
        break;
      case "#/templateConfiguracionPerfil":
        PagConfiguracionPerfil();
        break;
      default:
        inicio();
    }
  };
};
