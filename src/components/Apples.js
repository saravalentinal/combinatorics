import React from 'react'

export default function Apples(props) {
  return (
        <div className='div-apples'>
            <span class={props.firstColor}><i class={props.firstObject}></i></span>
            <span class={props.secondColor}><i class={props.secondObject}></i></span>
            <span class={props.thirdColor}><i class={props.thirdObject}></i></span>
        </div>
  );
}
