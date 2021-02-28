import db from "./firebase/config"
import { retornaDocumentos } from "./helpers/mostrar-documentos";

const usuariosRef = db.collection("usuarios");

usuariosRef.limit(5)
.get().then(retornaDocumentos) 

const btn = document.createElement("button")
btn.innerText = "Next page";
document.body.append ( btnNext) 

btnNet.addEventListener("clic", () => {

}

