import cipher from './cipher.js';

document.getElementById("text1").addEventListener("keyup", funcmayus);
function funcmayus(){
  let mayuscula=document.getElementById("text1");
  mayuscula.value=mayuscula.value.toUpperCase();
}
document.getElementById('encode').addEventListener('click', encode);
function encode() {
    let string=document.getElementById("text1").value;
    //console.log(string);
    let offset=document.getElementById("displacement").value;
    let TextoCifrado2=cipher.encode(string,offset);
    //console.log(TextoCifrado2);
    document.getElementById("text1").value= TextoCifrado2; 
    }