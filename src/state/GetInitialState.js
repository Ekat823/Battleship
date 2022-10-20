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
    changeGridSize: false,
    placeShipsMessage: 'click ship',
    tableSize: tableSize,
    gridSize: tableSize,
    shipsTypes: shipsTypes,
    checkNumber: checkNumber,
    shipsNumber: shipsSize.length,
    shipIndex: 0,
    shipsSize: shipsSize,
    cellsLeft: Array(tableSize * tableSize).fill('empty'),
    cellsRight: Array(tableSize * tableSize).fill('empty'),
    playerShips: Array(shipsSize.length).fill('shipBlack'),
    enemyHits: 0,
    playerHits: 0,
    alert: false,
    alertText: 'Click Another Cell',
    chooseVerticalOrHorizontal: false,
    chooseVertical: false,
    chooseHorizontal: false,
    enemyWon: false,
    playerWon: false,
  };

  return InitialState;
};

export default getInitialState