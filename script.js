let matriz = [
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0]
];

let tentativa;

function iniciaJogo() {
    
    tentativa = 3;

    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= 7; j++) {
            let id = `${i}${j}`;
            var button = document.getElementById(id);
            var img = button.querySelector('img');
            if (img) {
                img.src = "/img/marine-waves.png";
            }
            document.getElementById(id).disabled = false;
            document.getElementById(id).style.transform = "translateY(1px)";
        }
    }

    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 7; j++) {
            if (matriz [i][j] != 0){
                matriz[i][j] = 0;
            }
        }
    }
    
    var barcos = 0;
    while(barcos < 3){
        var coluna = Math.floor(Math.random() * 5);
        var linha = Math.floor(Math.random() * 7);
        if (Number(matriz[linha][coluna]) == 0 && Number(matriz[linha][coluna+1]) == 0 && Number(matriz[linha][coluna+2]) == 0){
            for (i=0; i<3; i++){
                matriz[linha][coluna+i] = 1;
            }
            barcos++;
        }
    }
}

function alerta(){
    for(i=0; i<7; i++){
        for(j=0; j<7; j++){
            console.log(matriz[i][j]);
        }
    }
    
}

function mudaImagemEsq(idEsquerda){
    var buttonEsq = document.getElementById(idEsquerda);
    var img = buttonEsq.querySelector('img');
    img.src = "/img/navio-esquerda.png";
}

function mudaImagemMei(idMeio){
    var buttonMei = document.getElementById(idMeio);
    var img = buttonMei.querySelector('img');
    img.src = "/img/navio-meio.png";
}

function mudaImagemDir(idDireita){
    var buttonDir = document.getElementById(idDireita);
    var img = buttonDir.querySelector('img');
    img.src = "/img/navio-direita.png";
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
            tentativa--;
        }

        if (matriz[linha][coluna] == 1){
            matriz[linha][coluna] = 2;
            if (matriz[linha][coluna] == 2 && matriz[linha][coluna+1] == 2 && matriz[linha][coluna+2] == 2){
                let idb = parseInt(id)+1;
                let idc = parseInt(id)+2;
                console.log(id + " + " + idb + " + " + idc)
                mudaImagemEsq(id);
                mudaImagemMei(idb);
                mudaImagemDir(idc);
            }
            else if (matriz[linha][coluna+1] == 2 && matriz[linha][coluna-1] == 2){
                let ida = parseInt(id)-1;
                let idc = parseInt(id)+1;
                console.log( ida + " + " + id + " + " + idc)
                mudaImagemEsq(ida);
                mudaImagemMei(id);
                mudaImagemDir(idc);
            }
            else if (matriz[linha][coluna-1] == 2 && matriz[linha][coluna-2] == 2){
                let idb = parseInt(id)-1;
                let ida = parseInt(id)-2;
                console.log( ida + " + " + idb + " + " + id)
                mudaImagemEsq(ida);
                mudaImagemMei(idb);
                mudaImagemDir(id);
            }
            else {
                img.src = "/img/marine-hit.png";            
            }
        }

    }




    
