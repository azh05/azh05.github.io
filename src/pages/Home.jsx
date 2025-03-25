import React from "react";
import NavBar from "../components/NavBar";
import '../styles/Home.css'
import img from '../assets/IMG_0850.JPG'; // Import the image

function Home() {
  return (
    <div className="">  
      <NavBar />
      <div className="content">
        <img src={img} alt="Description" className="left-image" />
        <div className="text-content">
          <h1>Greetings and felicitations!</h1>
          <p>
            My name is Anthony Zhao, and I am a sophomore at UCLA, pursuing a double major in Computer Science and Applied Mathematics (on track to graduate with Honors). 
            I enjoy watching the Boston Celtics, making music, and playing board and video games in my free time. I am interested in pursuing a career in Software Engineering, Research, and content creation! 
            Some of my favorite Youtube channels right now are Fern, 3Blue1Brown, Not David, and JxmyHighroller.
            <br></br><br></br>
            At UCLA, I'm involved in Bruin Sports Analytics, Chinese Music Ensemble, and Creative Labs. 
            <br></br><br></br>
            Feel free to reach out at azhao05 [at] ucla [dot] edu.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
