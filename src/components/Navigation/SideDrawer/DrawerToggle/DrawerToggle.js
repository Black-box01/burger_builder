import React from 'react';
import './DrawerToggle.css'

const DrawerToggle = (props) => {
    return (
        <div onClick={props.clicked} className='DrawerToggle'>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default DrawerToggle;
