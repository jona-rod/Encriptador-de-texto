let txtEntrada = document.getElementById("txtEntrada");
let txtSalida = document.getElementById("txtSalida");
let btnEncriptar = document.getElementById("btnEncriptar");
let btnDesencriptar = document.getElementById("btnDesencriptar");
let btnCopiar = document.getElementById("btnCopiar");


function encriptar(){
    if (txtEntrada.value != ""){
        encriptaTexto();
        procesaElementos();
        txtSalida.style.fontSize = "32px";
    }else{
        textoVacio();
    }
}

function encriptaTexto(){
    var textoCifrado = txtEntrada.value.toLowerCase();

    textoCifrado = textoCifrado.replace(/e/igm,"enter");
    textoCifrado = textoCifrado.replace(/o/igm,"ober");    
    textoCifrado = textoCifrado.replace(/i/igm,"imes");
    textoCifrado = textoCifrado.replace(/a/igm,"ai");
    textoCifrado = textoCifrado.replace(/u/igm,"ufat");
    txtSalida.innerHTML=textoCifrado;
}
function procesaElementos(){
    btnCopiar.classList.remove("oculta");
    document.getElementById("contenedorSalida").classList.add('ordena');
    document.getElementById("imgPlantilla").classList.add('oculta');
    document.getElementById("msjPlantilla").classList.add('oculta');  
    return
}

function desencriptar(){
    if (txtEntrada.value != ""){
        desencriptaTexto();
        procesaElementos();
        txtSalida.style.fontSize = "32px";
    }else{
        textoVacio();
    }
}

function desencriptaTexto(){
    var textoCifrado = txtEntrada.value.toLowerCase();
    textoCifrado = textoCifrado.replace(/enter/igm,"e");
    textoCifrado = textoCifrado.replace(/ober/igm,"o");
    textoCifrado = textoCifrado.replace(/imes/igm,"i");                
    textoCifrado = textoCifrado.replace(/ai/igm,"a");
    textoCifrado = textoCifrado.replace(/ufat/igm,"u");
    txtSalida.innerHTML=textoCifrado;
}

function textoVacio(){
    btnCopiar.classList.add('oculta');
    document.getElementById("contenedorSalida").classList.remove('ordena');       
    document.getElementById("imgPlantilla").classList.remove('oculta');
    document.getElementById("msjPlantilla").classList.remove('oculta');  
    txtSalida.style.fontSize = "20px";
    txtSalida.innerHTML="- Ingresa el texto que desees <br>encriptar o desencriptar -";
}

function copiar(){
    navigator.clipboard.writeText(txtSalida.textContent);
    alert("copiado al portapeles");
}


btnEncriptar.addEventListener("click",encriptar);
btnDesencriptar.addEventListener("click",desencriptar);
btnCopiar.addEventListener("click",copiar);