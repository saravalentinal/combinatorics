import React from 'react'
import Apples from './Apples';
import { Trans, useTranslation } from 'react-i18next';

export default function IsOrderImportant(props) {

  const { t } = useTranslation();
  
  return (
    <>
        <div className="question-block">
            <h2 className='question'> {props.question} </h2>
            <Trans i18nKey="step_one">
              <p className='answer'>{t('answers.step_one')}</p>
            </Trans>
            <Trans i18nKey="step_two">
              <p className='answer'>{t('answers.step_two')}</p>
            </Trans>
            
            <p className='answer_explanation'><span className='number-circle'>{props.step_one_example}</span>
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
            <p><span className='number-circle'>{props.step_two_example}</span></p>
            <p className='answer'>{props.order_example}</p>
        </div>
    </>
  );
}
