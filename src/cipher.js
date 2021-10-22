
const cipher = {
  encode:function (textCifrar,desplazar){
    let TextoCifrado1="";
    for (let i=0; i<textCifrar.length; i++){
      let valorAscii=textCifrar.charCodeAt(i);
      if(valorAscii>=65 && valorAscii<=90){
        let desplazamiento= (((valorAscii-65 + parseInt(desplazar))%26)+65);
        TextoCifrado1+=String.fromCharCode(desplazamiento);
      };
    };
    return TextoCifrado1; 
  },

  decode:function(textDescifrar,desplazar2){
    let TextDescifrado1="";
    for(let i=0; i<textDescifrar.length; i++){
      let codigoAscii=textDescifrar.charCodeAt(i);
      if(codigoAscii>=65 && codigoAscii<=90){
        let desplazarClave=(((codigoAscii-65-parseInt(desplazar2))%26)+65);
        TextDescifrado1 +=String.fromCharCode(desplazarClave);
      };
    }
    return TextDescifrado1;
  }
};

export default cipher;
