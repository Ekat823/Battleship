import genRandomShips from "./GenRandomShips";

const turnOnPlay = (state) => {
    return {...state, placeShipsMessage: null, alertText: 'Alredy Clicked', enemyShips: genRandomShips(state)}
}

export default turnOnPlay