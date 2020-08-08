import { registrarse } from './view/templateRegistrarse.js';
import { botones } from './view/templateLogin.js';
import { Login } from './index.js'


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
    const containerRegistrarse = document.getElementById('registrarse');
    containerRoot.innerHTML = botones();
    
    switch (hash) {
        case '#/Iniciar-Sesion':
            containerRoot.appendChild(Login());
            break;
        case '#/Registrarse':
            containerRegistrarse.appendChild(registrarse());
            break;
        default: 
        containerRoot.innerHTML = `<h2> no existe</h2>`
    }
        
}