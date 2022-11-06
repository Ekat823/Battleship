import React, { useContext } from 'react';
import { BattleshipContext } from '../../App';

const ButtonCancel = () => {

  const battleshipContext = useContext(BattleshipContext);

  return (
    <button
      className='btn-gscancel'
      onClick={() => battleshipContext.dispatch({ type: 'CANCEL_CHANGE_GRID_SIZE' })}
    >
      Cancel
    </button>
  )
}

export default ButtonCancel