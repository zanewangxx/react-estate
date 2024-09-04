import React from 'react'
import "./singlePage.scss"
import { singlePostData, userData} from "../../simpleData/testData"
import Slider from '../../components/slider/Slider'
import Map from '../../components/map/Map'

const SinglePage = () => {
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src='/pin.png' alt="logo" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="image" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className='title'>General</p>
            <div className="listVertical">
              <div className="feature">
                <img src="utility.png" alt="picture" />
                <div className="featureText">
                  <span>Utilities</span>
                  <p>Renter is responsible</p>
                </div>
              </div>
              <div className="feature">
                <img src="pet.png" alt="picture" />
                <div className="featureText">
                  <span>Pet Policy</span>
                  <p>Pets Allowed</p>
                </div>
              </div>
              <div className="feature">
                <img src="fee.png" alt="picture" />
                <div className="featureText">
                  <span>Bond</span>
                  <p>4 Weeks</p>
                </div>
              </div>
            </div>

          <p className='title'>Size</p>
            <div className="sizes">
              <div className="size">
                <img src="/size.png" alt="picture" />
                <span>80 sqft</span>
              </div>
              <div className="size">
                <img src="/bed.png" alt="picture" />
                <span>2 beds</span>
              </div>
              <div className="size">
                <img src="/bath.png" alt="picture" />
                <span>1 bathroom</span>
              </div>
            </div>

          <p className='title'>Nearby Places</p>
            <div className="listHorizontal">
              <div className="featureText">
                <img src="/school.png" alt="picture" />
                <span>School</span>
                <p>250m away</p>
              </div>
              <div className="featureText">
                <img src="/pet.png" alt="picture" />
                <span>Transportation</span>
                <p>100m away</p>
              </div>
              <div className="featureText">
                <img src="/fee.png" alt="picture" />
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>

          <p className='title'>Location</p>
            <div className="mapContainer">
              <Map items={[singlePostData]}/>
            </div>
            <div className="buttons">
              <button>
                <img src='/chat.png' alt="button" />
                Send a Message
              </button>
              <button>
                <img src='/save.png' alt="button" />
                Save the Place
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
