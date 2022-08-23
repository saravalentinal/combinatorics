import React from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CalculateButton from './CalculateButton';

export default function VariationWithoutRepetition() {

  const { t } = useTranslation();

  const [result, setResult] = useState(['']);

  const submitHandler = e =>{
    e.preventDefault();
    const totalNumber = parseInt(e.target.total.value,10);
    const groupNumber = parseInt(e.target.total2.value, 10);
    
    function recursiveFactorial(numberToFactorial){
      if (numberToFactorial === 0)
      {
        return 1;
      }

      return numberToFactorial * recursiveFactorial(numberToFactorial-1)
    }

    function variationWithoutRepetitionFormula(){
      const result = recursiveFactorial(totalNumber) / recursiveFactorial(totalNumber - groupNumber);
      return result
    }

    setResult(variationWithoutRepetitionFormula());

    e.target.total.value = '';
    e.target.total2.value = '';
  }



  return (
    <>
    <div className='calc-box'>
      <form onSubmit={submitHandler}>
  
        <div className='numbers'>
  
          <div>
            <h2>{t('calc.totalNumber')}</h2>
            <input type='number' name='total'></input>
          </div>
  
          <div>
            <h2>{t('calc.groupNumber')}</h2>
            <input type='number' name='total2'></input>
          </div>
  
        </div>
  
        <CalculateButton></CalculateButton>
  
      </form>
    </div>
  
    <div className='div-result'>
          <h2 className='result'>{t('calc.result')} {result} </h2>
    </div>
    
    </>
      
    )
}
