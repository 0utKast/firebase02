(function() {

//Inicializar Firebase
  const config = {
	  apiKey: "AIzaSyAkFY4FYBebWtMhLNU_eTk3YyBeybH4SHI",
    authDomain: "realtime01-22595.firebaseapp.com",
    databaseURL: "https://realtime01-22595.firebaseio.com",
    storageBucket: "realtime01-22595.appspot.com",
  };
  firebase.initializeApp(config);

  //Obtener elementos
  const preObject = document.getElementById('objeto');

  //Crear Referencias
  const dbRefObject = firebase.database().ref().child('objeto');

  // Sincronizar cambios objeto
  dbRefObject.on('value', snap => console.log(snap.val()));


} ());













