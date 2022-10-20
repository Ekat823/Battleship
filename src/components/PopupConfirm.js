import React from 'react'

const PopupConfirm = ({triggerVertical, triggerHorizontal, status}) => {
  return status ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button className='vertical-btn' onClick={triggerVertical}>Vertical</button>
            <button className='horizontal-btn' onClick={triggerHorizontal}>Horizontal</button>
        </div>
    </div>
  ) : null;
}

export default PopupConfirm