
const cipher = {
  encode:function (textCifrar,desplazar1){
    if(textCifrar===null || textCifrar===0 || textCifrar==='' || desplazar1===null || desplazar1===0 || desplazar1===''){
      throw new TypeError("Ingrese mensaje y numero de desplazamiento");
    }

    let TextoCifrado="";
    for (let i=0; i<textCifrar.length; i++){
      let valorAscii=textCifrar.charCodeAt(i);
      if(valorAscii>=65 && valorAscii<=90){
        let desplazarMayus= (((valorAscii-65+parseInt(desplazar1))%26)+65);
        TextoCifrado+=String.fromCharCode(desplazarMayus);
      } 
      else if (valorAscii>=97 && valorAscii<=122){
        let desplazarMinus= (((valorAscii-97+parseInt(desplazar1))%26)+97);
        TextoCifrado+=String.fromCharCode(desplazarMinus);
      } 
      else{
        TextoCifrado+=textCifrar[i];
      }
    }
    return TextoCifrado; 
  },

  decode:function(textDescifrar,desplazar2){
    if(textDescifrar===null || textDescifrar===0 || textDescifrar==='' || desplazar2===null || desplazar2===0 || desplazar2===''){
      throw new TypeError();
    }
    let TextoDescifrado="";
    for(let i=0; i<textDescifrar.length; i++){
      let codigoAscii=textDescifrar.charCodeAt(i);
      if(codigoAscii>=65 && codigoAscii<=90){
        let desplazarClave1=(((codigoAscii-90-parseInt(desplazar2))%26)+90);
        TextoDescifrado +=String.fromCharCode(desplazarClave1);
      }
      else if(codigoAscii>=97 && codigoAscii<=122){
        let desplazarClave2=(((codigoAscii-122-parseInt(desplazar2))%26)+122);
        TextoDescifrado+=String.fromCharCode(desplazarClave2);
      }
      else{
        TextoDescifrado+=textDescifrar[i];
      }
    }
    return TextoDescifrado;
  }
};

export default cipher;