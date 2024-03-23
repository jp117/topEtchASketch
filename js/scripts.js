let board = document.getElementById("board");
let boardButton = document.getElementById("boardButton");
let boardSize = document.getElementById("boardSize");

function addBoardDiv(){
  const newDiv = document.createElement("div");
  newDiv.className = "boardSquare"
  console.log(newDiv)
}

function initialBoard(x) {
  for (let i = 0; i<x; i++) {
    let boardRow = document.createElement("div");
    boardRow.className = "boardRow"
    board.appendChild(boardRow);
    for (let y = 0; y<x; y++){
      let boardSquare = document.createElement("div");
      boardSquare.className = "boardSquare";
      boardRow.appendChild(boardSquare);
    }
  }
}

initialBoard(16);
draw();

boardButton.onclick = (event) => {
  board.innerHTML = '';
  if (boardSize.value >100){ boardSize.value = 100};
  initialBoard(boardSize.value);
  draw();
}

function draw() {
  const hoverBoard = document.getElementsByClassName("boardSquare");
  for (let hoverArray = 0; hoverArray < hoverBoard.length; hoverArray++){
    hoverBoard[hoverArray].addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = getRandomColor();
    })
  } 
}

function getRandomColor(){
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return `rgb(${x}, ${y}, ${z})`;
}


