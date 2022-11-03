import React, { useContext } from 'react';
import { BattleshipContext } from '../App';

const ButtonChangeGridSize = () => {

  const battleshipContext = useContext(BattleshipContext)

  return (
    <button className='btn-gridsize' onClick={() => battleshipContext.dispatch({ type: 'TURN_ON_CHANGE_GRID_SIZE' })}>
        Change Grid Size and/or Number of Ships
    </button>
  )
    
}

export default ButtonChangeGridSize