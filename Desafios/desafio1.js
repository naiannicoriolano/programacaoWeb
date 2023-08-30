let matrizA =([1,2], [3,4], [5,6]);

const col = matrizA.length; 
let lin = matrizA.length; 
let matrizTransposta = []; 

    for (let i = 0; i < lin; i++){
        matrizTransposta[i] = []; 
    }
    
    for (let j = 0; j < col; j++){
        for (let i = 0; i < lin; i++){
            matrizTransposta[i][j] = matrizA[j][i];
        }
    }
    
    console.table(matrizA);
    console.table(matrizTransposta);