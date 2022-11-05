import React, { useContext } from 'react';
import { BattleshipContext } from '../App';

const PopupAlert = ({ trigger }) => {

  const battleshipContext = useContext(BattleshipContext)

  return battleshipContext.state.alert ? (
    <div className='popup'>
      <div className='popup-inner'>
        <div>{battleshipContext.state.alertText}</div>
        <button
          className='close-btn'
          onClick={() => battleshipContext.dispatch({ type: 'turnOffAlert' })}
        >
          Okay
        </button>
      </div>
    </div>
  ) : null;
}
export default PopupAlert