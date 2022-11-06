import React, { useContext, useState } from 'react';
import { BattleshipContext } from '../App';

const PopupChangeGridSize = ({ triggerSubmitChangeGridSize }) => {

  const battleshipContext = useContext(BattleshipContext)

  let corvetteNum = battleshipContext.state.corvetteNum;
  let destroyerNum = battleshipContext.state.destroyerNum;
  let cruiserNum = battleshipContext.state.cruiserNum;
  let battleshipNum = battleshipContext.state.battleshipNum;
  let gridSize = battleshipContext.state.gridSize;
  let shipsNum = battleshipContext.state.shipsNum
  let cellsNum = battleshipContext.state.cellsNum

  return battleshipContext.state.changeGridSize ? (
    <div className='popup-gridsize'>
      <div className='popup-gridsize-inner'>
        <h3>Ships</h3>
        <table className='gridsize'>
          <tbody>
            <tr>
              <td>
                <strong>Corvette</strong> <em><small>(one square)</small></em>:
              </td>
              <td>
                <form>
                  <select
                    value={corvetteNum}
                    onChange={(e) => battleshipContext.dispatch({
                      type: 'HANDLE_CHANGE_CORVETTE_NUM',
                      payload: e.target.value
                    })}
                  >
                    {shipsNum.map((el, i) =>
                      <option key={i} value={el}> {el}</option>
                    )}
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Destroyer</strong> <em><small>(two squares)</small></em>:
              </td>
              <td>
                <form>
                  <select
                    value={destroyerNum}
                    onChange={(e) => battleshipContext.dispatch({
                      type: 'HANDLE_CHANGE_DESTROYER_NUM',
                      payload: e.target.value
                    })}>
                    {shipsNum.map((el, i) =>
                      <option key={i} value={el}> {el}</option>
                    )}
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Cruiser</strong> <em><small>(three squares)</small></em>:
              </td>
              <td>
                <form>
                  <select
                    value={cruiserNum}
                    onChange={(e) => battleshipContext.dispatch({
                      type: 'HANDLE_CHANGE_CRUISER_NUM',
                      payload: e.target.value
                    })}>
                    {shipsNum.map((el, i) =>
                      <option key={i} value={el}> {el}</option>
                    )}
                  </select>
                </form>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Battleship</strong> <em><small>(four squares)</small></em>:
              </td>
              <td>
                <form>
                  <select
                    value={battleshipNum}
                    onChange={(e) => battleshipContext.dispatch({
                      type: 'HANDLE_CHANGE_BATTLESHIP_NUM',
                      payload: e.target.value
                    })}>
                    {shipsNum.map((el, i) =>
                      <option key={i} value={el}> {el}</option>
                    )}
                  </select>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Grid</h3>
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
        <button
          className='btn-gssubmit'
          onClick={triggerSubmitChangeGridSize(corvetteNum, destroyerNum, cruiserNum, battleshipNum, gridSize)}
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
  ) : null;
}

export default PopupChangeGridSize