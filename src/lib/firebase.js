/*
export const sigupForm = (sigupEmail, sigupPassword) => {
      console.log('aqui entra')
      firebase.auth().createUserWithEmailAndPassword(sigupEmail, sigupPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]

    }

*/
    // Funcion Registrarse

//export const sigupForm = document.querySelector('#form-registrarse');

export const sigupForm = (callback) => {
    console.log('aqui entra');
      // sigupForm.addEventListener('submit', (e) => {
        //  e.preventDefault();
  
          const sigupEmail = document.querySelector('#email').value;
          const sigupPassword = document.querySelector('#password').value;
  
          console.log(sigupEmail, sigupPassword);
    
          firebase.auth().createUserWithEmailAndPassword(sigupEmail, sigupPassword)
          .then(() => {
              //sigupForm.reset();
              callback ();
              console.log (callback)
          })
          .catch((error) => {
            const codigoerror = error.code;
  
            if (codigoerror === 'auth/email-already-in-use'){
              alert('El Correo electronico ' + sigupEmail + ' ya se encuentra registrado');
              alert('Intente iniciar sesion con un correo registrado');
              console.log('El Correo electronico ' + sigupEmail + ' ya se encuentra registrado');   
            }  else{
              //aqui va todo lo relacionado con error del usuario, por loq ue cambie el ms de te conectaste
              alert('Intente ingresar datos');
            };
            console.log(error);      
              //if (userCredential = true)  {
              //console.log('te conectaste guachita')
  
             // }else {
             //     console.log('no estas registrado')
              //}
          });
              
          //});
  
   }
  

  
  
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
  
  /*
  export const siginForm = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };
  */
  
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
  
  // logear con Google --esto lo llamaremos despues en TemplateLogin
 
//export const logeoGoogle = () => {
 // const provider = new firebase.auth.GoogleAuthProvider();
  /*firebase.auth.signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log ('user',user)
    
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log('error',errorMessage)*/
   
  //    auth.signInWithPopup(provider)
  //    .then(result => {
   //       console.log('inicio con google')
  //    })
    //  .catch(err => {
  //        console.log(err)
    //  })
  
  
//};


//loguerase, esto lo llamaremos depsues en el template logearse
//export const signIn = () => {
export const signIn = (callback) => {
  console.log ('estamos en funcion SingIn');
  
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    console.log(email, password);

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            callback();
        })
        .catch((error) => {
            const errorCode = error.code;

            if (errorCode === 'auth/wrong-password' || 'auth/invalid-email') {
                alert('Revisa tus datos.');
            } else {
                alert('¡Ingrese un correo valido!');
            };
            console.log(error);
        });
   
 
};