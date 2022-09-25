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

  }

  const eraseHandler = () =>{
    document.getElementById('input-value').value = null;
  }

  const eraseHandlerResult = () =>{
    document.getElementById('result').innerHTML = "";
  }
  
  return (
    <>
    <div className='calc-box'>
      <form onSubmit={submitHandler}>
  
        <div className='numbersPermutation'>
  
          <div>
            <h2>{t('calc.totalNumber')}</h2>
            <input type='number' name='total' min={1} max={9999} id="input-value"></input>

            <div className='div-eraser-button'>
              <button type='button' onClick={eraseHandler} className="eraser-button">x</button>
            </div>
          </div>
  
        </div>
  
         <CalculateButton></CalculateButton>

      </form>
    </div>
  
    <div className='div-result-method'>
          <div className='div-eraser-button'>
              <button type='button' onClick={eraseHandlerResult} className="eraser-button-result">x</button>
          </div>
          <h2>{t('calc.result')}</h2>
          <h3 id="result">{result}</h3>
    </div>
    
    </>
      
    )
}
