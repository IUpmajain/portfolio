import React from 'react'
import Work1 from "../assets/weather_app_screens.png"
import Work2 from "../assets/qr.webp"
import Work3 from "../assets/work3.png"
import Work4 from "../assets/feedback.png"
import Work5 from "../assets/quiz.png"
import Work6 from  "../assets/coin.jpg"
import Work7 from "../assets/eshop.jpg"
import Work8 from "../assets/pss.jpg"

const Projects = () => {

  

  return (
    <div className='container ' id='project'>
      <h2 className="worktitle">MY <span>PROJECTS</span></h2>


     <div className="projectlist">
{/* music Gallery */}
      <div className="work">
        <a href="https://iupmajain.github.io/music/" target='_blank'><img src={Work3} width={300} height={400} alt="" /></a>
        <div className="layer">
          <h3 >Music Gallery</h3>
          <p>It is created by HTML, CSS and JavaScript. Listen the music, get free from all diagonostic things happen in a day.</p>
          <a href="https://iupmajain.github.io/music/" target='_blank'><i class="bi bi-box-arrow-up-right"></i></a>
          
        </div>
      </div>

{/* feedback app */}
      <div className="work">
        <a href="https://iupmajain.github.io/feedbackapp/" target='_blank'><img src={Work4} width={300} height={400} alt="" /></a>
        <div className="layer">
          <h3>Feedback App</h3>
          <p>It is created by HTML, CSS and JavaScript. Give rate.</p>
          <a href="https://iupmajain.github.io/feedbackapp/" target='_blank'><i class="bi bi-box-arrow-up-right"></i></a>
          
        </div>
      </div>

{/* weather app */}
      <div className="work">
        <a href="https://iupmajain.github.io/weatherapp/" target='_blank'><img src={Work1} width={300} height={400} alt="" /></a>
        <div className="layer">
          <h3>Weather App</h3>
          <p>It is created by HTML, CSS and JavaScript. It provides the weather of desired place.</p>
          <a href="https://iupmajain.github.io/weatherapp/" target='_blank'><i class="bi bi-box-arrow-up-right"></i></a>
        </div>
      </div>


{/* qr app */}
      <div className="work">
        <a href="https://iupmajain.github.io/qrcode/" target='_blank'><img src={Work2} width={300} height={400} alt="" /></a>
        <div className="layer">
          <h3>QR Generator</h3>
          <p>It is created by HTML, CSS and JavaScript. It generates the QR to use for commercial use.</p>
          <a href="https://iupmajain.github.io/qrcode/" target='_blank'><i class="bi bi-box-arrow-up-right"></i></a>
        </div>
      </div>

{/* quiz app */}
      <div className="work">
        <a href="https://iupmajain.github.io/quizapp/" target='_blank'><img src={Work5} width={300} height={400} alt="" /></a>
        <div className="layer">
          <h3>Quiz App</h3>
          <p>It is created by HTML, CSS and JavaScript. It's a game, play and enjoy.</p>
          <a href="https://iupmajain.github.io/quizapp/" target='_blank'><i class="bi bi-box-arrow-up-right"></i></a>
        </div>
      </div>

{/* crypto app */}
      <div className="work">
        <a href="https://coinhunter-iota.vercel.app/"><img src={Work6} width={300} height={400} alt="" /></a>
        <div className="layer">
          <h3>CryptoCoin App</h3>
          <p>It is created by HTML, CSS , React, and Bootstrap. It provides the data about cryptocoin.</p>
          <a href="https://coinhunter-iota.vercel.app/"><i class="bi bi-box-arrow-up-right"></i></a>
        </div>
      </div>


{/* e-shop */}
      <div className="work">
        <a href="https://eshop-rouge.vercel.app/" target='_blank'><img src={Work7} width={300} height={400} alt="" /></a>
        <div className="layer">
          <h3>E-Commerce</h3>
          <p>It is created by HTML, CSS, Bootstrap, React and Redux. It's a online platform for shopping with add to cart functionality .</p>
          <a href="https://eshop-rouge.vercel.app/" target='_blank'>  <i class="bi bi-box-arrow-up-right"></i></a>
        
        </div>
      </div>




{/* password Generator */}
      <div className="work">
        <a href="https://password-app-phi.vercel.app/" target='_blank'><img src={Work8} width={300} height={400} alt="" /></a>
        <div className="layer">
          <h3>Password Generator</h3>
          <p>It is created by HTML, CSS and React. It provides a password on the given selection of checkbox .</p>
          <a href="https://password-app-phi.vercel.app/" target='_blank'><i class="bi bi-box-arrow-up-right"></i></a>
          
        </div>
      </div>


     </div>

     </div>
  )
}

export default Projects
