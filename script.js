let matriz = [
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0]
];

l

function iniciaJogo() {
    

}

function tentantivaTiro(id) {
    document.getElementById(id).disabled = true;
    document.getElementById(id).style.transform = "none";
    let linha = parseInt(id.charAt(0)) - 1;
    let coluna = parseInt(id.charAt(1)) - 1;
    var button = document.getElementById(id);
    var img = button.querySelector('img');
    if (matriz[linha][coluna] != 1) {
        img.src = "/img/marine-miss.png";
    }
    else {
        img.src = "/img/marine-hit.png";
    }
    matriz[linha][coluna] = 1;
    //alert(matriz);
}

