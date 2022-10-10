import "../styles/Webimage.css";
import React from "react";
import pic from "../images/rawpixelid1033760.jpg";


export default function Webimage({source, alt}) {
  return (
    
    <>
      <img src = {pic} alt = "exam" id ="Webimage-start-image" data-testid= "webimage1"/>
      <aria-label htmlFor= "Webimage-start-image" id ="Webimage-start-image-label">Image by rawpixel.com</aria-label>
      </>
  
  );
}
