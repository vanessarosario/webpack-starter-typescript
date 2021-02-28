import db from "./firebase/config"
import { retornaDocumentos } from "./helpers/mostrar-documentos";
import { firestore } from "firebase";

const usuariosRef = db.collection("usuarios");

usuariosRef.orderBy("nombre","desc")
.get().then(retornaDocumentos) 
