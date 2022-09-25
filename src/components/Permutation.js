import React from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CalculateButton from './CalculateButton';

export default function Permutation() 
{

  /* global BigInt */

  const { t } = useTranslation();

  const [result, setResult] = useState(['']);

  let totalNumber = BigInt(0);

  const submitHandler = e =>{
    e.preventDefault();
    totalNumber = parseInt(e.target.total.value,10);
    
    function factorial (numberToFactorial) {
      let total = BigInt(1); 
      for (let i=BigInt(1); i<=numberToFactorial; i++) {
        total = total * i; 
      }
      return total; 
    }

    function permutationFormula(){
      if(isNaN(totalNumber)){
        return '';
      }else{
        const result = BigInt(factorial(totalNumber));
        return result.toString();
      }
    }

    setResult(permutationFormula());

    e.target.total.value = '';
  }
  
  return (
    <>
    <div className='calc-box'>
      <form onSubmit={submitHandler}>
  
        <div className='numbersPermutation'>
  
          <div>
            <h2>{t('calc.totalNumber')}</h2>
            <input type='number' name='total' min={1} max={9999}></input>
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
