/**
 * Utilidad interna que devuelve el primer valor, y en caso de ser nulo, el segundo.
 * @param {*} cadena
 * @param {*} valorSiNulo
 */
function coalesce(cadena, valorSiNulo) {
  return cadena ? cadena : valorSiNulo;
}

export const sigupForm = (callback) => {
  console.log("aqui entra");
      // sigupForm.addEventListener('submit', (e) => {
        //  e.preventDefault();
  
  const sigupEmail = document.querySelector("#email").value;
  const sigupPassword = document.querySelector("#password").value;
  
          console.log(sigupEmail, sigupPassword);
    
  firebase
    .auth()
    .createUserWithEmailAndPassword(sigupEmail, sigupPassword)
          .then(() => {
              //sigupForm.reset();
      callback();
      console.log(callback);
          })
          .catch((error) => {
            const codigoerror = error.code;
  
      if (codigoerror === "auth/email-already-in-use") {
        alert(
          "El Correo electronico " + sigupEmail + " ya se encuentra registrado"
        );
        alert("Intente iniciar sesion con un correo registrado");
        console.log(
          "El Correo electronico " + sigupEmail + " ya se encuentra registrado"
        );
      } else {
              //aqui va todo lo relacionado con error del usuario, por loq ue cambie el ms de te conectaste
        alert("Intente ingresar datos");
      }
            console.log(error);      
              //if (userCredential = true)  {
              //console.log('te conectaste guachita')
  
             // }else {
             //     console.log('no estas registrado')
              //}
          });
};
              
export const inicioGoogle = (callback) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //const token = result.credential.accessToken;
    // The signed-in user info.
    //const user = result.user;
      console.log(result.user);
      callback();
    })
    .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    //const errorMessage = error.message;
    // The email of the user's account used.
    //const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    //const credential = error.credential;
   // if (errorCode === 'auth/wrong-password') {
    //  alert('Contraseña erronea.');
  //}
      //     console.log(error);
       //    console.log('error',errorMessage)
   
     /* auth.signInWithPopup(provider)
      .then(result => {
          console.log('inicio con google')
     })
     .catch(err => {
         console.log(err)
      })
  */
    });
};

//loguerase, esto lo llamaremos depsues en el template logearse
//export const signIn = () => {
export const signIn = (callback) => {
  console.log("estamos en funcion SingIn");
  
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
    console.log(email, password);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
        .then(() => {
            callback();
        })
        .catch((error) => {
            const errorCode = error.code;

      if (errorCode === "auth/wrong-password" || "auth/invalid-email") {
        alert("Revisa tus datos.");
            } else {
        alert("¡Ingrese un correo valido!");
      }
            console.log(error);
        });
};

export const post = (inputPosts) => {
  const db = firebase.firestore();
  const usuario = () => firebase.auth().currentUser;
  const user = usuario();
  // Add a second document with a generated ID.
  db.collection("post")
    .add({
      email: user.email,
      nombre: user.displayName,
      post: inputPosts,
      uid: user.uid,
})
    .then(function (docRef) {
  console.log("Document written with ID: ", docRef.id);
})
    .catch(function (error) {
  console.error("Error adding document: ", error);
});
};

