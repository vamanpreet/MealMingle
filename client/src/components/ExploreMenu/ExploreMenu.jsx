import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
import PropTypes from 'prop-types'

const ExploreMenu = (props) => {
    const {category, setCategory} = props

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='expolre-menu-text'>Choose from a diverse menu feturing a delectable array of dishes. Our mission is to satisfy satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index)=>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

ExploreMenu.propTypes = {
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
}

export default ExploreMenu
