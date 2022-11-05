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
        case 'SUBMIT_CHANGE_GRID_SIZE':
            return submitChangeGridSize(state, action)
        case 'CANCEL_CHANGE_GRID_SIZE':
            return cancelChangeGridSize(state)
        case 'CHOOSE_SHIP':
            return handleChoosingShips(state, action)
        case 'PLACE_SHIP':
            return handlePlacingShips(state, action)
        case 'TURN_OFF_ALERT':
            return { ...state, alert: false }
        case 'CHOOSE_VERTICAL':
            newState = { ...state, chooseVerticalOrHorizontal: false, chooseVertical: true, }
            return handlePlacingShips(newState, action)
        case 'CHOOSE_HORIZONTAL':
            newState = { ...state, chooseVerticalOrHorizontal: false, chooseHorizontal: true, }
            return handlePlacingShips(newState, action)
        case 'TURN_ON_REARRANGE':
            return turnOnRearrange()
        case 'TURN_ON_PLAY':
            return turnOnPlay(state)
        case 'PLAY':
            return handlePlaying(state, action)
        case 'WON':
            return turnOnRestart()
        default:
    }
}

export default reducer