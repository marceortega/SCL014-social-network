
    // Funcion Registrarse

//export const sigupForm = document.querySelector('#form-registrarse');
/*
export const sigupForm = (sigupEmail, sigupPassword) => {
     sigupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const sigupEmail = document.querySelector('#email').value;
        const sigupPassword = document.querySelector('#password').value;

        console.log(sigupEmail, sigupPassword);

        auth
        .createUserWithEmailAndPassword(sigupEmail, sigupPassword)
        .then((userCredential) => {
            sigupForm.reset();

            if (userCredential = true)  {
            console.log('te conectaste guachita')

            }else {
                console.log('no estas registrado')
            }
        });
            
        });

*/

//export const siginForm = document.querySelector('#form-login');
// INICIAR SESION CON MAIL
/*export const siginForm = (email, password) => {
    console.log('llamado');
   // siginForm.addEventListener('submit', (e) => {
      //  e.preventDefault();

        const siginEmail = document.querySelector('#email').value;
        const siginPassword = document.querySelector('#password').value;

        
        console.log(siginEmail, siginPassword);

        auth
        .signInWithEmailAndPassword(siginEmail, siginPassword)
        .then((userCredential) => {
            siginForm.reset();

            console.log('te conectaste chama')
        });
  //  });  
*/


export const siginForm = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
};


/*

export const inicioGoogle = document.querySelector('#botongoogle')
inicioGoogle.addEventListener('click', e => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
    .then(result => {
        console.log('inicio con google')
    })
    .catch(err => {
        console.log(err)
    })
});
*/

//const postList = document.querySelector('.posts')

//const postList = document.querySelector('.inicio');
/*
const setupPosts = data => {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const li = `
                <li>
                    <h5>${doc.titulo}</h5>
                    <p>${doc.descripcion}</p>
                </li>
            `;
            html += li;
        });
        postList.innerHTML = html;
    } else {
        postList.innerHTML = '<p>Debes loguearte</p>';
    }
}
*/


  //  auth.onAuthStateChanged(user => {
    //    if(user) {
      //      fs.collection('posts')
        //    .get()
          //  .then((snapshot) => {
            //    console.log(snapshot.docs)
              //  setupPosts(snapshot.docs)
            //})
        //}else {
          //  console.log('auth: no logueado')
       // }
    //})

//}
