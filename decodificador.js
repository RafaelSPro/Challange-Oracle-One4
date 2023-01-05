var texto = document.querySelector("#texto");

var saida = document.querySelector("#saida");

function criptografar() {
    
    var mensagem = texto.value;

    var mostrarMensagem = mensagem.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g , "ober").replace(/u/g, "ufat");

    document.getElementById("saida").innerHTML = '<textarea readonly id="saida-texto">' + mostrarMensagem + '</textarea>' + '<button onclick="copiar()" class="copy" id="copiar">Copiar</button>';
}

function descriptografar() {

    var mensagem = texto.value;

    var mostrarMensagem = mensagem.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("saida").innerHTML = '<textarea readonly id="saida-texto">' + mostrarMensagem + '</textarea>' + '<button onclick="copiar()" class="copy" id="copiar">Copiar</buttom>';
}


function copiar() {
    var textCop = document.getElementById("saida-texto");

	textCop.select();
	Document.execCommand("copy");
	alert("Texto Copiado");	
}