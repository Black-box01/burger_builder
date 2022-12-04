import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
];

const BuildControls = (props) => (
        <div className='BuildControls'>
        <p className='price'>Current Price of Burger: <b>₦</b><span> {Math.floor(props.price)}</span></p>
            {controls.map(ctrl => (
                <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                subtract={() => props.ingredientSubtracted(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button 
            className='OrderButton'
            disabled={!props.purchaseable}
            onClick={props.ordered}
            >PLACE ORDER</button>
        </div>
    );


export default BuildControls
