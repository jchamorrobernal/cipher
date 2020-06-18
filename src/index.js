/* JS del DOM*/

//Botones

let btnEncript = document.getElementById("buttonencriptado")
let btnDcf = document.getElementById("buttondecifrar")

//Text Area


//Valores Text Area



//Cifrado


//Funcionalidad

btnEncript.onclick = function encriptar() {
    window.cipher.encode();
    
}

btnDcf.onclick = function decifrar() {
    window.cipher.decode();
    
}