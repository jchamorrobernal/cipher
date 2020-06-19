
// Funcionalidad Cipher

//cajas de texto
let outputEncriptado = document.getElementById("decooutput1");
let outputDecifrado = document.getElementById("decooutput2"); 
let inputCifrado1 = document.getElementById("inputingresa1");
let inputCifrado2 = document.getElementById("inputingresa2");

//Valor de cifrado



/*let select1 = document.getElementById("tipoencriptado").value;
let select2 = document.getElementById("tipodecifrado").value;

let offset1 = select1
let offset2 = select2*/


window.cipher = {
    encode: () => { 
      let valorInputstring = document.getElementById("inputencriptado").value;
      let valorInput1 = valorInputstring
      //Number(valorInputstring);
      let valorEncript = inputCifrado1.value;

        for (let i = 0; i < valorEncript.length; i++) { 
            if (valorEncript[i] === valorEncript[i].toUpperCase()){
              console.log(valorInput1)
                let valorCharCode = valorEncript.charCodeAt(i);
                console.log(valorCharCode)
                console.log(typeof valorCharCode)
                console.log(typeof valorInput1)
                let valorCharCodeEncript = (((valorCharCode - 65 + valorInput1) %26) + 65);
                console.log(valorCharCodeEncript)
                
                let resultadoEncript = String.fromCharCode(valorCharCodeEncript); 
                outputEncriptado.innerHTML += resultadoEncript;
            }
    
            else if(valorEncript[i] === valorEncript[i].toLowerCase()){
              
                let valorCharCode = valorEncript.charCodeAt(i);
                let valorCharCodeEncript = (((valorCharCode - 97 + valorInput1) %26) + 97);
                let resultadoEncript = String.fromCharCode(valorCharCodeEncript); 
                outputEncriptado.innerHTML += resultadoEncript;
          }
        }
        
      /* Acá va tu código */
      
    },
    
    decode: () => {
    let valorInput2 = document.getElementById("inputdecifrado").value;
    let valorDecifr = inputCifrado2.value;
    for (let i = 0; i < valorDecifr.length; i++) {
        if (valorDecifr[i] === valorDecifr[i].toUpperCase()){
            let valorCharCodeDecifr = valorDecifr.charCodeAt(i);
            console.log(valorCharCodeDecifr)
            console.log(typeof valorCharCodeDecifr)
            console.log(typeof valorInput2)
            let valorCharCodeDecifrResul = (((valorCharCodeDecifr - 65 - valorInput2) %26) + 65);
            console.log(valorCharCodeDecifrResul)
            let resultadoDecript = String.fromCharCode(valorCharCodeDecifrResul);
           outputDecifrado.innerHTML += resultadoDecript;
        }

        else if(valorDecifr[i] === valorDecifr[i].toLowerCase()) {
            let valorCharCodeDecifr = valorDecifr.charCodeAt(i);
            let valorCharCodeDecifrResul = (((valorCharCodeDecifr - 97 - valorInput2) %26) + 97);
            let resultadoDecript = String.fromCharCode(valorCharCodeDecifrResul);
           outputDecifrado.innerHTML += resultadoDecript;
        }
    }
      /* Acá va tu código */
    }
  };
