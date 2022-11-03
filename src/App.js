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
            <PopupChangeGridSize
              status={state.changeGridSize}
              corvette={state.shipsTypes[0].numOfShips}
              destroyer={state.shipsTypes[1].numOfShips}
              cruiser={state.shipsTypes[2].numOfShips}
              battleship={state.shipsTypes[3].numOfShips}
              grid={state.gridSize}
              triggerSubmitChangeGridSize={(valueCorvette, valueDestroyer, valueCruiser, valueBattleship, valueGrid) => () => dispatch({ type: 'submitChangeGridSize', valueCorvette, valueDestroyer, valueCruiser, valueBattleship, valueGrid })}
              triggerCancelChangeGridSize={() => dispatch({ type: 'cancelChangeGridSize' })}
            />
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
              <td>
                <TableShips
                  message={state.placeShipsMessage}
                  shipsNumber={state.shipsNumber}
                  playerShips={state.playerShips}
                  shipsSize={state.shipsSize}
                  handleClickRearrange={() => dispatch({ type: 'turnOnRearrange' })}
                  handleClickPlay={() => dispatch({ type: 'turnOnPlay' })}
                  handleClickChoose={(index) => () => dispatch({ type: 'chooseShip', index })}
                />
              </td>
              <td>
                <TableLeft
                  cellsLeft={state.cellsLeft}
                  hit1={state.enemyHits}
                  tableSize={state.tableSize}
                  message={state.placeShipsMessage}
                  handleClickPlace={(num) => () => dispatch({ type: 'placeShip', num })}

                  status={state.chooseVerticalOrHorizontal}
                  currentNum={state.currentNum}
                  triggerVertical={(num) => (e) => {
                    e.stopPropagation();
                    return dispatch({ type: 'chooseVertical', num })
                  }}
                  triggerHorizontal={(num) => (e) => {
                    e.stopPropagation();
                    return dispatch({ type: 'chooseHorizontal', num })
                  }}
                />
              </td>
              <td>
                <TableRight
                  cellsRight={state.cellsRight}
                  hit2={state.playerHits}
                  tableSize={state.tableSize}
                  message={state.placeShipsMessage}
                  handleClickMove={(numPlay) => () => dispatch({ type: 'play', numPlay })}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <PopupAlert
          status={state.alert}
          text={state.alertText}
          trigger={() => dispatch({ type: 'turnOffAlert' })}
        />
      </div>
    </BattleshipContext.Provider>
  );
}

export default App