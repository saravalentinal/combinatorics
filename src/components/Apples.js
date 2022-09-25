import React from 'react'

export default function Apples(props) {
  return (
        <div className='div-apples'>
            <span className={props.firstColor}><i className={props.firstObject}></i></span>
            <span className={props.secondColor}><i className={props.secondObject}></i></span>
            <span className={props.thirdColor}><i className={props.thirdObject}></i></span>
        </div>
  );
}
