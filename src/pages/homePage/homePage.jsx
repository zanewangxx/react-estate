import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/searchBar/SearchBar'

const homePage = () => {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <h1 className='title'>Find A Home, Get Your Own Place</h1>
        <p>
        Experienced real estate agent committed to finding your dream home. 
        Personalized service with a deep understanding of the local market. 
        Whether buying or selling, We'll guide you every step of the way.
        </p>
        <SearchBar />
        <div className="boxes">
          <div className="box">
            <h1>6+</h1>
            <h2>Years of Experience</h2>
          </div>
          <div className="box">
            <h1>16</h1>
            <h2>Award</h2>
          </div>
          <div className="box">
            <h1>1000+</h1>
            <h2>Property</h2>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="picture"/>
      </div>
    </div>
  )
}

export default homePage
