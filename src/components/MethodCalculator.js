import React from 'react'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function MethodCalculator() {

  const { t } = useTranslation();

  const [result, setResult] = useState(['']);

  const [order, setOrder] = useState(['No']);
  const [rep, setRep] = useState(['No']);

  const [activeOrder, setActiveOrder] = useState(false);
  const [activeRep, setActiveRep] = useState(false);

  const [totalNumber, setTotalNumber] = useState(0)
  const [groupNumber, setGroupNumber] = useState(0)


  useEffect(() => {

    mainCalculator();

    }, [totalNumber]);


  useEffect(() => {

    mainCalculator();
  
    }, [groupNumber]);


  useEffect(() => {

    mainCalculator();
    
    }, [activeOrder]);


  useEffect(() => {

    mainCalculator();
    
    }, [activeRep]);


  const HandleChangeTotalNumber = e => {

    setTotalNumber(parseInt(e.target.value, 10));

  }

  const handleChangeGroupNumber = e => {

    setGroupNumber(parseInt(e.target.value, 10));

  } 

  const handleToggleOrder = () => {
    setActiveOrder(!activeOrder)

    if(activeOrder === true){
        setOrder(['Si'])
    }

    if(activeOrder === false){
        setOrder(['No'])
    }
  }


  const handleToggleRep = () => {
    setActiveRep(!activeRep)

    if(activeRep === true){
        setRep(['Si'])
    }

    if(activeRep === false){
        setRep(['No'])
    }
  }


  const mainCalculator = () =>{

    const toggleOrder = order;
    const toggleRep = rep;

/*     console.log('el numero total es ' + totalNumber)
    console.log('el numero del grupo es ' + groupNumber)
    console.log('el valor del toggle order es  ' + toggleOrder)
    console.log('el valor del toggle ref es  ' + toggleRep) */

    function methodCalculator(){

        if(toggleOrder == 'No' && toggleRep == 'No' && (totalNumber > groupNumber)){
            const result = "Combinación sin repetición";
            return result;
        } 

        else if (toggleOrder == 'No' && toggleRep == 'Si' && (totalNumber > groupNumber)){
            const result = "Combinación con repetición";
            return result;
        }

        else if(toggleOrder == 'Si' && toggleRep == 'No' && (totalNumber === groupNumber)){
            const result = "Permutación";
            return result;
        }

        else if(toggleOrder == 'Si' && toggleRep == 'No' && (totalNumber > groupNumber)){
            const result = "Variación sin repetición";
            return result;
        }

        else if(toggleOrder == 'Si' && toggleRep == 'Si' && (totalNumber > groupNumber)){
            const result = "Variación con repetición";
            return result;
        }

        else if(toggleOrder == 'No' && toggleRep == 'No' && totalNumber === 0 && groupNumber === 0){
          const result = "Rellene los campos"
          return result;
        }

        else{
            const result = "Los datos ingresados no coinciden con ningún método";
            return result;
        }
    }

    setResult(methodCalculator());
    
  }


  return (
    <>
    <div className='calc-box-method'>

      <form>
  
        <div className='method-main'>
  
          <div>
            <h2>{t('calc.types')}</h2>
            <input type='number' name='total' onChange={HandleChangeTotalNumber}></input>
          </div>
  
          <div>
            <h2>{t('calc.numberChosen')}</h2>
            <input type='number' name='total2' onChange={handleChangeGroupNumber}></input>
          </div>

          <div className='toggle-div'>
            <h2>{t('calc.order')}</h2>
            <button type='button' onClick={handleToggleOrder}>{order}</button>
          </div>

          <div className='toggle-div'>
            <h2>{t('calc.rep')}</h2>
            <button type='button' onClick={handleToggleRep}>{rep}</button>
          </div>
  
        </div>
  
      </form>

    </div>
  
    <div className='div-result-method'>
          <h2>{result}</h2>
    </div>
    
    </>
      
    )
}
