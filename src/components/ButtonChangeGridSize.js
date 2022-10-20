import React from 'react'

const ButtonChangeGridSize = ({triggerPopupChangeGridSize}) => {
  return (
    <button className='btn-gridsize' onClick={triggerPopupChangeGridSize}>
        Change Grid Size and/or Number of Ships
    </button>
  )
    
}

export default ButtonChangeGridSize