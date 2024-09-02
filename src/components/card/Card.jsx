import React from 'react'
import { Link } from "react-router-dom"
import "./card.scss"

const Card = ({item}) => {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="image" />
      </Link>
      <div className="textContainer">
        <h2 className='title'>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className='address'>
          <img src='/pin.png' alt='logo' />
          <span>{item.address}</span>
        </p>
        <p className='price'>$ {item.price}</p>
        <div className='bottom'>
          <div className="features">
            <div className="feature">
              <img src='/bed.png' alt='logo' />
              <span>{item.bedrooms} bedroom</span>
            </div>
            <div className="feature">
              <img src='/bath.png' alt='logo' />
              <span>{item.bathrooms} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className='icon'>
              <img src='/save.png' alt='logo' />
            </div>
            <div className='icon'>
              <img src='/chat.png' alt='logo' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
