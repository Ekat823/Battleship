import React, { useContext } from 'react';
import { BattleshipContext } from '../App';
import ShipImg from './ShipImg';
import PopupConfirm from './PopupConfirm';

const TableLeft = ({ handleClickPlace, triggerVertical, triggerHorizontal }) => {

  const battleshipContext = useContext(BattleshipContext)

  const tableWidth = battleshipContext.state.tableSize;
  const tableHeight = battleshipContext.state.tableSize;

  const renderTable = (rows, columns) => {

    const shipsImgs = {
      ship: { id: 1, pic: './images/picShip.png', alt: 'ship' },
      hit: { id: 2, pic: './images/picHit.png', alt: 'hit' },
      miss: { id: 3, pic: './images/picMiss.png', alt: 'miss' },
    }

    let result = [];
    for (let i = 0; i < rows; i++) {
      let c = [];
      for (let j = 0; j < columns; j++) {
        const num = i * columns + j;
        c.push(
          <td key={num} onClick={handleClickPlace(num)}>
            <ShipImg el={shipsImgs[battleshipContext.state.cellsLeft[num]]} />
            {battleshipContext.state.currentNum === num ? <PopupConfirm
              status={battleshipContext.state.chooseVerticalOrHorizontal}
              triggerVertical={triggerVertical(num)}
              triggerHorizontal={triggerHorizontal(num)}
            />
              : null}
          </td>
        );
      }
      result.push(<tr key={'tr' + i}>{c}</tr>);
    }
    return result;
  };

  return (
    <div className='container'>
      {battleshipContext.state.placeShipsMessage === null ? <p className='score'>{battleshipContext.state.enemyHits} {battleshipContext.state.enemyHits === 1 ? 'Hit' : 'Hits'}</p>
        : null}
      <table className='style2'>
        <tbody>
          {renderTable(tableWidth, tableHeight)}
        </tbody>
      </table>
    </div>
  );
};
export default TableLeft