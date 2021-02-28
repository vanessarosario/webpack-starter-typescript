import db from "./firebase/config"
import { retornaDocumentos } from "./helpers/mostrar-documentos";


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

//usuariosRef
//.doc("cHuJKc9AIt3Tk30Br6hN")
//.delete()
//.then(() => console.log ("borrado") )
//.catch (e => console.log ("error", e))

//select * from usuarios:
//usuariosRef
//.onSnapshot( retornaDocumentos)

//usuariosRef.get ().then (retornaDocumentos);    

/*
select * from usuarios 
where activo = true
*/

/*usuariosRef.where("activo", "==", true).get ().then (retornaDocumentos);    

/*
select * from usuarios 
where salario > 1800
*/

/*usuariosRef.where("salario", "==", 1800)
.get ().then (retornaDocumentos);    

/*
select * from usuarios 
where salario > 1800 and salario < 2300 
*/

//usuariosRef.where("salario", "==", 1800)
//.where("salario", "<", 2300)
//.get ().then (retornaDocumentos);  

/*
select * from usuarios 
where salario > 1800 
and salario == true
*/

usuariosRef.where("salario", "==", 1800)
.where("activo","==", true)
.get ().then (retornaDocumentos); 


