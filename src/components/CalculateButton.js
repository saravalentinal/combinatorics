import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function CalculateButton({children, onClick}) {

  const [isRipple, setIsRipple] = useState(false);
  const [coords, setCoords] = useState({x: -1, y: -1});
  
  const { t } = useTranslation();

  const [active, setActive] = useState(false);

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

  const handleCalculate = (e) => {
    setActive(true);

    setActive(false);

    requestAnimationFrame(() => 
    setActive(true)
    );

    setCoords({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop,
  });

    onClick && onClick(e);
  };


  return (
    <>
          <div className='calculate-button'>
            {/* <button type='submit' id={active.toString() + 'CalcButton'} onClick={handleCalculate}>{t('calc.button')}</button> */}


          <button onClick={handleCalculate} className='ripple-btn' type='submit'>
            {t('calc.button')}
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
    </>
      
    )
}
