import React from 'react'
import './Popular.css'
import products from '../Assets/all_products';
import Item from '../Items/Item'

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />

        <div className="popular-item">
        {products.map((item, index) => { 
    return <Item key={index} id={item.id} name={item.name} image={item.image} category={item.category}  new_price={item.new_price} old_price={item.old_price} /> 
})}
        </div>
      </div>

  )
}

export default Popular