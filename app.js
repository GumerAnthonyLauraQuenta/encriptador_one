// Variables globales
const replaceText = [
    ["e", "enter"], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["o", "ober"], 
    ["u", "ufat"]];

// Elementos DOM
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".message");
const copia = document.querySelector(".copy");

//Funciones operacionales
function validateText(){
    let res =  new RegExp("^[a-zA-Z]+$").test(textArea.value);
    if (!res) {
        alert("Argumentos no validos");
        return true;
    } else {
        alert("Palabra Aceptada.");
    }
}

function replace_encr(text,tipe){
    for(let i = 0; i < replaceText.length; i++)
        if(text.includes(replaceText[i][0])) text = text.replaceAll(replaceText[i][tipe?0:1], replaceText[i][tipe?1:0]);
    return text;
}

function clear_text_area(){
    textArea.value = "";
}

//Funciones de los botones
function btnEncript(){
    if(!validateText()) {
        mensaje.value = replace_encr(textArea.value.toLowerCase(),true);
        mensaje.style.backgroundImage = "none"
        clear_text_area();
    }
}

function btnDecript(){
    if(!validateText()) {
        mensaje.value = replace_encr(textArea.value.toLowerCase(),false);
        mensaje.style.backgroundImage = "none"
        clear_text_area();
    }
}

function btnCopy(){
    if (mensaje.value) {
        navigator.clipboard.writeText(mensaje.value)
        alert("Texto Copiado")
    }
    else{
        alert("No hay texto para copiar")
    }
    
}