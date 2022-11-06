const handleChangeGridSize = (state, action) => {
  const gridSize = action.payload;
  return { ...state, gridSize: gridSize };
}

export default handleChangeGridSize