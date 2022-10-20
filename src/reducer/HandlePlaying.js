const handlePlaying = (state, action) => {
    const numPlay = action.numPlay;
    const checkNumber = state.checkNumber;
    let num = action.num;
    let enemyHit = state.enemyHits;
    let playerHit = state.playerHits;
    let squares1 = [...state.cellsLeft];
    let squares2 = [...state.cellsRight];

    if (state.placeShipsMessage === null) {

        if (state.playerHits === checkNumber || state.enemyHits === checkNumber) {
            return { ...state };
        }

        if (squares2[numPlay] !== 'empty') {
            return { ...state, alert: true };
        }

        if (state.enemyShips.indexOf(numPlay) !== -1) {
            
            squares2[numPlay] = 'hit';
            playerHit = playerHit + 1;

            do {
                num = Math.floor(Math.random() * state.cellsLeft.length);
            } while (squares1[num] === 'hit' || squares1[num] === 'miss');

            if (squares1[num] === 'ship') {
                squares1[num] = 'hit';
                enemyHit = enemyHit + 1;
            }

            if (squares1[num] === 'empty') {
                squares1[num] = 'miss';
            }

        } else {
            
            squares2[numPlay] = 'miss';

            do {
                num = Math.floor(Math.random() * state.cellsLeft.length);
            } while (squares1[num] === 'hit' || squares1[num] === 'miss');

            if (squares1[num] === 'ship') {
                squares1[num] = 'hit';
                enemyHit = enemyHit + 1;
            }

            if (squares1[num] === 'empty') {
                squares1[num] = 'miss';
            }
        }

        if (playerHit === checkNumber) {
            return { ...state, enemyHits: enemyHit, playerHits: playerHit, cellsLeft: squares1, cellsRight: squares2, playerWon: true }
        }

        if (enemyHit === checkNumber) {
            return { ...state, enemyHits: enemyHit, playerHits: playerHit, cellsLeft: squares1, cellsRight: squares2, enemyWon: true }

        } else {
            return { ...state, enemyHits: enemyHit, playerHits: playerHit, cellsLeft: squares1, cellsRight: squares2 }
        }

    } else {
        return { ...state, };
    }
};

export default handlePlaying