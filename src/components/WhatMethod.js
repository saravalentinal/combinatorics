import React from 'react'
import { Trans, useTranslation } from 'react-i18next';

export default function WhatMethod(props) {

  const { t } = useTranslation();

  return (
    <>
        <div className="question-block">
            <h2 className='question'> {props.question} </h2>
            <Trans i18nKey="what_method">
              <p className='answer'> {t('answers.what_method')} </p>
            </Trans>
            
            <Trans i18nKey="method_combination">
              <p className='answer'> {t('answers.method_combination')} </p>
            </Trans>

            <Trans i18nKey="permutation">
              <p className='answer'> {t('answers.method_permutation')} </p>
            </Trans>

            <Trans i18nKey="variation">
              <p className='answer'> {t('answers.method_variation')} </p>
            </Trans>

            <Trans i18nKey="variation">
              <p className='answer_explanation'> {t('answers.use_permutation')} </p>
            </Trans>

        </div>
    </>
  );
}
