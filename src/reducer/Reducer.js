import handlePlacingShips from "./actions/HandlePlacingShips";
import handlePlaying from "./actions/HandlePlaying";
import turnOnRestart from "./actions/TurnOnRestart";
import turnOnPlay from "./actions/TurnOnPlay";
import turnOnRearrange from "./actions/TurnOnRearrange";
import handleChoosingShips from "./actions/HandleChoosingShips";
import turnOnChangeGridSize from "./actions/TurnOnChangeGridSize";
import submitChangeGridSize from "./actions/SubmitChangeGridSize";
import cancelChangeGridSize from "./actions/CancelChangeGridSize";
import handleChangeCorvetteNum from "./actions/HandleChangeCorvetteNum";
import handleChangeDestroyerNum from "./actions/HandleChangeDestroyerNum";
import handleChangeCruiserNum from "./actions/HandleChangeCruiserNum";
import handleChangeBattleshipNum from "./actions/HandleChangeBattleshipNum";
import handleChangeGridSize from "./actions/HandleChangeGridSize";

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
//Change grid size button
    case 'TURN_ON_CHANGE_GRID_SIZE':
      return turnOnChangeGridSize(state)
//Change grid size popup
    case 'HANDLE_CHANGE_CORVETTE_NUM':
      return handleChangeCorvetteNum(state, action)
    case 'HANDLE_CHANGE_DESTROYER_NUM':
      return handleChangeDestroyerNum(state, action)
    case 'HANDLE_CHANGE_CRUISER_NUM':
      return handleChangeCruiserNum(state, action)
    case 'HANDLE_CHANGE_BATTLESHIP_NUM':
      return handleChangeBattleshipNum(state, action)
      case 'HANDLE_CHANGE_GRID_SIZE':
      return handleChangeGridSize(state, action)
    case 'SUBMIT_CHANGE_GRID_SIZE':
      return submitChangeGridSize(state, action)
    case 'CANCEL_CHANGE_GRID_SIZE':
      return cancelChangeGridSize(state)
//Placing ships    
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
      return turnOnRearrange(state)
    case 'TURN_ON_PLAY':
      return turnOnPlay(state)
//Playing    
    case 'PLAY':
      return handlePlaying(state, action)
    case 'WON':
      return turnOnRestart(state)
    default:
  }
}

export default reducer