// Responsável pegar o dígito 
function getDigit(number) {
    console.log(number)
    document.getElementById('result').innerHTML += number
}

// Responsável por limpar o display
function clearDisplay() {
    document.getElementById('result').innerHTML = "";
}

// Responsável por realizar as operações
function operation() {
    let display = document.getElementById('result').innerHTML;
    if (display) {
        document.getElementById('result').innerHTML = eval(display);
    } else {
        document.getElementById('result').innerHTML = "Informe valores :(";

    }

}