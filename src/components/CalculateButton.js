import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CalculateButton() {
  
  const { t } = useTranslation();

  return (
    <>

  <div className='calculate-button'>
        <button type='submit' className='calc-button'>{t('calc.button')}</button>
  </div>

    </>
      
    )
}
