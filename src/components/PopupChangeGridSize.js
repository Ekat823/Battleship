import React, { useContext } from 'react';
import { BattleshipContext } from '../App';
import Corvette from './forPopupChangeGridSize/Corvette';
import Destroyer from './forPopupChangeGridSize/Destroyer';
import Cruiser from './forPopupChangeGridSize/Cruiser';
import Battleship from './forPopupChangeGridSize/Battleship';
import GridSize from './forPopupChangeGridSize/GridSize';

const PopupChangeGridSize = () => {

  const battleshipContext = useContext(BattleshipContext);

  let corvetteNum = battleshipContext.state.corvetteNum;
  let destroyerNum = battleshipContext.state.destroyerNum;
  let cruiserNum = battleshipContext.state.cruiserNum;
  let battleshipNum = battleshipContext.state.battleshipNum;
  let gridSize = battleshipContext.state.gridSize;


  return battleshipContext.state.changeGridSize ? (
    <div className='popup-gridsize'>
      <div className='popup-gridsize-inner'>
        <h3>Ships</h3>
        <Corvette />
        <Destroyer />
        <Cruiser />
        <Battleship />
        <h3>Grid</h3>
        <GridSize/>
        <button
          className='btn-gssubmit'
          onClick={() => battleshipContext.dispatch({ type: 'SUBMIT_CHANGE_GRID_SIZE', corvetteNum, destroyerNum, cruiserNum, battleshipNum, gridSize })}
        >
          <strong>Submit</strong>
        </button>
        <button
          className='btn-gscancel'
          onClick={() => battleshipContext.dispatch({ type: 'CANCEL_CHANGE_GRID_SIZE' })}
        >
          Cancel
        </button>
      </div>
    </div>
  )
    : null;
}

export default PopupChangeGridSize