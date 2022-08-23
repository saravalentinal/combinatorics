import React from 'react'
import Apples from './Apples';

export default function IsOrderImportant(props) {
  return (
    <>
        <div className="question-block">
            <h2 className='question'> {props.question} </h2>
            <p className='answer'>{props.step_one}</p>
            <p className='answer'>{props.step_two}</p>
            <p className='answer_explanation'>{props.step_one_example}
            <Apples
                    color1 = "firstApple"
                    color2 = "secondApple"
                    color3 = "thirdApple"
            ></Apples>
            <p className='divisory_line'></p>
            <Apples
                    color1 = "thirdApple"
                    color2 = "firstApple"
                    color3 = "secondApple"
            ></Apples>
            </p>

            <p className='answer'>{props.order_example}</p>
        </div>
    </>
  );
}
