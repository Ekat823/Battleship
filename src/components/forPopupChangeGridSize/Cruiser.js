import React, { useContext } from 'react';
import { BattleshipContext } from '../../App';

const Cruiser = () => {

  const battleshipContext = useContext(BattleshipContext);

  let cruiserNum = battleshipContext.state.cruiserNum;
  let shipsNum = battleshipContext.state.shipsNum;

  return (
    <table className='gridsize'>
      <tbody>
        <tr>
          <td>
            <strong>Cruiser</strong> <em><small>(three squares)</small></em>:
          </td>
          <td style={{textAlign: 'right'}}>
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
      </tbody>
    </table >
  )
}

export default Cruiser