import { registrarse } from './view/templateRegistrarse.js';
import { botones } from './view/templateLogin.js';
import { Login } from './index.js';
import { Paginaprincipal} from './view/templatePosts.js'



export const changeRoute = (hash) => {
    if (hash === '#/Iniciar-Sesion') {
        return showTemplate(hash)

    } else if (hash === '#/Registrarse') {
        return showTemplate(hash)
    } else {
        return showTemplate(hash)
    }

}

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    const containerRegistrarse = document.getElementById('root');
    const containerPost = document.getElementById('root');

    containerRoot.innerHTML = botones();
    
    switch (hash) {
        case '#/Iniciar-Sesion':
            containerRoot.appendChild(Login());
            break;
        case '#/Registrarse':
            containerRegistrarse.innerHTML = registrarse();
            break;
            case '#/Registrar':
            containerPost.innerHTML = Paginaprincipal();
                break;
        //case '#/Atras':
          //  containerRoot.innerHTML = Login();
        default: 
        containerRoot.innerHTML = `<h2> no existe</h2>`
    }
        
}