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
                    firstObject = "fa-solid fa-pencil"
                    secondObject = "fa-solid fa-calculator"
                    thirdObject = "fa-sharp fa-solid fa-clock"

                    firstColor = "firstApple"
                    secondColor = "secondApple"
                    thirdColor = "thirdApple"
            ></Apples>
            <p className='divisory_line'></p>
            <Apples
                    firstObject = "fa-sharp fa-solid fa-clock"
                    secondObject = "fa-solid fa-calculator"
                    thirdObject = "fa-solid fa-pencil"

                    firstColor = "thirdApple"
                    secondColor = "secondApple"
                    thirdColor = "firstApple"
            ></Apples>
            </p>

            <p className='answer'>{props.order_example}</p>
        </div>
    </>
  );
}
