let board = document.getElementById("board");

function addBoardDiv(){
  const newDiv = document.createElement("div");
  newDiv.className = "boardSquare"
  console.log(newDiv)
}

function initialBoard() {
  for (let i = 0; i<16; i++) {
    console.log("i'm here");
    let boardRow = document.createElement("div");
    boardRow.className = "boardRow"
    board.appendChild(boardRow);
    for (let x = 0; x<16; x++){
      let boardSquare = document.createElement("div");
      boardSquare.className = "boardSquare";
      console.log("i'm in boardSquare");
      boardRow.appendChild(boardSquare);
    }
  }
}

initialBoard();