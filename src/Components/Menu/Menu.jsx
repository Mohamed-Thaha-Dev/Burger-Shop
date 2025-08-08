import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'

const Menu = ({category,setCategory}) => {
  return (
    <div className='explore_menu' id='explore_menu'>
      <h1>Explore Our Menu</h1>
      <p className='expolre_menu_text'> At Eat Vibe, we serve sizzling burgers, cheesy pizzas, and scrumptious sandwiches made with passion and premium ingredients. Our menu features juicy patties, handcrafted sauces, oven-fresh crusts, and crispy bites to give you the ultimate comfort food experience. </p>
      <div className="explore_menu_list">
        {
          menu_list.map((item,index)=>{
            return(
              <div onClick={()=>setCategory(prev=>prev===item.menu_name ?"All":item.menu_name)} key={item.menu_name} className='expolre_menu_list_item'>
                  <img className={category===item.menu_name? "active":""} src={item.menu_image} alt="" />
                  <p>{item.menu_name}</p>
              </div>
            )
          })
        }
      </div>
      <hr/>
    </div>
  )
}

export default Menu