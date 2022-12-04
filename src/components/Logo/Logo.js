import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png.png'
import './Logo.css'

const Logo = (props) => (
        <div className='Logo' style={{height: props.height}} onClick={props.clicked}>
            <img src={burgerLogo} alt='Burger Builder'/>
        </div>
    )


export default Logo
