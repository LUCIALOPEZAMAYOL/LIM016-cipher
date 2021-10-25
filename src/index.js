import cipher from './cipher.js';
//Función de ocultar y desocultar vistas del inicio
document.getElementById('vistaEncodeDecode').style.display='none';
document.getElementById('inicio').addEventListener('click', function(){
document.getElementById('vistaInicio').style.display='none';
document.getElementById('vistaEncodeDecode').style.display='block'
})

//Función para cifrado
document.getElementById('encode').addEventListener('click', encode);
function encode() {
    let string1=document.getElementById("text1").value;
    let offset1=document.getElementById("displacement1").value;
    let TextoCifrado2=cipher.encode(string1,offset1);
    document.getElementById("text1").value= TextoCifrado2; 
  };
//Función para descifrado
  document.getElementById('decode').addEventListener('click', decode);
  function decode(){
    let string2=document.getElementById("text1").value;
    let offset2=document.getElementById("displacement1").value;
    let textoDescifrado2=cipher.decode(string2,offset2);
    document.getElementById('text1').value = textoDescifrado2;
  };
//Función para instrucciones
  const instruccion=document.getElementById('manual');
  const modalContenedor=document.getElementById('modalContainer');
  const close=document.getElementById('cerrar');
  
  instruccion.addEventListener('click', () => {
    modalContenedor.classList.add('show');  
  });
  close.addEventListener('click', () => {
    modalContenedor.classList.remove('show');
  });

//Función de limpiar
document.getElementById('limpiar').addEventListener('click',function(){
  document.getElementById('text1').value = "";
  document.getElementById('displacement1').value = parseInt;
})
//Función de volver
document.getElementById('return').addEventListener('click', function(){
  document.getElementById('vistaEncodeDecode').style.display='none';
  document.getElementById('text1').value = "";
  document.getElementById('displacement1').value = parseInt;
  document.getElementById('vistaInicio').style.display='block';
})