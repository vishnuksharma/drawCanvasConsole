const cols = 3;
const rows = 3;

const createMatrix =  () => {
  const matrix = [];
 for(let i = 0; i< rows; i++) {
   const row = [];
  for(let j = 0; j< rows; j++) {
    const mNum = (i*cols) + j+1;
    row.push(mNum);
  }
  matrix.push(row);
 }
 return matrix;
}

const rotateMatrix = (m) => {
  
  const newMatrix = [];
  for(let i = 0; i< 3; i++) {
    const rowMatrix = [];
    for (let j = 0; j< 3; j++) {
      if (j+1 == 3){
        rowMatrix.push(m[i][0]);
      } else {
        rowMatrix.push(m[i][j+1])
      }
    }
    newMatrix.push(rowMatrix);
  }
  console.log(newMatrix);
  
  return newMatrix;
}

const rotateMatrixClockWise = (m) => {
  const mLen = m.length;
  const cur = 0;
  const prev = 0;

  for (let i = 0; i < mLen; i++) {
    const cur = m[0][i];
    m[i] = m[0][i+1];
    m[0][i+1] = cur;
  }

  console.log(m);

  return m;
}
// const flipMatrix = matrix => (
//   matrix[0].map((column, index) => (
//     matrix.map(row => row[index])
//   ))
// );
const matrix = createMatrix()
console.log(matrix);

rotateMatrixClockWise(matrix);

// rotateMatrix(matrix);