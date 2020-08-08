// Este es el punto de entrada de tu aplicacion



//import { Login} from './lib/index.js';
//import { siginForm } from './lib/firebase.js';

//


 import { myFunction } from './lib/index.js';
 import { changeRoute } from './lib/router.js';
 import { botones } from './lib/view/templateLogin.js';
 //import { registrarse } from './lib/view/templateRegistrarse.js'

 //
 //document.getElementById('root').appendChild(registrarse())

    const init = () => {
        document.getElementById('root').innerHTML = botones()
        window.addEventListener('hashchange', () => {
            myFunction();
            console.log(window.location.hash);
            changeRoute(window.location.hash)
            })
    }
    window.addEventListener('load', init)