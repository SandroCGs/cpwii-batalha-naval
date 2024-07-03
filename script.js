var matriz = [[1, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 1]];

function tiro(id){
    document.getElementById(id).disabled = true;
    document.getElementById(id).style.transform = "none";
    let linha = parseInt(id.charAt(0))-1;
    let coluna = parseInt(id.charAt(1))-1;
    if(matriz[linha][coluna] != 1){
        
        document.getElementById(id).style.backgroundColor = "#d1d1d1";
        

    }

        matriz[linha][coluna] = 1;
        //alert(matriz);
}

