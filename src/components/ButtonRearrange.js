import React, { useContext } from 'react';
import { BattleshipContext } from '../App';

const ButtonRearrange = () => {

  const battleshipContext = useContext(BattleshipContext)

  return (
    <>
      <button
        className='btn-rearrange'
        onClick={() => battleshipContext.dispatch({ type: 'TURN_ON_REARRANGE' })}
      >
        Rearrange
      </button>
    </>
  )
}

export default ButtonRearrange