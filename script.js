const NUM_ROWS = 20;
const NUM_COLS = 20;
const MAX_NUM_TREASURES = 40;
const WIN_GAME = 20;
<<<<<<< HEAD
=======
const TREASURE = 'treasure';
const NOTREASURE = 'noTreasure';
const NOTCLICKED = 'notClicked';
>>>>>>> origin

var table = document.getElementById('gameBoard');
var numTreasures = 0;
var numFoundTreasures = 0;
var numMoves = 0;

class Cell {
    constructor(row, col, isTreasure) {
        this.row = row;
        this.col = col;
        this.isTreasure = isTreasure;
    }

    getIsTreasure() {
        return this.isTreasure;
    }
}

function makeGameBoardArray() {
    var arr = new Array(NUM_COLS);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(NUM_ROWS);
    }
    return arr;
}

<<<<<<< HEAD
=======
function colorCell(attrVal, cell) {
    var attr = document.createAttribute('class');
    attr.value = attrVal;
    cell.setAttributeNode(attr);
}

>>>>>>> origin
function setupGameBoard() {
    var gameBoardArr = makeGameBoardArray();
    drawGameBoard(gameBoardArr); 

    let resetBtn = document.getElementById("reset");
    resetBtn.onclick = function () {
            resetBtnHandler();
        }

    let showSolBtn = document.getElementById("showSol");
    showSolBtn.onclick = function() {
            showSolHandler(gameBoardArr);
        }

    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i]
        
        for (let j = 0; j < row.cells.length; j++) {
<<<<<<< HEAD
          let cell = row.cells[j]
            
          cell.addEventListener("click", function () {
=======
            let cell = row.cells[j]

            colorCell(NOTCLICKED, cell);
            
            cell.addEventListener("click", function () {
>>>>>>> origin
                cellClickHandler(i, j, gameBoardArr, cell)
            });
        }
    }

}

//Returns true if random number is less than 0.5
//Else returns false
function getRandomBoolean() {
    return Math.random() < 0.5;
}

function setTreasure() {
    isTreasure = getRandomBoolean();
    if (isTreasure && numTreasures < MAX_NUM_TREASURES) {
        numTreasures++;
    } else if (numTreasures >= MAX_NUM_TREASURES) {
        isTreasure = false;
    }

    return isTreasure;
}

function checkWinStatus() {
    if(numFoundTreasures === WIN_GAME) {
        alert('CONGRATULATIONS! ' + numMoves.toString() + 'moves.');

        if(localStorage.length === 0) {
            localStorage.setItem('highScore', numMoves);
        } else if(parseInt(localStorage.getItem('highScore')) > numMoves) {
            localStorage.removeItem('highScore');
            localStorage.setItem('highScore', numMoves);
        }

        var hiScore = document.getElementById('hiScore');
        var highScore = localStorage.getItem('highScore');
        hiScore.innerHTML = "";
        hiScore.append(highScore);
    
        // console.log(localStorage.getItem('highScore'));
    }

}

function cellClickHandler(row, col, gameBoardArr, cell) {

    if(typeof gameBoardArr[row][col] != 'undefined') {
        return;
    }

    numMoves++;
    var hasTreasure = setTreasure();
    var newCell = new Cell(row, col, hasTreasure);
    gameBoardArr[row][col] = newCell; 
<<<<<<< HEAD

=======
    
>>>>>>> origin
    showCell(hasTreasure, cell);
    
    checkWinStatus();
}

function drawGameBoard() {
    for(var r = 0; r < NUM_ROWS; r++) {
        var tr = document.createElement('TR');
        for (let c = 0; c < NUM_COLS; c++) {
            let td = document.createElement('TD');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    table.appendChild(tr);
}

function clearGameBoard(gameBoardArr) {
    numTreasures = 0;
    numFoundTreasures = 0;
    numMoves = 0;

    table.innerHTML = "";

    gameBoardArr = [];
}

function resetBtnHandler() {
    clearGameBoard();
    setupGameBoard();
}

function showSolHandler(gameBoardArr) {
    showAllCells(gameBoardArr);
}

function showCell(hasTreasure, cell) {
    var attr = document.createAttribute('class');
    if (hasTreasure) {
<<<<<<< HEAD
        attr.value = 'treasure';
        cell.setAttributeNode(attr);
        numFoundTreasures++;
       
    } else if (!hasTreasure) {
        attr.value = 'noTreasure';
        cell.setAttributeNode(attr);   
=======
        colorCell(TREASURE, cell);
        numFoundTreasures++;
       
    } else if (!hasTreasure) {
        colorCell(NOTREASURE, cell);
>>>>>>> origin
    }
}

function showAllCells(gameBoardArr) {
    for(let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        for(let j = 0; j < row.cells.length; j++) {
            let cell = row.cells[j];
            
            if(typeof gameBoardArr[i][j] === 'undefined') {
                var hasTreasure = setTreasure();
                var newCell = new Cell(i, j, hasTreasure);

                gameBoardArr[i][j] = newCell; 
                showCell(hasTreasure, cell);
            }
        }
    }
}

function setupPage() {
    setupGameBoard();

    var howTo = document.getElementById('howTo');
    var p = document.createElement('P');
    var br = document.createElement('BR');

    howTo.appendChild(p);
    p.append("Ahoy mate! ");
    howTo.append("There are 40 treasures hidden in this map. Click on a tiles to reveal the treasures. ");
    howTo.append("If the tile turns green, you found a treasure! If the tile turns red, try again!");
    howTo.appendChild(br);
    howTo.append("Find 20 treasures to win! ARRRR!");


    var hiScore = document.getElementById('hiScore');
    var highScore = localStorage.getItem('highScore');

    if(localStorage.length === 0) {
        highScore = 'No Previous Game Record';
    }

    hiScore.append("" + highScore);

}

setupPage();