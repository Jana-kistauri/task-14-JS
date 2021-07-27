
let boardColumns = 300;
let boardRows = 300;
let summ = 0;


function createBoard() {
	let board = document.createElement('div');
	board.id = "board";

	return board;
}

function createCell(width, height) {
	let cell = document.createElement('div');
	cell.className = "cell";
	cell.style.width = width + "px";
	cell.style.height = height + "px";
	cell.innerText = 0;

	return cell;
}

function addCells(w, h) {
	board.style.width = w + "px";
	board.style.height = h + "px";

	cellsNumber = Math.floor(w / 100) * Math.floor(h / 100);

	for(let i = 0; i < cellsNumber; i++) {
		let cell = createCell(100, 100);
		board.appendChild(cell);
	}

	addCounter();
}

function createButton() {
	let button = document.createElement("button");
	button.id = "start";
	button.innerText = "Start";

	return button;
}

function addCounter() {
	let cells = document.querySelectorAll('.cell');

	for(let i = 0; i < cells.length; i++){
		let counter = 1
		
		cells[i].addEventListener("click", function() {
			this.innerText = counter++;
			checkSum();
		})
	}
}


function checkSum() {
	summ ++;
	
	if(summ == 100) {
		board.innerHTML = '';
		addCells(boardColumns, boardRows);
	}
}

let button = createButton();
document.body.appendChild(button);

let board = createBoard();
document.body.appendChild(board);

button.addEventListener('click', function() {
	board.innerHTML = "";
	addCells(boardColumns, boardRows);
});

addCells(boardColumns, boardRows);