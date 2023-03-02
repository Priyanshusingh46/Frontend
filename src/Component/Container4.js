import React from 'react'
import image from "../Images/building.png"
function Container4() {
  return (
    <div>
        <div className='container4headingdiv'>
            <h1 id="container2h1" >We create stories.</h1>
            <p id="container2p" >A killer narrative will turn your readers into raving fans.</p>
        </div>

        <div className='soliddiv'></div>

        <div className='imagecontainer'>

            <div className='imagecontainerdiv'>
                <img id="container4img"src={image} alt="error"/>
                <h3 id="c4h3">OVERCOMING CREATIVE BLOCK</h3>
                <p id="c4p">Brain Gardner - May 1, 2017</p>
            </div>


            <div className='imagecontainerdiv'>
                <img id="container4img"src={image} alt="error"/>
                <h3 id="c4h3" >WHY COMMUNICATION IS KEY</h3>
                <p id="c4p">Brain Gardner - May 1, 2017</p>
            </div>


            <div className='imagecontainerdiv'>
                <img id="container4img"src={image} alt="error"/>
                <h3 id="c4h3">THE PATH OF LEAST RESISTANCE</h3>
                <p id="c4p">Brain Gardner - May 1, 2017</p>
            </div>

            <div className='imagecontainerdiv'>
                <img id="container4img"src={image} alt="error"/>
                <h3 id="c4h3" >HOW TO REACH NEW HEIGHTS</h3>
                <p id="c4p">Brain Gardner - May 1, 2017</p>
            </div>

        </div>
    </div>
  )
}

export default Container4