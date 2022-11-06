const handleChangeCorvetteNum = (state, action) => {
  const corvetteNum = action.payload;
  return { ...state, corvetteNum: corvetteNum };
}

export default handleChangeCorvetteNum