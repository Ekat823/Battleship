const handleChangeBattleshipNum = (state, action) => {
  const battleshipNum = action.payload;
  return { ...state, battleshipNum: battleshipNum };
}

export default handleChangeBattleshipNum