import React, { useEffect, useState } from 'react'

const RippleButton = ({children, onClick}) => {

    const [isRipple, setIsRipple] = useState(false);
    const [coords, setCoords] = useState({x: -1, y: -1});

    const [order, setOrder] = useState(['No']);
    const [activeOrder, setActiveOrder] = useState(false);

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

  return (
    <div>
        <button onClick={handleClick} className='ripple-btn' type='button'>
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
  )
}

export default RippleButton