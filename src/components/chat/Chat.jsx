import React, { useState } from 'react'
import "./chat.scss"
import { userData } from '../../simpleData/testData'

const Chat = () => {
    const [chat, setChat] = useState(true)
    return (
    <div className='chat'>
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src={userData.img} alt="image" />
                <span>Zane Wang</span>
                <p>Lorem ipsum dolor sit amet consectetur...!</p>
            </div>
            <div className="message">
                <img src={userData.img} alt="image" />
                <span>Zane Wang</span>
                <p>Lorem ipsum dolor sit amet consectetur...!</p>
            </div>
            <div className="message">
                <img src={userData.img} alt="image" />
                <span>Zane Wang</span>
                <p>Lorem ipsum dolor sit amet consectetur...!</p>
            </div>
            <div className="message">
                <img src={userData.img} alt="image" />
                <span>Zane Wang</span>
                <p>Lorem ipsum dolor sit amet consectetur...!</p>
            </div>
        </div>

        {chat && (
        <div className="chatBox">
            <div className="top">
                <div className="user">
                    Zane Wang
                </div>
                <span className='close' onClick={() => setChat(null)}>X</span>
            </div>
            <div className="center">
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet consectetur!</p>
                    <span>date time</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet consectetur!</p>
                    <span>date time</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet consectetur!</p>
                    <span>date time</span>
                </div>
            </div>
            <div className="bottom">
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>)}
    </div>
    )
}

export default Chat
