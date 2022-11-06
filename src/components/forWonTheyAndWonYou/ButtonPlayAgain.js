import React, { useContext } from 'react';
import { BattleshipContext } from '../../App';

const ButtonPlayAgain = () => {

  const battleshipContext = useContext(BattleshipContext)

  return (
    <button
      className='btn-won'
      onClick={() => battleshipContext.dispatch({ type: 'WON' })}
    >
      Play Again
    </button>
  )
}

export default ButtonPlayAgain