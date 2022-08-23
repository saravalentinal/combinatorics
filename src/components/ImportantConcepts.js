import React from 'react'
import { Trans, useTranslation } from 'react-i18next';

export default function ImportantConcepts(props) {
  
  const { t } = useTranslation();

  return (
    <>
        <div className="question-block">
            <h2 className='question'> {props.question} </h2>
            <Trans i18nKey="n_number">
              <p className='answer'>{t('answers.n_number')}</p>
            </Trans>
            <Trans i18nKey="r_number">
              <p className='answer'>{t('answers.r_number')}</p>
            </Trans>
            <Trans i18nKey="r_second_example">
              <p className='answer_explanation'>{t('answers.second_example')}</p>
            </Trans>
        </div>
    </>
  );
}
  