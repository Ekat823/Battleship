import React, { useContext } from 'react';
import { BattleshipContext } from '../../App';

const GridSize = () => {

  const battleshipContext = useContext(BattleshipContext);

  let gridSize = battleshipContext.state.gridSize;
  let cellsNum = battleshipContext.state.cellsNum;

  return (
    <table className='gridsize'>
      <tbody>
        <tr>
          <td>
            <strong>Grid Size</strong>:
          </td>
          <td>
            <form>
              <select
                value={gridSize}
                onChange={(e) => battleshipContext.dispatch({
                  type: 'HANDLE_CHANGE_GRID_SIZE',
                  payload: e.target.value
                })}>
                {cellsNum.map((el, i) =>
                  <option key={i} value={el}> {el}</option>
                )}
              </select>
            </form>
          </td>
          <td>
            <small>x</small>
          </td>
          <td>
            <small>{gridSize}</small>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default GridSize