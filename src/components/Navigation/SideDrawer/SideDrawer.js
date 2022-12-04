import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary/Auxillary'
import './SideDrawer.css';

const SideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open){
        attachedClasses=['SideDrawer', 'Open']
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height='11%'clicked={props.closed} />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
};

export default SideDrawer
