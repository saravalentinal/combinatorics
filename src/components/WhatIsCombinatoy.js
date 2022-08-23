import React from 'react'
import Apples from './Apples';
import { Trans, useTranslation } from 'react-i18next';
import ApplesList from './ApplesList';

export default function WhatIsCombinatory(props) {
  
  const { t } = useTranslation();

  return (
    <div>
        <div className="question-block">
            <h2 className='question'> {props.question} </h2>
            <Trans i18nKey="first">
              <p className='answer'>{t('answers.first')}</p>
            </Trans>
            <p className='answer_explanation'> {props.example_explanation} </p>
            <p className='answer'> {props.first_order} </p>

            <Apples
                    color1 = "firstApple"
                    color2 = "secondApple"
                    color3 = "thirdApple"
            ></Apples>

            <p className='answer'> {props.second_order} </p>

            <Apples
                    color1 = "thirdApple"
                    color2 = "secondApple"
                    color3 = "firstApple"
            ></Apples>

            <p className='answer'> {props.third_order} </p>

            
            <ApplesList></ApplesList>
          

            <Trans i18nKey="sum_up">
              <p className='answer'>{t('answers.sum_up')}</p>
            </Trans>

            <Trans i18nKey="sum_up">
              <p className='answer'>{t('answers.conclusion')}</p>
            </Trans>

        </div>
    </div>
  );
}
