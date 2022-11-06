import React, { useContext } from 'react';
import { BattleshipContext } from '../../App';

const Corvette = () => {

  const battleshipContext = useContext(BattleshipContext);

  let corvetteNum = battleshipContext.state.corvetteNum;
  let shipsNum = battleshipContext.state.shipsNum;

  return (
    <table className='gridsize'>
      <tbody>
        <tr>
          <td>
            <strong>Corvette</strong> <em><small>(one square)</small></em>:
          </td>
          <td style={{textAlign: 'right'}}>
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
      </tbody>
    </table>
  )
}

export default Corvette