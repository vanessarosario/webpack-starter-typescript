import db from "./firebase/config"


const usuario ={
    nombre: "Ramon",
    activo: false,
    fechanaci: 0,
}

db.collection("usuarios")
    .add(usuario)
    .then(docRef => {
        console.log (docRef)
    })
    .catch (e => console.log ("error", e))