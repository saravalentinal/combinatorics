import React from 'react'

export default function Apples(props) {
  return (
        <div className='div-apples'>
            <span className={props.color1}><i className="fa-solid fa-apple-whole"></i></span>
            <span className={props.color2}><i className="fa-solid fa-apple-whole"></i></span>
            <span className={props.color3}><i className="fa-solid fa-apple-whole"></i></span>
        </div>
  );
}
