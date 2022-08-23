import React from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function CalculateButton() {
  
  const { t } = useTranslation();

  const [active, setActive] = useState(false);

  const handleCalculate = () => {
    setActive(true);

    setActive(false);

    requestAnimationFrame(() => 
    setActive(true)
    );
  };


  return (
    <>
          <div className='calculate-button'>
            <button type='submit' id={active.toString() + 'CalcButton'} onClick={handleCalculate}>{t('calc.button')}</button>
          </div>
    </>
      
    )
}
