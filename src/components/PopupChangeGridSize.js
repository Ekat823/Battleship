import React, { useContext } from 'react';
import { BattleshipContext } from '../App';
import Corvette from './forPopupChangeGridSize/Corvette';
import Destroyer from './forPopupChangeGridSize/Destroyer';
import Cruiser from './forPopupChangeGridSize/Cruiser';
import Battleship from './forPopupChangeGridSize/Battleship';
import GridSize from './forPopupChangeGridSize/GridSize';
import ButtonSubmit from './forPopupChangeGridSize/ButtonSubmit';
import ButtonCancel from './forPopupChangeGridSize/ButtonCancel';

const PopupChangeGridSize = () => {

  const battleshipContext = useContext(BattleshipContext);

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
        <ButtonSubmit />
        <ButtonCancel />
      </div>
    </div>
  )
    : null;
}

export default PopupChangeGridSize