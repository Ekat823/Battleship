import React, { useContext } from 'react';
import { BattleshipContext } from '../../App';

const ButtonPlay = () => {

  const battleshipContext = useContext(BattleshipContext)

  return (
    <button
      className='btn-play'
      onClick={() => battleshipContext.dispatch({ type: 'TURN_ON_PLAY' })}
    >
      Play
    </button>
  )
}

export default ButtonPlay