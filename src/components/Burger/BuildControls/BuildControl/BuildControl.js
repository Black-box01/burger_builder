import React from 'react'
import './BuildControl.css'

const BuildControl = (props) => (
        <div className='BuildControl'>
            <div className='Label'>{props.label}</div>
            <button 
            className='Less' 
            onClick={props.subtract}
            disabled={props.disabled}
            >Remove</button>
            <button className='More' onClick={props.added}>Add</button>
        </div>
    );


export default BuildControl