export const leeme = () => {
  console.log("entra aqui");
  const svgComentario =
    '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.04174 0C9.03683 0.00482273 9.027 0.00482273 9.01227 0.00482273C4.04202 0.00482273 0 3.97393 0 8.85454C0 10.8463 0.692496 12.7802 1.95962 14.338L0.648294 17.3281C0.540245 17.574 0.658117 17.8586 0.903683 17.9599C0.992086 17.9984 1.09031 18.0081 1.18363 17.9936L5.99181 17.1641C6.95443 17.5065 7.96616 17.6801 8.98771 17.6753C13.958 17.6753 18 13.7062 18 8.8256C18.0098 3.95946 13.9973 0.00482273 9.04174 0ZM8.99262 16.7156C8.04474 16.7156 7.10668 16.5468 6.21773 16.2188C6.13424 16.1851 6.04583 16.1803 5.95743 16.1947L1.9105 16.8892L2.98117 14.4441C3.05484 14.2753 3.02537 14.0776 2.90259 13.9377C2.32305 13.277 1.86139 12.5246 1.53724 11.7096C1.17381 10.7981 0.987175 9.82873 0.987175 8.84971C0.987175 4.49961 4.59208 0.964546 9.01718 0.964546C13.4325 0.954901 17.0177 4.46103 17.0226 8.79666C17.0226 8.80631 17.0226 8.81595 17.0226 8.8256C17.0226 13.1805 13.4177 16.7156 8.99262 16.7156Z" fill="#2B2B2B"/></svg>';
  const svgLike =
    '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 10.7609C18 10.2905 17.8207 9.85226 17.5117 9.52903C17.862 9.12913 18.0405 8.59302 17.9917 8.03504C17.904 7.04033 17.0452 6.26085 16.0357 6.26085H11.403C11.6325 5.5338 12 4.20104 12 3.13043C12 1.43295 10.6178 0 9.74999 0C8.97149 0 8.41423 0.457827 8.39099 0.476609C8.30173 0.550969 8.24998 0.663665 8.24998 0.782597V3.43641L6.08924 8.31913L5.99998 8.36686V8.21737C5.99998 8.00136 5.83196 7.82605 5.62496 7.82605H1.87499C0.840762 7.82608 0 8.7034 0 9.7826V16.0435C0 17.1227 0.840762 18 1.87499 18H4.12499C4.93573 18 5.62873 17.46 5.88973 16.7063C6.51375 17.0413 7.35374 17.2174 7.875 17.2174H14.7593C15.576 17.2174 16.2908 16.643 16.4587 15.851C16.545 15.4424 16.4948 15.0316 16.3237 14.6747C16.8773 14.3843 17.25 13.7872 17.25 13.1087C17.25 12.8317 17.1893 12.5664 17.0745 12.3269C17.628 12.0357 18 11.4394 18 10.7609ZM16.4182 11.7266C16.2735 11.7446 16.1512 11.8471 16.1048 11.9919C16.059 12.1367 16.0973 12.2955 16.2038 12.4004C16.3943 12.5875 16.5 12.8395 16.5 13.1087C16.5 13.6025 16.1423 14.0173 15.669 14.0744C15.5243 14.0924 15.402 14.1949 15.3555 14.3397C15.3098 14.4845 15.3481 14.6434 15.4545 14.7483C15.7013 14.9909 15.8003 15.3313 15.7261 15.6819C15.6338 16.1186 15.2273 16.4348 14.7593 16.4348H7.875C7.26599 16.4348 6.24449 16.1366 5.8905 15.7664C5.78324 15.6553 5.62124 15.6225 5.48174 15.6819C5.3415 15.7422 5.24999 15.8854 5.24999 16.0435C5.24999 16.6907 4.74525 17.2174 4.12499 17.2174H1.87499C1.25473 17.2174 0.749988 16.6907 0.749988 16.0435V9.7826C0.749988 9.13537 1.25473 8.60868 1.87499 8.60868H5.24999V9C5.24999 9.1354 5.31749 9.26138 5.42848 9.33339C5.53799 9.40225 5.67598 9.40929 5.79298 9.34983L6.54296 8.95851C6.61873 8.91937 6.67948 8.85363 6.71548 8.77303L8.96548 3.68606C8.98798 3.6344 8.99996 3.57805 8.99996 3.52171V0.994672C9.15599 0.904685 9.42676 0.782597 9.74999 0.782597C10.161 0.782597 11.25 1.84851 11.25 3.13043C11.25 4.50783 10.5315 6.49329 10.5248 6.51288C10.4813 6.63262 10.4963 6.76802 10.566 6.87444C10.6365 6.9801 10.752 7.04349 10.875 7.04349H16.0357C16.6612 7.04349 17.1922 7.51071 17.2447 8.10705C17.2845 8.55314 17.079 8.97733 16.7108 9.21446C16.596 9.28801 16.5278 9.42107 16.533 9.56271C16.5382 9.70435 16.6163 9.83113 16.7362 9.8961C17.0535 10.0644 17.25 10.3962 17.25 10.7609C17.25 11.2547 16.8923 11.6695 16.4182 11.7266Z" fill="#2B2B2B"/></svg>';
  const db = firebase.firestore();
  const muestrame = document.getElementById("posts-publicaciones");
  db.collection("post")
    .get()
    .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const publicacion = doc.data();
        const avatar = `<img class="avatar posts-avatar" src="${coalesce(
          publicacion.img,
          "img/google.png"
        )}" width="50" />`;
        const titulo = `<h3>${coalesce(
          publicacion.nombre,
          publicacion.email
        )}</h3>`;
        const contenido = `<p>${publicacion.post}</p>`;
        const piePost = `<div class="pie-publicacion">${svgLike} ${coalesce(
          publicacion.likes,
          0
        )} ${svgComentario} ${
          publicacion.comentarios ? publicacion.comentarios.length : 0
        }</div>`;
        const htmlPublicacion = `<div class="tarjeta publicacion">${avatar}${titulo}${contenido}${piePost}</div>`;
        muestrame.innerHTML += htmlPublicacion;
    });
});
};

//datos para el perfil
export const perfil = (inputPosts) => {
  const db = firebase.firestore();
  const usuario = () => firebase.auth().currentUser;
  const user = usuario();
  // Add a second document with a generated ID.
  db.collection("perfil")
    .add({
      nombre: user.displayName,
      photoURL: user.photoURL,
  //mbti:user.display.mbti,   me reclama que no la puede leer
      email: user.email,
 // ciudad:user.display.City,  me reclama que no la puede leer
      uid: user.uid,
})
    .then(function (docRef) {
  console.log("Document written with ID: ", docRef.id);
})
    .catch(function (error) {
  console.error("Error adding document: ", error);
});
};

export const leemePerfil = () =>{
  console.log ("entra aqui")
 // const db = firebase.firestore();
  //db.collection("perfil").get().then((querySnapshot) => {
 //   querySnapshot.forEach((doc) => {
      const muestramePerfil = document.getElementById('outputPost');
       
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            const displayName = user.displayName;
            const email = user.email;
            const emailVerified = user.emailVerified;
            const photoURL = user.photoURL;
            const isAnonymous = user.isAnonymous;
            const uid = user.uid;
            const providerData = user.providerData;
            // ...
            const infoPerfil = `<h3> ${displayName} </h3>
        <h3> ${email} </h3>
          <p>${uid}</p>
          `;
          muestramePerfil.innerHTML+=infoPerfil;
          return infoPerfil
          } else {
            // User is signed out.
            console.log ("no es usuario")
            // ...
          }
          
        });
             
        
        
   // });
};

