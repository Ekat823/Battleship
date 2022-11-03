const genRandomShips = (state) => {

	const boardSize = state.tableSize;
	const shipsSize = [...state.shipsSize];
	const checkNumber = state.checkNumber;
	let table = [];
	let randomShips = [];
	
	for(let i = 0; i < boardSize; i++) {
		let c = [];
		for(let j = 0; j < boardSize; j++) {
			c.push(i * boardSize + j);
		}
		table.push(c);
	}

	do { 
		randomShips = [];
		for(let i = 0; i < shipsSize.length; i++) {
			const direction = Math.floor(Math.random() * 2);
			let row;
			let col;
			if (direction === 1) {
				row = Math.floor(Math.random() * boardSize);
				col = Math.floor(Math.random() * (boardSize - (shipsSize[i] - 1)));
				let start = table[row][col];

				for(let j = start; j < start + shipsSize[i]; j++) {		
					randomShips.push(j);
				}					
			} else {
				row = Math.floor(Math.random() * (boardSize - (shipsSize[i] - 1)));
				col = Math.floor(Math.random() * boardSize);
					
				let start = table[row][col];

				for(let j = start; j < start + (shipsSize[i] * boardSize); j = j + boardSize) {		
					randomShips.push(j);
				}
			}
		}
	} while(randomShips.filter((el, i) => randomShips.indexOf(el) === i).length < checkNumber);

console.log(randomShips);
	return randomShips;
}

export default genRandomShips