import cipher from './cipher.js';

document.getElementById("text1").addEventListener("keyup", funcmayus);
function funcmayus(){
  let mayuscula=document.getElementById("text1");
  mayuscula.value=mayuscula.value.toUpperCase();
}
document.getElementById('encode').addEventListener('click', encode);
function encode() {
    let var1=document.getElementById("text1").value;
    let var2=document.getElementById("displacement").value;
    cipher.encode(var1, var2);
    }


