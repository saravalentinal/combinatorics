import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function CalculateButton({children, onClick}) {

  const [isRipple, setIsRipple] = useState(false);
  const [coords, setCoords] = useState({x: -1, y: -1});
  
  const { t } = useTranslation();

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


  const handleClick = (e) => {

    setCoords({
        x: e.clientX - e.target.offsetLeft,
        y: e.clientY - e.target.offsetTop,
    });

    onClick && onClick(e);
  };

  return (
    <>

  <div className='calculate-button'>

        <button onClick={handleClick} className='ripple-btn' type='submit' id="calc-button">
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
