import React from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CalculateButton from './CalculateButton';

export default function CombinationWithRepetition() {

  /* global BigInt */

  const { t } = useTranslation();

  const [result, setResult] = useState(['']);

  let totalNumber = BigInt(0);
  let groupNumber = BigInt(0);

  const submitHandler = e =>{
    e.preventDefault();
    totalNumber = parseInt(e.target.total.value,10);
    groupNumber = parseInt(e.target.total2.value, 10);
    
    function factorial (numberToFactorial) {
      let total = BigInt(1); 
      for (let i=BigInt(1); i<=numberToFactorial; i++) {
        total = total * i; 
      }
      return total; 
    }

    function combinationWithRepetitionFormula(){
      if(isNaN(totalNumber) || isNaN(groupNumber)){
        return '';
      }else{
        const result = BigInt(factorial(totalNumber + (groupNumber - 1)) / (factorial(totalNumber - 1) * factorial(groupNumber)));
        return result.toString();
      }
    }

    setResult(combinationWithRepetitionFormula());

    e.target.total.value = '';
    e.target.total2.value = '';
  }


  return (
    <>
    <div className='calc-box'>

      <p className='title-method'>{t('examples.comb_with_rep_title')}</p>

      <form onSubmit={submitHandler}>
  
        <div className='numbers'>
  
          <div>
            <h2>{t('calc.totalNumber')}</h2>
            <input type='number' name='total' min={1} max={9999}></input>
          </div>
  
          <div>
            <h2>{t('calc.groupNumber')}</h2>
            <input type='number' name='total2' min={1} max={9999}></input>
          </div>
  
        </div>
  
      <CalculateButton></CalculateButton>
  
      </form>
    </div>
  
    <div className='div-result-method'>
          <h2>{t('calc.result')}</h2>
          <h3>{result}</h3>
    </div>
    
    </>
      
    )
}
