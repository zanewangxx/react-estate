import React from 'react'
import "./profile.scss"
import { userData } from '../../simpleData/testData'
import List from '../../components/list/List'
import Chat from '../../components/chat/Chat'

const Profile = () => {
  return (
    <div className='profilePage'>
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>

          <div className="info">
            <span>
              Avator:
              <img src={userData.img} alt="image" />
            </span>
            <span>Username: <b>Zane Wang</b></span>
            <span>Email: <b>zane@email.com</b></span>
          </div>

          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>

          <List />

          <div className="title">
            <h1>Saved List</h1>
          </div>

          <List />

        </div>
      </div>

      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default Profile
