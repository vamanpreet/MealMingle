import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import PropTypes from 'prop-types'

const FoodDisplay = (props) => {
    const {category} = props

    const {food_list} = useContext(StoreContext)

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if(category === "All" || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>
        </div>
    )
}

FoodDisplay.propTypes = {
    category: PropTypes.string.isRequired // Ensures category is a string and required
};

export default FoodDisplay
