import React from 'react'
import { Trans, useTranslation } from 'react-i18next';

export default function Repetition(props) {

  const { t } = useTranslation();

  return (
    <>
        <div className="question-block">
            <h2 className='question'> {props.question} </h2>
            <Trans i18nKey="repetition_concept">
              <p className='answer'>{t('answers.repetition_concept')}</p>
            </Trans>

            <Trans i18nKey="repetition_example">
              <p className='answer_explanation'>{t('answers.repetition_example')}</p>
            </Trans>
        </div>
    </>
  );
}
