import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className='Phonetic'>
      <p><a href={props.phonetic.audio} target='blank' rel='noreferrer'>
        Listen
      </a>  
       <span className="text">{props.phonetic.text}</span></p>
    </div>
  );
}
