
const cipher = {
  encode:function (textCifrar,desplazar){
    let TextoCifrado1="";
    //console.log(textCifrar);
    for (let i=0; i<textCifrar.length; i++){
      let valorAscii=textCifrar.charCodeAt(i);
      //console.log("valor: " + valorAscii);
      if(valorAscii>=65 && valorAscii<=90){
        let desplazamiento= (((valorAscii-65 + parseInt(desplazar))%26)+65);
        //console.log("desplazamiento " + desplazamiento);
        TextoCifrado1+=String.fromCharCode(desplazamiento);
        //console.log("texto cifrado 1: " + TextoCifrado1);
      };
    };
    return TextoCifrado1; 
  }
};


export default cipher;
