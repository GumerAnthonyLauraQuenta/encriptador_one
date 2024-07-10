// Variables globales
const replaceText = [
    ["e", "enter"], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["o", "ober"], 
    ["u", "ufat"]];

// Elementos DOM
const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".message");
const copia = document.querySelector(".copy");
const btncopia = document.querySelector(".btn-copy");
const mensaje1 = document.querySelector(".salida_titulo");
const mensaje2 = document.querySelector(".salida_parrafo");



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

function validateText(){
    let res =  new RegExp("^[a-zA-Z]+$").test(textArea.value);
    let res2 =  new RegExp("^[a-zA-Z]+ +$").test(textArea.value);
    console.log( res,res2);
    if (!res && !res2) {
        alert("Argumentos no validos");
        return true;
    } else {
        alert("Palabra Aceptada.");
    }
}

function replace_encr(text,tipe){
    for(let i = 0; i < replaceText.length; i++)
        if(text.includes(replaceText[i][0])) text = text.replaceAll(replaceText[i][tipe?0:1], replaceText[i][tipe?1:0]);
    btncopia.style.display = "block";
    mensaje1.style.display = "none";
    mensaje2.style.display = "none";
    return text;
}

function clear_text_area(){
    textArea.value = "";
}

//Funciones de los botones
function btn_encript(){
    if(!validateText()) {
        mensaje.value = replace_encr(textArea.value.toLowerCase(),true);
        mensaje.style.backgroundImage = "none"
        clear_text_area();
    }
}

function btn_decript(){
    if(!validateText()) {
        mensaje.value = replace_encr(textArea.value.toLowerCase(),false);
        mensaje.style.backgroundImage = "none"
        clear_text_area();
    }
}

function btn_copy(){
    if (mensaje.value) {
        navigator.clipboard.writeText(mensaje.value)
        alert("Texto Copiado")
    }
    else{
        alert("No hay texto para copiar")
    }
    
}