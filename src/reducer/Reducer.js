import handlePlacingShips from "./actions/HandlePlacingShips";
import handlePlaying from "./actions/HandlePlaying";
import turnOnRestart from "./actions/TurnOnRestart";
import turnOnPlay from "./actions/TurnOnPlay";
import turnOnRearrange from "./actions/TurnOnRearrange";
import handleChoosingShips from "./actions/HandleChoosingShips";
import turnOnChangeGridSize from "./actions/TurnOnChangeGridSize";
import submitChangeGridSize from "./actions/SubmitChangeGridSize";
import cancelChangeGridSize from "./actions/CancelChangeGridSize";

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case 'TURN_ON_CHANGE_GRID_SIZE':
            return turnOnChangeGridSize(state)
        case 'submitChangeGridSize':
            return submitChangeGridSize(state, action)
        case 'cancelChangeGridSize':
            return cancelChangeGridSize(state)
        case 'chooseShip':
            return handleChoosingShips(state, action)
        case 'placeShip':
            return handlePlacingShips(state, action)
        case 'turnOffAlert':
            return { ...state, alert: false }
        case 'chooseVertical':
            newState = { ...state, chooseVerticalOrHorizontal: false, chooseVertical: true, }
            return handlePlacingShips(newState, action)
        case 'chooseHorizontal':
            newState = { ...state, chooseVerticalOrHorizontal: false, chooseHorizontal: true, }
            return handlePlacingShips(newState, action)
        case 'turnOnRearrange':
            return turnOnRearrange()
        case 'turnOnPlay':
            return turnOnPlay(state)
        case 'play':
            return handlePlaying(state, action)
        case 'WON':
            return turnOnRestart()
        default:
    }
}

export default reducer