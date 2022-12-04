import React from 'react'
import Aux from '../../../hoc/Auxillary/Auxillary'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
            <span style={{fontWeight: 700, textTransform: 'capitalize'}} >
            {igKey}
            </span> : {props.ingredients[igKey]}
            </li>
        );
    })
    
    return (
        <Aux>
            <h3>Your Order!!! </h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: <span style={{borderTop: '3px solid brown', borderBottom: '3px solid brown', padding: '3px 6px', fontWeight: '900', fontSize: '20px'}}>₦ {Math.round(props.price)}</span></strong></p>
            <Button btnType='Danger' clicked={props.canceled}>CANCLE</Button>
            <Button btnType='Success' clicked={props.continue}>CONTINUE TO CHECKOUT</Button>
        </Aux>
    )
}

export default OrderSummary
