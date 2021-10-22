import cipher from './cipher.js';

document.getElementById('encode').addEventListener('click', encode);
function encode() {
    let string1=document.getElementById("text1").value;
    let offset1=document.getElementById("displacement1").value;
    let TextoCifrado2=cipher.encode(string1,offset1);
    document.getElementById("text1").value= TextoCifrado2; 
  };

  document.getElementById('decode').addEventListener('click', decode);
  function decode(){
    let string2=document.getElementById("text2").value;
    let offset2=document.getElementById("displacement2").value;
    let textoDescifrado2=cipher.decode(string2,offset2);
    document.getElementById('text2').value = textoDescifrado2;
  };