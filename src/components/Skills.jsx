import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
// import { FaCss3Alt } from "react-icons/fa";
// import { FaJs } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
// import { FaC } from "react-icons/fa6";

const Skills = () => {
  return (
    <div className='container' id='skills'>
      <div className="collection">
        <h1 className="sub-title">My <span>Skills</span></h1>
      {/* <span className='skilldesc' >I am a skilled and passionate web developer with experience in creating visually  appearing  and user-friendly websites. I have a strong understanding of design keen eye for detail. I am a proficient  in HTML, CSS, JavaScript, React.js, Redux,  Bootstrap. </span> */}
      
      <h1 className='heading1 fs-3'>Technical Skills </h1>
      <div className="technicalbar">
        <div className="radialbar">
        {/* <span>
        <FaHtml5 style={{color:"#c95d2e", fontSize:"30px"}}/>
        <div className="text">HTML5</div>
        </span> */}
        <svg x='0px' y='0px' viewBox='0 0 200 200'>
          <circle className='progressbar' cx={100} cy={100} r={80}></circle>
          <circle className='path path-1' cx={100} cy={100} r={80}></circle>
        </svg>
        <div className="percentage">95%</div>
        {/* <span>
        <FaHtml5 style={{color:"#c95d2e", fontSize:"30px"}}/>
         <div className="text">HTML5</div>
        </span> */}
        <div className="text" style={{color:"yellow"}}>HTML</div>
        {/* <div className="text"><FaHtml5 style={{color:"#c95d2e", fontSize:"30px"}}/>HTML5</div> */}
        </div>

        <div className="radialbar">
        
        <svg x='0px' y='0px' viewBox='0 0 200 200'>
          <circle className='progressbar' cx={100} cy={100} r={80}></circle>
          <circle className='path path-2' cx={100} cy={100} r={80}></circle>
        </svg>
        <div className="percentage">90%</div>
        <div className="text"style={{color:"yellow"}}>CSS3</div>

        {/* <div className="text"><FaCss3Alt style={{color:"#147bbc", fontSize:"30px"}}/>CSS</div> */}
        </div>

      <div className="radialbar">
        
        <svg x='0px' y='0px' viewBox='0 0 200 200'>
          <circle className='progressbar' cx={100} cy={100} r={80}></circle>
          <circle className='path path-3' cx={100} cy={100} r={80}></circle>
        </svg>
        <div className="percentage">75%</div>
        <div className="text"style={{color:"yellow"}}>JavaScript</div>

        {/* <div className="text"><FaJs style={{color:"#b0bc1e", fontSize:"30px"}}/>JavaScript</div> */}
        </div>

<div className="radialbar">
        
        <svg x='0px' y='0px' viewBox='0 0 200 200'>
          <circle className='progressbar' cx={100} cy={100} r={80}></circle>
          <circle className='path path-4' cx={100} cy={100} r={80}></circle>
        </svg>
        <div className="percentage">80%</div>
        <div className="text"style={{color:"yellow"}}>React</div>

        {/* <div className="text"><FaReact style={{color:"#69bcbc", fontSize:"30px"}}/>React</div> */}
        </div>

<div className="radialbar">
        
        <svg x='0px' y='0px' viewBox='0 0 200 200'>
          <circle className='progressbar' cx={100} cy={100} r={80}></circle>
          <circle className='path path-5' cx={100} cy={100} r={80}></circle>
        </svg>
        <div className="percentage">60%</div>
        <div className="text"style={{color:"yellow"}}>Redux</div>
        </div>

<div className="radialbar">
        
        <svg x='0px' y='0px' viewBox='0 0 200 200'>
          <circle className='progressbar' cx={100} cy={100} r={80}></circle>
          <circle className='path path-6' cx={100} cy={100} r={80}></circle>
        </svg>
        <div className="percentage">78%</div>
        <div className="text"style={{color:"yellow"}}>Bootstrap</div>
        </div>

<div className="radialbar">
        
        <svg x='0px' y='0px' viewBox='0 0 200 200'>
          <circle className='progressbar' cx={100} cy={100} r={80}></circle>
          <circle className='path path-7' cx={100} cy={100} r={80}></circle>
        </svg>
        <div className="percentage">65%</div>
        <div className="text"style={{color:"yellow"}}>Material UI</div>
        </div>

      </div>
{/* <div className="radialbar">
        
        <svg x='0px' y='0px' viewBox='0 0 200 200'>
          <circle className='progressbar' cx={100} cy={100} r={80}></circle>
          <circle className='path path-1' cx={100} cy={100} r={80}></circle>
        </svg>
        <div className="percentage">75%</div>
        <div className="text">HTML5</div>
        </div> */}
        </div>
    </div>
  )
}

export default Skills
