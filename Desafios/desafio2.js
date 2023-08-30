function multiplicarMatrizes(matrizA, matrizB) {
    const linA = matrizA.length;
    const colA = matrizA[0].length;
    const linB = matrizB.length;
    const colB = matrizB[0].length;
  
    if(colA !== linB) {
      return "Não é possível calcular";
    }
  
    const matrizC = [];
  
    for(let i = 0; i < linA; i++) {
        matrizC[i] = [];
      for(let j = 0; j < colB; j++) {
        matrizC[i][j] = 0;
        for(let k = 0; k < colA; k++) {
            matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
        }
      }
    }
  
    return matrizC;
  }
  
  // Exemplo:
  const matrizA = [[1, 3], [2, 5]];
  const matrizB = [[2, 2], [0, 1]];
  
  const matrizC = multiplicarMatrizes(matrizA, matrizB);
  
  console.table(matrizC);