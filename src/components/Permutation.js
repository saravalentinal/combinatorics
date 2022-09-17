import React from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CalculateButton from './CalculateButton';

export default function Permutation() 
{

  const { t } = useTranslation();

  const [result, setResult] = useState(['']);

  const submitHandler = e =>{
    e.preventDefault();
    const totalNumber = parseInt(e.target.total.value,10);
    
    function recursiveFactorial(numberToFactorial){
      if (numberToFactorial === 0)
      {
        return 1;
      }

      return numberToFactorial * recursiveFactorial(numberToFactorial-1)
    }

    function permutationFormula(){
      if(isNaN(totalNumber)){
        return '';
      }else{
        const result = recursiveFactorial(totalNumber);
        return result;
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
            <input type='number' name='total'></input>
          </div>
  
        </div>
  
         <CalculateButton></CalculateButton>

      </form>
    </div>
  
    <div className='div-result-method'>
          <h2>{t('calc.result')} {result} </h2>
    </div>
    
    </>
      
    )
}
