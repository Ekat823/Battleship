import React, { useContext } from 'react';
import { BattleshipContext } from '../../App';

const ButtonSubmit = () => {

  const battleshipContext = useContext(BattleshipContext);

  let corvetteNum = battleshipContext.state.corvetteNum;
  let destroyerNum = battleshipContext.state.destroyerNum;
  let cruiserNum = battleshipContext.state.cruiserNum;
  let battleshipNum = battleshipContext.state.battleshipNum;
  let gridSize = battleshipContext.state.gridSize;

  return (
    <button
      className='btn-gssubmit'
      onClick={() => battleshipContext.dispatch({ type: 'SUBMIT_CHANGE_GRID_SIZE', corvetteNum, destroyerNum, cruiserNum, battleshipNum, gridSize })}
    >
      <strong>Submit</strong>
    </button>
  )
}

export default ButtonSubmit