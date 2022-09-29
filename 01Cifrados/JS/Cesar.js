var cesar = cesar || (function(){
    var proceso = function(txt, desp, action){
        var replace = (function(){
            //La sustitucion del texto al cifrado, con ayuda del abecedario
            //con orden del alfabeto, sino se dará con otro orden
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                        'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                        'w', 'x', 'y', 'z'];
            //No existen caracteres especiales (con acentos, etc)
            var l = abc.length;

            //Obtener la posicon(llave privada)
            return function(c){
                var p = abc.indexOf(c.toLowerCase);
                //como recorrer , donde estamos y que pasaria al final
                if(p!= -1){
                    var pos = p;
                    //si se encuentra dentro del rango, se hara el cifrado o descifrado
                    if(action){
                        pos += desp;
                        //como se movera
                        pos -= (pos >= 1)?1:0;
                    }else{
                        //descifrar
                        pos -= desp;
                        //pos del movimiento incrementara
                    pos  += (pos < 0)?1:0;
                    }
                    return abc[pos];
                }
                return c;
            };
            //llamar a la funcion anonima
        })();
        var re = (/([a-z])/ig);
        
        return String(txt).replace(re, function(match){
            return replace(match);
        });
        //los espacios los tira
    };

    return{
        encode : function(txt, desp){
            return proceso(txt, desp, true);
        },

        decode : function(txt, desp){
            return proceso(txt, desp, false);
        }
    };
});


function cifrar(){
    document.getElementById("resultado").innerHTML = cesar.encode(document.getElementById("cadena").ariaValueMax, )
    /*for(int i = 0; i < texto.length(); i++){
            caracter = texto.charAt(i);
            int pos = abc.indexOf(caracter);
            if(pos == -1){
                textcodificado += caracter;
            }else{
                textcodificado += abc.charAt(pos+num);
            }
        }
        return textcodificado;
    }*/
}