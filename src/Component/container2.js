import React from 'react'

function container2() {
  return (
    <div>
        <div className='container2heading'>
        <h1 id="container2h1">We build  experience.</h1>
        <p id="container2p">A minimalist approach is the only way to design a website</p>
        </div>

        <div className='soliddiv'></div>
        <div className='cardcontainer'>
            <div className='cards'>
                <h1 id="c2h">DESIGN</h1>
                <p id="cardspara">
                    With an emphasis an typography, white space, and mobile-optimized design, your website
                    will look absoluetly breathtaking.
                </p>
                <div className='container2button' >
                    <p id="buttonName" >Learn More</p>
                </div>
            </div>

            <div className='cards' >
            <h1 id="c2h" >CONTENT</h1>
                <p id="cardspara" >
                    We help creative entrepreneurs build their digital business by focusing on three key elements
                    of a successful online platform.
                </p>
                <div className='container2button'>
                    <p id="buttonName">Learn More</p>
                </div>
            </div>



            <div className='cards' >
            <h1 id="c2h" >STRATEGY</h1>
                <p id="cardspara">
                    With an emphasis an typography, white space, and mobile-optimized design, your website
                    will look absoluetly breathtaking
                </p>
                <div className='container2button' >
                    <p id="buttonName" >Learn More</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default container2