var matriz = [[0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0]];

function tiro(id){
    let linha = parseInt(id.charAt(0))-1;
    let coluna = parseInt(id.charAt(1))-1;
    if(matriz[linha][coluna] != 1){
        document.getElementById(id).disabled = true;
        document.getElementById(id).style.backgroundColor = "#d1d1d1";
        document.getElementById(id).style.transform = "none";

    }

        matriz[linha][coluna] = 1;
        //alert(matriz);
}

