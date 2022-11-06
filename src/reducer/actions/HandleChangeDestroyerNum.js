const handleChangeDestroyerNum = (state, action) => {
  const destroyerNum = action.payload;
  return { ...state, destroyerNum: destroyerNum };
}

export default handleChangeDestroyerNum