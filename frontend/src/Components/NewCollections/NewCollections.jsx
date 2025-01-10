import React from 'react'
import './NewCollections.css'
import data from '../Assets/all_products2'
import Item from '../Items/Item'

const NewCollections = () => {
  return (
    <div className="newcollections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {data.map((item,i)=>{
               return <Item key={i} id={item.id} name={item.name} image={item.image} category={item.category}  new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections