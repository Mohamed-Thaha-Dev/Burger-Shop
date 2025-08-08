import React, { useContext } from 'react'
import './DisplayFood.css'
import { StoreContext } from '../../Context/StoreContext'
import FootItem from '../FoodItem/FootItem'

const DisplayFood = ({category}) => {
  const {foodList} = useContext(StoreContext)
  return (
    <div className='food_display' id='food_display'>
      <h2>Top Dishe Near You</h2>
      <div className="food_display_list">
        {
          foodList.map((item,index)=>{
            if(category ==="All" || category === item.category){

              return <FootItem key={index} id = {item.id} name = {item.name} description = {item.description} price = {item.price} image = {item.image} type = {item.type}/>
            }
          })
        }
      </div>

    </div>
  )
}

export default DisplayFood