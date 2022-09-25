import React from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CalculateButton from './CalculateButton';

export default function VariationWithRepetition() {

  /* global BigInt */

  const { t } = useTranslation();

  const [result, setResult] = useState(['']);

  let totalNumber = BigInt(0);
  let groupNumber = BigInt(0);

  const submitHandler = e =>{
    e.preventDefault();
    totalNumber = parseInt(e.target.total.value,10);
    groupNumber = parseInt(e.target.total2.value, 10);

    function variationWithRepetitionFormula(){
      if(isNaN(totalNumber) || isNaN(groupNumber)){
        return '';
      } else {
        const result = BigInt(totalNumber ** groupNumber);
        return result.toString();
      }
    }

    setResult(variationWithRepetitionFormula());

  }

  const eraseHandler = () =>{
    document.getElementById('input-value').value = null;
  }

  const eraseHandlerSecond = () =>{
    document.getElementById('input-value-second').value = null;
  }

  const eraseHandlerResult = () =>{
    document.getElementById('result').innerHTML = "";
  }


  return (
    <>
    <div className='calc-box'>

    <p className='title-method'>{t('examples.var_with_rep_title')}</p>

      <form onSubmit={submitHandler}>
  
        <div className='numbers'>
  
          <div>
            <h2>{t('calc.totalNumber')}</h2>
            <input type='number' name='total' min={1} max={9999} id="input-value"></input>

            <div className='div-eraser-button'>
              <button type='button' onClick={eraseHandler} className="eraser-button">x</button>
            </div>

          </div>
  
          <div>
            <h2>{t('calc.groupNumber')}</h2>
            <input type='number' name='total2' min={1} max={9999} id="input-value-second"></input>

            <div className='div-eraser-button'>
              <button type='button' onClick={eraseHandlerSecond} className="eraser-button">x</button>
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
