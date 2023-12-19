import React from 'react' 
// import Image from "../assets/download.jfif"
import Imga from "../assets/my.png"
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Cursor, useTypewriter} from "react-simple-typewriter";



const Intro = () => {

  const [text]= useTypewriter({
    words:[ "Web Developer"],
    loop:true,
    typeSpeed:20,
    deleteSpeed:10,
    delaySpeed:2000,
  });

  return (
<div className="intro card mb-3 mt-5" id='intro'>
  <div className="row g-0 mt-5">
  <div className="col-md-4">
    {/* <div className="box">
      <img src={Imga} alt="" />
    </div> */}
      <img src={Imga} className="img-fluid rounded-start"   alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3>Hello, It's Me</h3>
        <h1>Upma Jain</h1>
        <h3>And I'm a &nbsp;<span>{text}</span></h3>
        <p>I am a skilled web developer. My passion lies in creating captivating web design and implementing them into frontend development. I leavering my creativity to produce visually appealing and user friendly websites.</p>
        
      <div className="home-sci d-flex">
        <a href="https://www.linkedin.com/in/upma-jain-b56566275/" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com/IUpmajain" target='_blank'><FaGithubSquare/></a>
        <p>+91 9340298408</p>
      </div>
      </div>
      
    </div>

  </div>
</div>
  )
}

export default Intro
