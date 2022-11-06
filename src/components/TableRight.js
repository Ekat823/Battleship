import React, { useContext } from 'react';
import { BattleshipContext } from '../App';
import ShipImg from './forTableLeftAndTableRight/ShipImg';

const TableRight = () => {

  const battleshipContext = useContext(BattleshipContext)

  const tableWidth = battleshipContext.state.tableSize;
  const tableHeight = battleshipContext.state.tableSize;

  const renderTable = (rows, columns) => {

    const shipsImgs = {
      hit: { id: 2, pic: './images/picHit.png', alt: 'hit' },
      miss: { id: 3, pic: './images/picMiss.png', alt: 'miss' },
      empty: { id: 4, pic: './images/picShadow.png', alt: 'shadow' },
    }

    let result = [];
    for (let i = 0; i < rows; i++) {
      let c = [];
      for (let j = 0; j < columns; j++) {
        const numPlay = i * columns + j
        c.push(
          <td
            key={numPlay}
            onClick={() => battleshipContext.dispatch({ type: 'PLAY', numPlay })}
          >
            <ShipImg
              el={shipsImgs[battleshipContext.state.cellsRight[numPlay]]}
            />
          </td>
        );
      }
      result.push(<tr key={'tr' + i}>{c}</tr>);
    }
    return result;
  };

  return (
    <div className='container'>
      {battleshipContext.state.placeShipsMessage === null ? <p className='score'>{battleshipContext.state.playerHits} {battleshipContext.state.playerHits === 1 ? 'Hit' : 'Hits'}</p>
        : null}
      <table className='style2'>
        <tbody>
          {renderTable(tableWidth, tableHeight)}
        </tbody>
      </table>
    </div>
  );
};

export default TableRight