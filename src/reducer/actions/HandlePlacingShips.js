import checkCellForPlacingShip from './CheckCellForPlacingShip';
import checkVerticalHorisontal from './CheckVerticalHorisontal';

const handlePlacingShips = (state, action) => {
  const index = state.shipIndex;
  const num = action.num;
  let fleet = [...state.playerShips];
  const shipsSize = [...state.shipsSize];
  let squares = [...state.cellsLeft];
  const tableSize = state.tableSize;

  if (state.placeShipsMessage !== 'click ship') {

    if (!checkCellForPlacingShip(index, num, shipsSize, squares, tableSize)) {
      return { ...state, alert: true };
    }

    if (shipsSize[index] === 1) {
      squares[num] = 'ship';
      fleet[index] = 'placed';
    }

    if (shipsSize[index] > 1) {

      if (checkVerticalHorisontal(index, num, shipsSize, squares, tableSize) === 'choose' && (!state.chooseVertical && !state.chooseHorizontal)) {
        return { ...state, chooseVerticalOrHorizontal: true, currentNum: num };
      }

      if (state.chooseVertical || checkVerticalHorisontal(index, num, shipsSize, squares, tableSize) === 'vertical') {
        for (let i = num; i < num + (shipsSize[index] * tableSize); i = i + tableSize) {
          squares[i] = 'ship';
          fleet[index] = 'placed';
        }
      }
      if (state.chooseHorizontal || checkVerticalHorisontal(index, num, shipsSize, squares, tableSize) === 'horizontal') {
        for (let i = num; i < num + (shipsSize[index]); i++) {
          squares[i] = 'ship';
          fleet[index] = 'placed';
        }
      }
    }

    if (fleet.filter(el => el === 'placed').length === fleet.length) {
      return { ...state, placeShipsMessage: 'play', playerShips: fleet, cellsLeft: squares, chooseHorizontal: false, chooseVertical: false };
    } else {
      return { ...state, placeShipsMessage: 'click ship', playerShips: fleet, cellsLeft: squares, chooseHorizontal: false, chooseVertical: false };
    }
  } else {
    return { ...state }
  }
};

export default handlePlacingShips