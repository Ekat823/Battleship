import React, { useReducer } from 'react';
import reducer from './reducer/Reducer';
import getInitialState from './state/GetInitialState';
import TableLeft from './components/TableLeft';
import TableRight from './components/TableRight';
import TableShips from './components/TableShips';
import WonThey from './components/WonThey';
import WonYou from './components/WonYou';
import PopupAlert from './components/PopupAlert';
import ButtonChangeGridSize from './components/ButtonChangeGridSize';
import PopupChangeGridSize from './components/PopupChangeGridSize.js';

export const BattleshipContext = React.createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, getInitialState());
  //console.log(state);

  return (

    <BattleshipContext.Provider value={{ state: state, dispatch: dispatch }}>
      <div className='container'>
        {state.placeShipsMessage !== null ?
          <div>
            <ButtonChangeGridSize />
            <PopupChangeGridSize />
          </div>
          : null
        }

        <div>
          {state.enemyWon ?
            <WonThey/>
            : state.playerWon ?
              <WonYou />
              : null
          }
        </div>

        <table className='style1'>
          <tbody>
            <tr>
              <td><TableShips /></td>
              <td><TableLeft /></td>
              <td><TableRight /></td>
            </tr>
          </tbody>
        </table>

        <PopupAlert />
        
      </div>
    </BattleshipContext.Provider>
  );
}

export default App