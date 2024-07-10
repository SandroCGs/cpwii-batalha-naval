let matriz = [
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0]
];

function iniciaJogo() {
    var linha = Math.random()*5;
    var coluna = Math.random()*7;
    if (matriz[linha][coluna] == 0 && matriz[linha+1][coluna+1] == 0 && matriz[linha+2][coluna +2] == 0){
        for (i=0; i<3; i++){
            matriz[linha+i][coluna+i] = 1;
        }
    }
}

function alert(){
    for(i=0; i<7; i++){
        for(j=0; i<7; i++){
            document.alert(matriz[i][j]);
        }
    }
    
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
}

