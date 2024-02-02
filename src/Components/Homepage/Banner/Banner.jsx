import React from 'react';
import Button from 'react-bootstrap/Button';
import './Banner.css';

function Banner() {
  return (
    <>
    <div className='banner position-relative'>
    <video width="100%" autoPlay loop muted>
       <source  src="1.mp4" type="video/mp4"/>
    </video>
    
    <div className='text-center text-white py-5 position-absolute start-0 w-100' style={{top:"25%"}}>
        <img src='logo192.png' alt="logo" width={120} className='logorotate'/>
        <h1>CNC WEB WORLD</h1>
        <h2>Remove Your Fresher Tag</h2>
        <Button variant="primary" className='me-3'>Learn React</Button>
      <Button variant="secondary">Learn JAVA</Button>

        
    </div>
    </div>
    </>
  )
}

export default Banner;