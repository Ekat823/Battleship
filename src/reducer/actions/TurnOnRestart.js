import getInitialState from "../../state/GetInitialState";

const turnOnRestart = (state) => {
  
  const shipsTypes = state.shipsTypes;
  const shipsSize = state.shipsSize;
  const shipsNumber = state.shipsSize.length;
  const checkNumber = state.checkNumber;
  const tableSize = state.tableSize;
  const gridSize = state.tableSize;
  const cellsLeft = Array(state.tableSize * state.tableSize).fill('empty');
  const cellsRight = Array(state.tableSize * state.tableSize).fill('empty');
  const playerShips = Array(state.shipsSize.length).fill('shipBlack');
  const corvetteNum = state.corvetteNum;
  const destroyerNum = state.destroyerNum;
  const cruiserNum = state.cruiserNum;
  const battleshipNum = state.battleshipNum;
  

  return {
    ...getInitialState(),
    changeGridSize: false,
    shipsTypes: shipsTypes,
    shipsSize: shipsSize,
    shipsNumber: shipsNumber,
    checkNumber: checkNumber,
    tableSize: tableSize,
    gridSize: gridSize,
    cellsLeft: cellsLeft,
    cellsRight: cellsRight,
    playerShips: playerShips,
    placeShipsMessage: 'click ship',
    corvetteNum: corvetteNum,
    destroyerNum: destroyerNum,
    cruiserNum: cruiserNum,
    battleshipNum: battleshipNum,
    gridSize: gridSize
  };
};

export default turnOnRestart