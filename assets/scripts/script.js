var sinalRed = document.getElementById("sinal_red");
var sinalYellow = document.getElementById("sinal_yellow");
var sinalGreen = document.getElementById("sinal_green");

var classListRed = sinalRed.classList;
var classListYellow = sinalYellow.classList;
var classListGreen = sinalGreen.classList;

function ativarRed() {
    classListRed.add("sinal_red_box");
}

function mudarRed() {
    classListRed.add("sinal_red_box");
    classListYellow.remove("sinal_yellow_box");
}

function mudarYellow() {
    classListYellow.add("sinal_yellow_box");
    classListGreen.remove("sinal_green_box");
}

function mudarGreen() {
    classListGreen.add("sinal_green_box");
    classListRed.remove("sinal_red_box");
}

function verificarSinaisAtivos() {
	if(classListRed.contains("sinal_red_box") === false
  	&& classListYellow.contains("sinal_yellow_box") === false
    && classListGreen.contains("sinal_green_box") === false) {
    return false;
  } else { return true; }
}

function mudarSinais() {
    if(verificarSinaisAtivos() === false) {
        ativarRed();
    } else if(classListRed.contains("sinal_red_box") === true) {
        mudarGreen();
    } else if(classListGreen.contains("sinal_green_box") === true) {
        mudarYellow();
    } else if(classListYellow.contains("sinal_yellow_box") === true) {
        mudarRed();
    } else {
        console.log("Erro na tentativa de mudar sinais!");
    }
}

window.setInterval(mudarSinais, 2000);