import React, { useContext } from 'react';
import { BattleshipContext } from '../App';

const TableShips = ({handleClickChoose, handleClickRearrange, handleClickPlay}) => {

  const battleshipContext = useContext(BattleshipContext)

    const tableWidth = 1;
    const tableHeight = battleshipContext.state.shipsNumber;
       
    const renderTable = (rows, columns) => {
        
        const buttons = {
            shipBlack: 'btn-shipblack',
            shipRed: 'btn-shipred',
        }

        let result = [];
        for(let i = 0; i < columns; i++) {
            let c = [];
            for(let j = 0; j < rows; j++) {
                const index = i * rows + j;
                c.push(
                    <td key={index} onClick={handleClickChoose(index)}>
                        {battleshipContext.state.playerShips[index] === 'placed' ? null : 
                            <button 
                                className={buttons[battleshipContext.state.playerShips[index]]} 
                                style={{width:`${40 * battleshipContext.state.shipsSize[index] + 4}px`}} 
                            />
                        }
                    </td>
                );
            }
            result.push(<tr key={i}>{c}</tr>);
        }
        //  console.log('blackFleet', blackFleet)
        //  console.log('redFleet', redFleet)
        return result;
    };
        
    return (
        <div>
            <p>
                {battleshipContext.state.placeShipsMessage === 'click ship' ? 
                        'Click a Ship' 
                    : battleshipContext.state.placeShipsMessage === 'click cell' ? 
                        'Click a Cell'
                    : battleshipContext.state.placeShipsMessage === 'play' ?
                        <>
                            <button className='btn-rearrange' onClick={handleClickRearrange}>
                                Rearrange
                            </button>
                            <br />
                            <button className='btn-play' onClick={handleClickPlay}>
                                Play
                            </button>
                        </>
                    : null
                }
            </p>
            <table className='style3'>
                <tbody>
                    {renderTable (tableWidth, tableHeight)}
                </tbody>
            </table>
        </div>
    )
}

export default TableShips