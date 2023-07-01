function solve(row, col) {
    let num = 1;
    let finalArray = [];
    for (let i = 0; i < row; i++) {
        let currArray = [];
        currArray.length = col;
        finalArray.push(currArray);
    }
    let startRowIndex = 0;
    let startColIndex = 0;

    while(startRowIndex < row && startColIndex < col) {
        for(let i = startColIndex; i < col; ++i) {
            finalArray[startRowIndex][i] = num++;
        }
        startRowIndex++;
        for(let i = startRowIndex; i < row; i++) {
            finalArray[i][col - 1] = num++;
        }
        col--;
     if(startRowIndex < row) {
        for(let i = col - 1; i >= startColIndex; --i) {
            finalArray[row - 1][i] = num++; 
        }
        row--;
     }
     if(startColIndex < col) {
        for( let i = row - 1; i >= startRowIndex; --i) {
            finalArray[i][startColIndex] = num++;
        }
        startColIndex++;
     }
    }
    finalArray.forEach((row) => console.log(row.join(" ")));
}
solve(3, 3);
solve(5, 5);

//
console.log("--------");
//
function foo(w, h) {
    let matrix = new Array(h).fill(new Array(w).fill([]));
    matrix = matrix.map(x => x.map(y => ""));
    let [startRow, endRow, startClmn, endClmn, counter] = [0, h - 1, 0, w - 1, 0];

    while (startClmn <= endClmn && startRow <= endRow) {
        for (let i = startClmn; i <= endClmn; i++) {
            matrix[startRow][i] = ++counter;
        }
        startRow++;
        for (let i = startRow; i <= endClmn; i++) {
            matrix[i][endClmn] = ++counter;
        }
        endClmn--;
        for (let i = endClmn; i >= startClmn; i--) {
            matrix[endRow][i] = ++counter;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startClmn] = ++counter;
        }
        startClmn++;
    }

    return matrix.map(x => x.join(" ")).join("\n");
}
console.log(foo(3, 3));
console.log(foo(5, 5));
