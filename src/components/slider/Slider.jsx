import React, { useState } from 'react'
import "./slider.scss"

const Slider = ({images}) => {
    const [imageIndex, setImageIndex] = useState(null);
    const changeSlide = (direction) => {
        if(direction === "left"){
            if(imageIndex === 0){
                setImageIndex(images.length - 1);
            }else{
                setImageIndex(imageIndex - 1);
            }
        }else{
            if (imageIndex === images.length - 1){
                setImageIndex(0)
            }else{
                setImageIndex(imageIndex + 1)
            }
        }
    };

  return (
    <div className='slider'>
        {imageIndex !== null &&(<div className="fullSlider">
            <div className="arrow" onClick={() => changeSlide("left")}><img src="/arrow.png" alt="image" /></div>
            <div className="imgContainer">
                <img src={images[imageIndex]} alt="image" />
            </div>
            <div className="arrow" onClick={() => changeSlide("right")}><img src="/arrow.png" alt="image" className='right'/></div>
            <div className="close" onClick={() => setImageIndex(null)}>X</div>
        </div>)}
      <div className="bigImage">
        <img src={images[0]} alt="image" onClick={() => setImageIndex(0)}></img>
      </div>
      <div className="smallImage">
        {images.slice(1).map((image, index) => (
            <img src={image} alt='image' key={index} onClick={() => setImageIndex(index+1)}/>
        ))}
      </div>
    </div>
  )
}

export default Slider
