import React, { useEffect, useState } from 'react'
import './Navbar.css';

function Navbar() {
   const [show,handleShow] = useState('')

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY >100){
                handleShow(true);
            }else {
                handleShow(false);
            }
        })
        return ()=>{
            window.removeEventListener('scroll');
        }
    },[])



  return (
    <div className={`nav ${show && 'nav_black'}`} >
        <img className='nav_logo' src='http://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='Netflix-Logo'/>
        <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt='Login'/>
    </div>
  )
}

export default Navbar