
let outputEncriptado = document.getElementById("decooutput1");
let outputDecifrado = document.getElementById("decooutput2"); 
let cifrado1 = 3;
let inputCifrado1 = document.getElementById("inputingresa1");
let inputCifrado2 = document.getElementById("inputingresa2");

window.cipher = {
    encode: () => { 
        let valorEncript = inputCifrado1.value
        for (let i = 0; 
            i < valorEncript.length; 
            i++) 
            {
            
            if (valorEncript[i] === valorEncript[i].toUpperCase()){
                let valorCharCode = valorEncript.charCodeAt(i);
                let valorCharCodeEncript = (((valorCharCode - 65 + cifrado1) %26) + 65);
                let resultadoEncript = String.fromCharCode(valorCharCodeEncript); 
                outputEncriptado.innerHTML += resultadoEncript;
            }
    
            else if(valorEncript[i] === valorEncript[i].toLowerCase()) {
                let valorCharCode = valorEncript.charCodeAt(i);
                let valorCharCodeEncript = (((valorCharCode - 97 + cifrado1) %26) + 97);
                let resultadoEncript = String.fromCharCode(valorCharCodeEncript); 
                outputEncriptado.innerHTML += resultadoEncript;
          }
        }
        
      /* Acá va tu código */
      
    },
    
    decode: () => {
        
    let valorDecifr = inputCifrado2.value;
    for (let i = 0; i < valorDecifr.length; i++) {
        if (valorDecifr[i] === valorDecifr[i].toUpperCase()) {
            let valorCharCodeDecifr = valorDecifr.charCodeAt(i);
            let valorCharCodeDecifrResul = (((valorCharCodeDecifr - 65 - cifrado1) %26) + 65);
            let resultadoDecript = String.fromCharCode(valorCharCodeDecifrResul);
           outputDecifrado.innerHTML += resultadoDecript;
        }

        else if(valorDecifr[i] === valorDecifr[i].toLowerCase()) {
            let valorCharCodeDecifr = valorDecifr.charCodeAt(i);
            let valorCharCodeDecifrResul = (((valorCharCodeDecifr - 97 - cifrado1) %26) + 97);
            let resultadoDecript = String.fromCharCode(valorCharCodeDecifrResul);
           outputDecifrado.innerHTML += resultadoDecript;
        }
    }
      /* Acá va tu código */
    }
  };
