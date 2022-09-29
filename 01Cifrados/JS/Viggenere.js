function cifrar() {
    var med = 26;
    
    var clave = document.getElementById("clave").value;
    var size_clave = clave.length;
    var mensaje = document.getElementById("mensaje").value;
    var size_mensaje = mensaje.length;
    
      var alfabeto = new Array();
    for(i = 0; i < med; i++){
      alfabeto[i] = String.fromCharCode(65 + i);
    }
    
    // Se guardan valores de la clave
    var valores_clave = new Array();
    for(i = 0; i < size_clave; i++){
      for(j = 0; j < med; j++){
        if(clave[i] == alfabeto[j]){
            valores_clave[i] = j;
        }
      }
    }
    
    //log del texto
    var mensaje_cifrado = new Array();
    for(i = 0; i < size_mensaje; i++){
      var pos_letra;
      for(j = 0; j < med; j++){
        if(mensaje[i] == alfabeto[j]){
          pos_letra = j;
        }
      }
      mensaje_cifrado[i] = alfabeto[(valores_clave[i%size_clave] + pos_letra) % SIZE_ALF];
    }
    
    div = document.getElementById("resultado1");
    var cadena = "";
    for(i = 0; i < size_mensaje; i++){
      cadena += mensaje_cifrado[i];
    }
    div.textContent = 'Mensaje cifrado: ' + cadena;
  }
  
  function modNeg(n1, n2){
    var mod = n1;
    while(mod < 0){
      mod += n2;
    }
    return mod;
  }
  
  function descifrar() {
    var med = 26;
    
    var clave = document.getElementById("clave2").value;
    var size_clave = clave.length;
    var mensaje = document.getElementById("mensaje_cif").value;
    var size_mensaje = mensaje.length;
    
 
      var alfabeto = new Array();
    for(i = 0; i < med; i++){
      alfabeto[i] = String.fromCharCode(65 + i);
    }
    
    var valores_clave = new Array();
    for(i = 0; i < size_clave; i++){
      for(j = 0; j < med; j++){
        if(clave[i] == alfabeto[j]){
            valores_clave[i] = j;
        }
      }
    }
    
    // Descifrar
    var mensaje_descifrado = new Array();
    for(i = 0; i < size_mensaje; i++){
      var pos_letra;
      for(j = 0; j < med; j++){
        if(mensaje[i] == alfabeto[j]){
          pos_letra = j;
        }
      }
      mensaje_descifrado[i] = alfabeto[modNeg((pos_letra - valores_clave[i%size_clave]), med)];
    }
    
    div = document.getElementById("resultado2");
    var cadena = "";
    for(i = 0; i < size_mensaje; i++){
      cadena += mensaje_descifrado[i];
    }
    div.textContent = 'Mensaje descifrado: ' + cadena;
  }