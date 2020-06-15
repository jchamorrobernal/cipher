// text area 

//let inputCifrado1 = document.getElementById("inputingresa1")
let inputCifrado2 = document.getElementById("inputingresa2");
let inputEncriptado = document.getElementById("decooutput1");
let inputDecifrado = document.getElementById("decooutput2");

// buttons

let btnEcpt = document.getElementById("buttonencriptado");
let btnTipoEcpt = document.getElementById("tipoencriptado");
let btnDcf = document.getElementById("buttondecifrar");
let btnTipoDcf = document.getElementById("tipodecifrado");

// numero cifrado
let cifrado1 = 3;
let cifrado2 = 7;
let cifrado3 = 13;

/* Función Encriptado */

document.getElementById("buttonencriptado").addEventListener("click", function(){
    console.log("Hola soy el click :D")
    let valorEncript = document.getElementById("inputingresa1").value;
    console.log(valorEncript)
    for (let i = 0; i < valorEncript.length; i++) {
        let valorCharCode = valorEncript.charCodeAt(i);
        console.log(valorCharCode);
        let valorCharCodeEncript = (((valorCharCode - 65 + cifrado1) %26) + 65);
        console.log(valorCharCodeEncript)
        let resultadoEncript = String.fromCharCode(valorCharCodeEncript); 
        console.log(resultadoEncript)
        document.getElementById("decooutput1").innerHTML += resultadoEncript;
        
    };
    });

/* Función Decifrado */

document.getElementById("buttondecifrar").addEventListener("click", function(){
    console.log("Hola soy el click elusivo")
    let valorDecifr = document.getElementById("inputingresa2").value;
    console.log(valorDecifr)
    let valorCharCodeDecifr = valorDecifr.charCodeAt(0);
    console.log(valorCharCodeDecifr)
    let valorCharCodeDecifrResul = (((valorCharCodeDecifr - 65 - cifrado1) %26) + 65)
    console.log(valorCharCodeDecifrResul)
    let resultadoDecript = String.fromCharCode(valorCharCodeDecifrResul)
    document.getElementById("decooutput2").innerHTML = resultadoDecript
})

   /* var result='';
  for (var i = 0, len = x.length; i < len; i++) {
    if (x[i] == x[i].toUpperCase()){
      var a = x[i].charCodeAt(0);
      var e = (((a - 65 + key1) % 26) + 97);
      result = result + String.fromCharCode(e).toUpperCase();
    }
    else if (x[i] == x[i].toLowerCase()){
      var a = x[i].charCodeAt(0);
      var e = (((a - 97 + key1) % 26) + 97);
      result = result + String.fromCharCode(e);
    }
    else {
      result = result + x[i];
    }
  
  document.getElementById("decooutput1").value = result
});
*/
/*document.getElementById("decooutput1").innerHTML = valorEncript*/
/*
function encriptadoMain(){
    let cfrad1 = document.getElementById("cifrado1").value
    let inputCifrado1 = document.getElementById("inputingresa1").value
    var result='';
  for (var i = 0, len = x.length; i < len; i++) {
    if (x[i] == x[i].toUpperCase()){
      var a = x[i].charCodeAt(0);
      var e = (((a - 65 + key1) % 26) + 97);
      result = result + String.fromCharCode(e).toUpperCase();
    }
    else if (x[i] == x[i].toLowerCase()){
      var a = x[i].charCodeAt(0);
      var e = (((a - 97 + key1) % 26) + 97);
      result = result + String.fromCharCode(e);
    }
    else {
      result = result + x[i];
    }
  
  document.getElementById("decooutput1").value = result ;
}
    // Flujo logico encriptado
// Lo primero es tomar el valor del texto que ingresa el usuario
// encriptar el valor tomado
    //Obtener el código ascii del valor ingresado. -- .charCodeAt()
        // (fórmula youtube)
    //sumar clave de cifrado (3) al valor ascii
    //Convertir el resultado de la suma (ascii) a letra -- String.fromCharCode()
// Mostrar el valor ya encriptado en caja de texto. 
}

// flujos lógicos papel y lapiz //
// recursos, equivocarse y la guía de coach //

function decifrado() {
    //Flujo lógico decifrado
// Lo primero es tomar el valor del texto encriptado que ingresa el usuario
// Decifrar el valor de los caracteres introducidos.
    //Obtener el código scii del valor ingresado. -- .charCodeAt ()
        // (fórmula de youtube)
    //restar clave de cifrado (3) al valor ascii
    //convertir el resultado de la resta (ascii) a letras --String.fromCharCode()
    // Mostrar el valor ya encriptado en caja de texto.


}
console.log(String.fromCharCode(72, 111, 108, 97))
*/


// CÓDIGO ASCII

/*
    "31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
    "36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
    "41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
    "46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",    
    "51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",    
    "56": "8",     "57": "9",     "58": ":",     "59": ";",     "60": "<",    
    "61": "=",     "62": ">",     "63": "?",     "64": "@",     "65": "A",    
    "66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
    "71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
    "76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
    "81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
    "86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    
    "91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    
    "96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
    "101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
    "106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
    "111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
    "116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
    "121": "y",    "122": "z",    "123": "{",    "124": "|",    "125": "}",    
    "126": "~",    "127": ""
*/