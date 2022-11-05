import React, { useContext } from 'react';
import { BattleshipContext } from '../App';

const PopupConfirm = ({ num }) => {

  const battleshipContext = useContext(BattleshipContext)

  return battleshipContext.state.chooseVerticalOrHorizontal ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button
          className='vertical-btn'
          onClick={() => battleshipContext.dispatch({ type: 'CHOOSE_VERTICAL', num })
          }
        >
          Vertical
        </button>
        <button
          className='horizontal-btn'
          onClick={() => battleshipContext.dispatch({ type: 'CHOOSE_HORIZONTAL', num })
          }
        >
          Horizontal
        </button>
      </div>
    </div>
  )
    : null;
}

export default PopupConfirm