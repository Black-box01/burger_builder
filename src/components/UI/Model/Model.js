import React from 'react'
import './Model.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Auxillary/Auxillary'


const Model = (props) => {
return (
        <Aux>
            <Backdrop show={props.show} clicked={props.canceled} />
            <div className='Model' style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0'}}>
                {props.children}
            </div>
        </Aux>
    )
}

export default Model
