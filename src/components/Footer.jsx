import React from 'react'
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='d-flex  justify-content-around mt-5 bg-primary p-1 flex-wrap'>
      <h6>copyright@Upmajain || All right received</h6>
      <div>
        <a href="https://github.com/IUpmajain" className='text-white fs-5'><FaGithubSquare/></a>
        <a href="https://www.linkedin.com/in/upma-jain-b56566275/"><i className="bi bi-linkedin text-white ms-2"></i></a>
        <a href="" className='text-white text-decoration-none ms-2'>+91 9340298408</a>
        <a href="" className='text-white text-decoration-none ms-2'>upmajain2305@gmail.com</a>

        </div>
    </div>
  )
}

export default Footer
