const handleChangeCruiserNum = (state, action) => {
  const cruiserNum = action.payload;
  return { ...state, cruiserNum: cruiserNum };
}

export default handleChangeCruiserNum