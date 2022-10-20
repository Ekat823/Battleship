import React from 'react'

const PopupAlert = ({trigger, status, text}) => {
  return status ? (
    <div className='popup'>
        <div className='popup-inner'>
            <div>{text}</div>
            <button className='close-btn' onClick={trigger}>Okay</button>
        </div>
    </div>
  ) : null;
}
export default PopupAlert