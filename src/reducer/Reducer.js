import handlePlacingShips from "./HandlePlacingShips";
import handlePlaying from "./HandlePlaying";
import turnOnRestart from "./TurnOnRestart";
import turnOnPlay from "./TurnOnPlay";
import turnOnRearrange from "./TurnOnRearrange";
import handleChoosingShips from "./HandleChoosingShips";
import turnOnChangeGridSize from "./TurnOnChangeGridSize";
import submitChangeGridSize from "./SubmitChangeGridSize";
import cancelChangeGridSize from "./CancelChangeGridSize";

const reducer = (state, action) => {
    let newState;
    switch (action.type) {
        case 'turnOnChangeGridSize':
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
        case 'won':
            return turnOnRestart()
        default:
    }
}

export default reducer