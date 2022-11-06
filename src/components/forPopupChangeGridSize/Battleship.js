import React, { useContext } from 'react';
import { BattleshipContext } from '../../App';

const Battleship = () => {

  const battleshipContext = useContext(BattleshipContext);

  let battleshipNum = battleshipContext.state.battleshipNum;
  let shipsNum = battleshipContext.state.shipsNum;

  return (
    <table className='gridsize'>
      <tbody>
        <tr>
          <td>
            <strong>Battleship</strong> <em><small>(four squares)</small></em>:
          </td>
          <td style={{textAlign: 'right'}}>
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
  )
}

export default Battleship