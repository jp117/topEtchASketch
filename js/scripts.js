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
      let opacity = parseFloat(event.target.style.backgroundColor.split(',')[3]);
      if (opacity <= .9) {
        opacity += .1;
      } else if (!opacity && !event.target.style.backgroundColor){
        opacity = .1;
      }
      event.target.style.backgroundColor = `rgba(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${opacity})`;
    })
  } 
}

function getRandomColor(){
  return Math.floor(Math.random() * 256);
}


