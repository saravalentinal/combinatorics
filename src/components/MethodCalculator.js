import React from 'react'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function MethodCalculator({children, onClick}) {

  const { t } = useTranslation();

  const [result, setResult] = useState(['']);

  const [order, setOrder] = useState(['No']);
  const [rep, setRep] = useState(['No']);

  const [activeOrder, setActiveOrder] = useState(false);
  const [activeRep, setActiveRep] = useState(false);

  const [totalNumber, setTotalNumber] = useState(0)
  const [groupNumber, setGroupNumber] = useState(0)

  const [isRipple, setIsRipple] = useState(false);
  const [coords, setCoords] = useState({x: -1, y: -1});

  const [isRipple2, setIsRipple2] = useState(false);
  const [coords2, setCoords2] = useState({x: -1, y: -1});

  useEffect(() => {
    if(coords.x != -1 && coords.y != -1){
        setIsRipple(true);

        setTimeout(() => setIsRipple(false), 1000)
    } else {
        setIsRipple(false);
    }
},[coords]);

    useEffect(() => {
      if(!isRipple) setCoords({ x: -1, y: -1});
    },[isRipple]);


    useEffect(() => {
      if(coords2.x != -1 && coords2.y != -1){
          setIsRipple2(true);
  
          setTimeout(() => setIsRipple2(false), 1000)
      } else {
          setIsRipple2(false);
      }
  },[coords2]);
  
      useEffect(() => {
        if(!isRipple2) setCoords2({ x: -1, y: -1});
      },[isRipple2]);


    const handleToggleOrder = (e) => {

      setActiveOrder(!activeOrder)

      if(activeOrder === true){
          setOrder(['Si'])
      }
  
      if(activeOrder === false){
          setOrder(['No'])
      }


      setCoords({
          x: e.clientX - e.target.offsetLeft,
          y: e.clientY - e.target.offsetTop,
      });

      onClick && onClick(e);
  };


  useEffect(() => {
    if(!isRipple2) setCoords2({ x: -1, y: -1});
  },[isRipple2]);


  const handleToggleRep = (e) => {

    setActiveRep(!activeRep)

    if(activeRep === true){
      setRep(['Si'])
  }

  if(activeRep === false){
      setRep(['No'])
  }


    setCoords2({
        x: e.clientX - e.target.offsetLeft,
        y: e.clientY - e.target.offsetTop,
    });

    onClick && onClick(e);
};

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

/*   const handleToggleOrder = () => {
    setActiveOrder(!activeOrder)

    if(activeOrder === true){
        setOrder(['Si'])
    }

    if(activeOrder === false){
        setOrder(['No'])
    }
  } */


/*   const handleToggleRep = () => {
    setActiveRep(!activeRep)

    if(activeRep === true){
        setRep(['Si'])
    }

    if(activeRep === false){
        setRep(['No'])
    }
  }
 */

  const mainCalculator = () =>{

    const toggleOrder = order;
    const toggleRep = rep;

    console.log('el numero total es ' + totalNumber)
    console.log('el numero del grupo es ' + groupNumber)
    console.log('el valor del toggle order es  ' + toggleOrder)
    console.log('el valor del toggle ref es  ' + toggleRep)

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
            {/* <button type='button' onClick={handleToggleOrder}>{order}</button> */}


            <button onClick={handleToggleOrder} className='ripple-btn' type='button' id={order}>
              {order}
              {isRipple ?  (
                  <span 
                  className='ripple' 
                  style={{
                  left: coords.x,
                  top: coords.y,
              }}/> 
              ) : ( "" ) 
              } 
              <span className='content-children'>{children}</span>
          </button>

          </div>

          <div className='toggle-div'>
            <h2>{t('calc.rep')}</h2>
{/*             <button type='button' onClick={handleToggleRep}>{rep}</button> */}

            <button onClick={handleToggleRep} className='ripple-btn' type='button' id={rep}>
              {rep}
              {isRipple2 ?  (
                  <span 
                  className='ripple' 
                  style={{
                  left: coords2.x,
                  top: coords2.y,
              }}/> 
              ) : ( "" ) 
              } 
              <span className='content-children'>{children}</span>
          </button>
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
