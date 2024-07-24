let matriz = [
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0]
];

let tentativa = Number;
let barcosAfundados = Number;

function iniciaJogo() {
    
    tentativa = 9;
    barcosAfundados = 0;

    var button = document.querySelector('.btn-menu');
    button.textContent = "Iniciar";

    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= 7; j++) {
            let id = `${i}${j}`;
            var button = document.getElementById(id);
            var img = button.querySelector('img');
            if (img) {
                img.src = "./img/marine-waves.png";
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

    var barcos = 1;
    while(barcos < 4){
        
        var coluna = Math.floor(Math.random() * 5);
        var linha = Math.floor(Math.random() * 7);

        if (Number(matriz[linha][coluna]) == 0 && Number(matriz[linha][coluna+1]) == 0 && Number(matriz[linha][coluna+2]) == 0){
            for (i=0; i<3; i++){
                matriz[linha][coluna+i] = barcos;
            }
            barcos++;
        }  
    }
}

function mudaImagemEsq(idEsquerda, barco){
    var buttonEsq = document.getElementById(idEsquerda);
    var img = buttonEsq.querySelector('img');
    var contador = 1;
    img.src = "./img/navio-esquerda" + barco + ".png";
    contador++;
}

function mudaImagemMei(idMeio, barco){
    var buttonMei = document.getElementById(idMeio);
    var img = buttonMei.querySelector('img');
    img.src = "./img/navio-meio"+ barco + ".png";
}

function mudaImagemDir(idDireita, barco){
    var buttonDir = document.getElementById(idDireita);
    var img = buttonDir.querySelector("img");
    img.src = "./img/navio-direita" + barco + ".png";
}

function tentantivaTiro(id) {
    document.getElementById(id).disabled = true;
    document.getElementById(id).style.transform = "none";
    
    let linha = parseInt(id.charAt(0)) - 1;
    let coluna = parseInt(id.charAt(1)) - 1;
    var button = document.getElementById(id);
    var img = button.querySelector("img");
    
    if (barcosAfundados == 3){
        button = document.querySelector('.btn-menu');
        button.textContent = "Você venceu!";
    }

    else if(tentativa > 0){

        if (matriz[linha][coluna] == 0) {
            img.src = "./img/marine-miss.png";
            tentativa--;
         }

        if (matriz[linha][coluna] == 1){
            matriz[linha][coluna] = "a";
            if (matriz[linha][coluna] == "a" && matriz[linha][coluna+1] == "a" && matriz[linha][coluna+2] == "a"){
                let idb = parseInt(id)+1;
                let idc = parseInt(id)+2;
                console.log(id + " + " + idb + " + " + idc)
                mudaImagemEsq(id, 1);
                mudaImagemMei(idb, 1);
                mudaImagemDir(idc, 1);
                barcosAfundados++;
            }
            else if (matriz[linha][coluna+1] == "a" && matriz[linha][coluna-1] == "a"){
                let ida = parseInt(id)-1;
                let idc = parseInt(id)+1;
                console.log( ida + " + " + id + " + " + idc)
                mudaImagemEsq(ida, 1);
                mudaImagemMei(id, 1);
                mudaImagemDir(idc, 1);
                barcosAfundados++;
            }
            else if (matriz[linha][coluna-1] == "a" && matriz[linha][coluna-2] == "a"){
                let idb = parseInt(id)-1;
                let ida = parseInt(id)-2;
                console.log( ida + " + " + idb + " + " + id)
                mudaImagemEsq(ida, 1);
                mudaImagemMei(idb, 1);
                mudaImagemDir(id, 1);
                barcosAfundados++;
            }
            else {
                img.src = "./img/marine-hit.png";            
            }
        }

        if (matriz[linha][coluna] == 2){
            matriz[linha][coluna] = "b";    
            if (matriz[linha][coluna] == "b" && matriz[linha][coluna+1] == "b" && matriz[linha][coluna+2] == "b"){
                let idb = parseInt(id)+1;
                let idc = parseInt(id)+2;
                console.log(id + " + " + idb + " + " + idc)
                mudaImagemEsq(id, 2);
                mudaImagemMei(idb, 2);
                mudaImagemDir(idc, 2);
                barcosAfundados++;
            }
            else if (matriz[linha][coluna+1] == "b" && matriz[linha][coluna-1] == "b"){
                let ida = parseInt(id)-1;
                let idc = parseInt(id)+1;
                console.log( ida + " + " + id + " + " + idc)
                mudaImagemEsq(ida, 2);
                mudaImagemMei(id, 2);
                mudaImagemDir(idc, 2);
                barcosAfundados++;
            }
            else if (matriz[linha][coluna-1] == "b" && matriz[linha][coluna-2] == "b"){
                let idb = parseInt(id)-1;
                let ida = parseInt(id)-2;
                console.log( ida + " + " + idb + " + " + id)
                mudaImagemEsq(ida, 2);
                mudaImagemMei(idb, 2);
                mudaImagemDir(id, 2);
                barcosAfundados++;
            }
            else {
                img.src = "./img/marine-hit.png";            
            }
        }

        if (matriz[linha][coluna] == 3){
            matriz[linha][coluna] = "c";
            if (matriz[linha][coluna] == "c" && matriz[linha][coluna+1] == "c" && matriz[linha][coluna+2] == "c"){
                let idb = parseInt(id)+1;
                let idc = parseInt(id)+2;
                console.log(id + " + " + idb + " + " + idc)
                mudaImagemEsq(id, 3);
                mudaImagemMei(idb, 3);
                mudaImagemDir(idc, 3);
                barcosAfundados++;
            }
            else if (matriz[linha][coluna+1] == "c" && matriz[linha][coluna-1] == "c"){
                let ida = parseInt(id)-1;
                let idc = parseInt(id)+1;
                console.log( ida + " + " + id + " + " + idc)
                mudaImagemEsq(ida, 3);
                mudaImagemMei(id, 3);
                mudaImagemDir(idc), 3;
                barcosAfundados++;
            }
            else if (matriz[linha][coluna-1] == "c" && matriz[linha][coluna-2] == "c"){
                let idb = parseInt(id)-1;
                let ida = parseInt(id)-2;
                console.log( ida + " + " + idb + " + " + id)
                mudaImagemEsq(ida, 3);
                mudaImagemMei(idb, 3);
                mudaImagemDir(id, 3);
                barcosAfundados++;
            }
            else {
                img.src = "./img/marine-hit.png";            
            }
    
        }

    // function alerta(){
    //     for(i=0; i<7; i++){
    //         for(j=0; j<7; j++){
    //             console.log(matriz[i][j]);
    //         }
    //     }   
    // }
    }

    else {
        iniciaJogo();
    }
}






    
