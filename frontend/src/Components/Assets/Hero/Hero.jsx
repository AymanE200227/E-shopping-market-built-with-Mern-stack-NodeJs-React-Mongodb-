import React from 'react'
import Handicon from "../Hand.png"
import './Hero.css'
import Hero from "../Hero.png"
import Snowman from "../snowman.png"
const hero = () => {
  return (
    <div className="container">
        <div className="left-side">
            <div className="box">
            <h2>NEW ARRIVALS ONLY</h2>
            <div className="hand-icon">
            <p>New</p>
                <img src={Handicon} alt="" />
            </div>
            <p>Collections</p>
            <p>for everyone !</p>
            <div className="btn-latest">
            <button>Latest Collections</button><span><img className='snowman' src={Snowman} alt="" /></span>
            </div>
            </div>
        </div>
        <div className="right-side">
          <img src={Hero} alt="" />
        </div>
    </div>
  )
}

export default hero