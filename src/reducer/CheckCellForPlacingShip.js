import CheckHorisontalSet from './CheckHorisontalSet';

const checkCellForPlacingShip = (index, num, shipsSize, squares, tableSize) => {
    
    let horizontal = 0;
    let vertical = 0;

    for(let i = num; i < num + shipsSize[index]; i++) {
        if(squares[i] !== 'empty') {
            horizontal = 1;
        }
    }
        
    for(let i = num; i < num + (shipsSize[index] * tableSize); i = i + tableSize) {
        if(squares[i] !== 'empty') {
            vertical = 1;
        }
    }

    if(squares[num] !== 'empty' || (horizontal === 1 && vertical === 1) || (vertical === 1 && !CheckHorisontalSet(num, shipsSize[index], tableSize))) {
        return false;
    } else {
        return true;
    }
}

export default checkCellForPlacingShip
