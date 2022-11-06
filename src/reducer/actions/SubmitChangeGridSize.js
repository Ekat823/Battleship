const submitChangeGridSize = (state, action) => {
    const corvette = Number(action.corvetteNum);
    const destroyer = Number(action.destroyerNum);
    const cruiser = Number(action.cruiserNum);
    const battleship = Number(action.battleshipNum);
    const grid = Number(action.gridSize);

    const shipsTypes = [
        { shipSize: 1, numOfShips: corvette },
        { shipSize: 2, numOfShips: destroyer },
        { shipSize: 3, numOfShips: cruiser },
        { shipSize: 4, numOfShips: battleship },
    ]

    const shipsSize = [
        ...Array(shipsTypes[0].numOfShips).fill(shipsTypes[0].shipSize),
        ...Array(shipsTypes[1].numOfShips).fill(shipsTypes[1].shipSize),
        ...Array(shipsTypes[2].numOfShips).fill(shipsTypes[2].shipSize),
        ...Array(shipsTypes[3].numOfShips).fill(shipsTypes[3].shipSize)
    ]

    const checkNumber = shipsSize.reduce((prev, curr) => prev + curr);

    const tableSize = grid;

//console.log(checkNumber, (tableSize * tableSize))

    if (checkNumber / (tableSize * tableSize) > 0.3) {
        return { ...state, alert: true, alertText: 'Decrease the Number of Ships or Increase the Grid Size' }
    } else {
        return {
            ...state,
            changeGridSize: false,
            shipsTypes: shipsTypes,
            shipsSize: shipsSize,
            shipsNumber: shipsSize.length,
            checkNumber: checkNumber,
            tableSize: tableSize,
            gridSize: tableSize,
            cellsLeft: Array(tableSize * tableSize).fill('empty'),
            cellsRight: Array(tableSize * tableSize).fill('empty'),
            playerShips: Array(shipsSize.length).fill('shipBlack'),
            placeShipsMessage: 'click ship'
        }
    }
}

export default submitChangeGridSize