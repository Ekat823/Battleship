import CheckHorisontalSet from './CheckHorisontalSet';

const checkVerticalHorisontal = (index, num, shipsSize, squares, tableSize) => {

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

    if(shipsSize[index] > 1) {
        if(!CheckHorisontalSet(num, shipsSize[index], tableSize) && vertical === 0) {
            return 'vertical'
        }
        
        if (horizontal === 1 && vertical === 0) {
            return 'vertical'
        }

        if (horizontal === 0 && vertical === 1) {
            return 'horizontal'
        }
            
        if (horizontal === 0 && vertical === 0) {
            return 'choose'
        }
    }
}

export default checkVerticalHorisontal