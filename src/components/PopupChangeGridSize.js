import React, { useState } from 'react'

const PopupChangeGridSize = ({ triggerSubmitChangeGridSize, triggerCancelChangeGridSize, status, corvette, destroyer, cruiser, battleship, grid }) => {
  const [valueCorvette, setValueCorvette] = useState(corvette)
  const [valueDestroyer, setValueDestroyer] = useState(destroyer)
  const [valueCruiser, setValueCruiser] = useState(cruiser)
  const [valueBattleship, setValueBattleship] = useState(battleship)
  const [valueGrid, setValueGrid] = useState(grid)
  const shipsNumber = [0, 1, 2, 3, 4]
  const gridSize = [6, 7, 8, 9, 10, 11, 12]

  const handleChangeCorvette = (event) => {
    setValueCorvette(event.target.value);
  }
  const handleChangeDestroyer = (event) => {
    setValueDestroyer(event.target.value);
  }
  const handleChangeCruiser = (event) => {
    setValueCruiser(event.target.value);
  }
  const handleChangeBattleship = (event) => {
    setValueBattleship(event.target.value);
  }
  const handleChangeGrid = (event) => {
    setValueGrid(event.target.value);
  }

  return status ? (
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
                  <select value={valueCorvette} onChange={handleChangeCorvette}>
                    {shipsNumber.map((el, i) =>
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
                  <select value={valueDestroyer} onChange={handleChangeDestroyer}>
                    {shipsNumber.map((el, i) =>
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
                  <select value={valueCruiser} onChange={handleChangeCruiser}>
                    {shipsNumber.map((el, i) =>
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
                  <select value={valueBattleship} onChange={handleChangeBattleship}>
                    {shipsNumber.map((el, i) =>
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
                  <select value={valueGrid} onChange={handleChangeGrid}>
                    {gridSize.map((el, i) =>
                      <option key={i} value={el}> {el}</option>
                    )}
                  </select>
                </form>
              </td>
              <td>
                <small>x</small>
              </td>
              <td>
                <small>{valueGrid}</small>
              </td>
            </tr>
          </tbody>
        </table>
        <button 
          className='btn-gssubmit' 
          onClick={triggerSubmitChangeGridSize(valueCorvette, valueDestroyer, valueCruiser, valueBattleship, valueGrid)}
        >
          <strong>Submit</strong>
        </button>
        <button 
          className='btn-gscancel' 
          onClick={triggerCancelChangeGridSize}
        >
            Cancel
        </button>
      </div>
    </div>
  ) : null;
}

export default PopupChangeGridSize