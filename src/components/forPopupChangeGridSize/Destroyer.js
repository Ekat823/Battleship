import React, { useContext } from 'react';
import { BattleshipContext } from '../../App';

const Destroyer = () => {

  const battleshipContext = useContext(BattleshipContext);

  let destroyerNum = battleshipContext.state.destroyerNum;
  let shipsNum = battleshipContext.state.shipsNum;

  return (
    <table className='gridsize'>
      <tbody>
        <tr>
          <td>
            <strong>Destroyer</strong> <em><small>(two squares)</small></em>:
          </td>
          <td style={{textAlign: 'right'}}>
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
      </tbody>
    </table >
  )
}

export default Destroyer