const handleChoosingShips = (state, action) => {
  const index = action.index;
  let fleet = [...state.playerShips];

  if (state.placeShipsMessage === 'click ship') {

    fleet[index] = 'shipRed';

    return {
      ...state,
      placeShipsMessage: 'click cell',
      playerShips: fleet,
      shipIndex: index
    };
  } else {
    return { ...state }
  }
}
export default handleChoosingShips