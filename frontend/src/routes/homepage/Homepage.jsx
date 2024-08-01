import './homepage.css'
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
    const [typingStatus, setTypingStatus] = useState("human1");
  return (
    <div className='homepage'>
        <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>CHAT FUSION</h1>
        <h2>Transform Your Tasks with AI-driven Efficiency</h2>
        <h3>
        Meet our AI chatbot: your smart assistant for efficient task management and increased productivity.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>

      <div className="right">
        <div className="imgContainer">
            <div className='bgContainer'>

            <div className="bg"></div>
            </div>
            <img src="/bot.png" alt="" className="bot" />
            <div className='chat'>
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
                <TypeAnimation
              sequence={[
               
                "Human:We produce food for Mice",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce syrup for chocolates",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2:We produce jam for People",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Children",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />

            </div>

        </div>
        
      </div>

      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
     
    </div>
  )
}

export default Homepage