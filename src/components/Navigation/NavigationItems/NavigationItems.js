import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
        <ul className='NavigationItems'>
           <NavigationItem link='/' active>Burger Builder</NavigationItem>
           <NavigationItem link='/'>Check Out 💳</NavigationItem>
        </ul>
    )

export default NavigationItems
