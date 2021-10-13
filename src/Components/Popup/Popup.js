

import './Popup.css'
import React, { useEffect, useState } from "react";
import {Button} from 'react-bootstrap';
//import { BsFillArrowUpCircleFill } from "react-icons/bs";



const Popup=()=> {
  

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  

//scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className="scroll-to-top">
      {
        <div className="up-btn" >
         
          <Button variant="outline-secondary" onClick={scrollToTop}>Go to top </Button>
        </div>
      }
    </div>
  );
}
export default Popup;