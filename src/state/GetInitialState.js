const getInitialState = () => {

  const shipsTypes = [
    { shipSize: 1, numOfShips: 4 },
    { shipSize: 2, numOfShips: 3 },
    { shipSize: 3, numOfShips: 2 },
    { shipSize: 4, numOfShips: 1 },
  ]

  const shipsSize = [
    ...Array(shipsTypes[0].numOfShips).fill(shipsTypes[0].shipSize),
    ...Array(shipsTypes[1].numOfShips).fill(shipsTypes[1].shipSize),
    ...Array(shipsTypes[2].numOfShips).fill(shipsTypes[2].shipSize),
    ...Array(shipsTypes[3].numOfShips).fill(shipsTypes[3].shipSize)
  ]

  const checkNumber = shipsSize.reduce((prev, curr) => prev + curr);

  const tableSize = 10;

  const InitialState = {
//for ButtonChangeGridSize
    changeGridSize: false,
//for PopupChangeGridSize
    shipsTypes: shipsTypes,
    corvetteNum: shipsTypes[0].numOfShips,
    destroyerNum: shipsTypes[1].numOfShips,
    cruiserNum: shipsTypes[2].numOfShips,
    battleshipNum: shipsTypes[3].numOfShips,
    shipsNum: [0, 1, 2, 3, 4],
    cellsNum: [6, 7, 8, 9, 10, 11, 12],
    gridSize: tableSize,
    shipsSize: shipsSize,
//for TableShips
    placeShipsMessage: 'click ship',
    playerShips: Array(shipsSize.length).fill('shipBlack'),
//for TableLeft placing ships 
    chooseVerticalOrHorizontal: false,
    chooseVertical: false,
    chooseHorizontal: false,
//for TableLeft and TableRight    
    tableSize: tableSize,
    checkNumber: checkNumber,
    shipsNumber: shipsSize.length,
    shipIndex: 0,
    cellsLeft: Array(tableSize * tableSize).fill('empty'),
    cellsRight: Array(tableSize * tableSize).fill('empty'),
    enemyHits: 0,
    playerHits: 0,
// alert
    alert: false,
    alertText: 'Click Another Cell',
//Won
    enemyWon: false,
    playerWon: false,
  };

  return InitialState;
};

export default getInitialState