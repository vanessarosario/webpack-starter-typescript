import db from "./firebase/config"


const usuario ={
    nombre: "Ramon",
    activo: false,
    fechanaci: 0,
}
const usuariosRef = db.collection("usuarios");

//db.collection("usuarios")
 //   .add(usuario)
   // .then(docRef => {
     //   console.log (docRef)
    //})
   // .catch (e => console.log ("error", e))
//Destructivo
//usuariosRef
//.doc("cHuJKc9AIt3Tk30Br6hN")
//.set ({
  //  activo:true,
    //edad:18,
    //casado:true,
//});


