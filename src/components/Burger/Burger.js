import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    //! changing the ingredients from an object to an array which we got from the burger builder state property

    let transformedIngredients = Object.keys(props.ingredients) //&this converts each object into an array of string

    .map(igKey => {
        return [...Array(props.ingredients[igKey])] //& this gives us an array of two or more elements depending on the number we set in the object of the state

        .map((_, i) => {
           return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
        //& the first item in the map funtion is not important because i only want the key value so that's why it is represented with a dash. so am returning the burger ingredient as a tag and the key is the number of times it will occur and the type is the name of the ingredient.
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []); //& we use the reduce function to flatten the array. we use it to pull out every array created and then place it in one array so that we can tell when we do not have any item in an array. the reduce changes an array to something else and it takes in two value which is the previous value and the current value.

    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding some ingredient!</p>
    }

    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default Burger
