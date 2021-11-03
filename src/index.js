import cipher from './cipher.js';
//Función de ocultar y desocultar vistas del inicio
document.getElementById('vistaEncodeDecode').style.display='none';
document.getElementById('inicio').addEventListener('click', function(){
document.getElementById('vistaInicio').style.display='none';
document.getElementById('vistaEncodeDecode').style.display='block'
})

//Función para limitar numeros en desplazmiento
document.getElementById('displacement1').addEventListener('input', function(){
  if(this.value.length>4){
    this.value=this.value.slice(0,4)
  }
})

//Función para cifrado
document.getElementById('encode').addEventListener('click', encode);
function encode() {
    let string1=document.getElementById("text1").value;
    let offset1=document.getElementById("displacement1").value;
    let TextoCifradoFinal=cipher.encode(string1,offset1);
    document.getElementById("text1").value= TextoCifradoFinal; 
  }
//Función para descifrado
  document.getElementById('decode').addEventListener('click', decode);
  function decode(){
    let string2=document.getElementById("text1").value;
    let offset2=document.getElementById("displacement1").value;
    let textoDescifradoFinal=cipher.decode(string2,offset2);
    document.getElementById('text1').value = textoDescifradoFinal;
  }
//Función para ventana modal (instrucciones)
  document.getElementById('manual').addEventListener('click', function(){
    document.getElementsByClassName('modal')[0].style.display="flex";
  })

  document.getElementById('cerrar').addEventListener('click', function(){
    document.getElementsByClassName('modal')[0].style.display="none";
  })

//Función de limpiar
document.getElementById('limpiar').addEventListener('click',function(){
  document.getElementById('text1').value = "";
  document.getElementById('displacement1').value = Number;
})
//Función de volver
document.getElementById('return').addEventListener('click', function(){
  document.getElementById('vistaEncodeDecode').style.display='none';
  document.getElementById('text1').value = "";
  document.getElementById('displacement1').value = Number;
  document.getElementById('vistaInicio').style.display='block';
})