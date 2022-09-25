import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next'

export default function MethodCalculator({children, onClick}) {

  const { t } = useTranslation();

  const [isRipple, setIsRipple] = useState(false);
  const [coords, setCoords] = useState({x: -1, y: -1});

  const [isRipple2, setIsRipple2] = useState(false);
  const [coords2, setCoords2] = useState({x: -1, y: -1});

  const [result, setResult] = useState(['']);

  const [order, setOrder] = useState([t('extras.no')]);
  const [rep, setRep] = useState([t('extras.no')]);

  const [activeOrder, setActiveOrder] = useState(true);
  const [activeRep, setActiveRep] = useState(true);

  const [totalNumber, setTotalNumber] = useState(0)
  const [groupNumber, setGroupNumber] = useState(0)

  useEffect(() => {
    if(coords.x != -1 && coords.y != -1){
        setIsRipple(true);

        setTimeout(() => setIsRipple(false), 1000)
    } else {
        setIsRipple(false);
    }
  },[coords]);

  useEffect(() => {
    if(coords2.x != -1 && coords2.y != -1){
        setIsRipple2(true);

        setTimeout(() => setIsRipple2(false), 1000)
    } else {
        setIsRipple2(false);
    }
  },[coords2]);

  useEffect(() => {
    if(!isRipple) setCoords({ x: -1, y: -1});
  },[isRipple]);

    const handleToggleOrder = (e) => {

      setActiveOrder(!activeOrder)

      if(activeOrder === true){
          setOrder([t('extras.yes')])
      }
  
      if(activeOrder === false){
          setOrder([t('extras.no')])
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
          setRep([t('extras.yes')])
      }
  
      if(activeRep === false){
          setRep([t('extras.no')])
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

  i18next.on('languageChanged', function(lng) {
    if(order=='No' || order == 'Nein'){
      setOrder(t('extras.no'));
    }else if(order=='Sí' || order == 'Yes' || order == 'Ja'){
      setOrder(t('extras.yes'));
    } 

    if(rep=='No' || rep == 'Nein'){
      setRep(t('extras.no'));
    }else if(rep=='Sí' || rep == 'Yes' || rep == 'Ja'){
      setRep(t('extras.yes'));
    } 

    if(result ==  "The data entered does not match any method" || result == "Die eingegebenen Daten stimmen mit keiner Methode überein" || result == "Los datos ingresados no coinciden con ningún método"){
      setResult(t('extras.coincidence'))
    } else if (result == "Fill in the blanks" || result == "Rellene los campos" || result == "Füllen Sie die Felder aus") {
      setResult(t('extras.fill'))
    } else if (result == "Kombination ohne Wiederholung" || result == "Combination without repetition" || result == "Combinación sin repetición"){
      setResult(t('examples.comb_without_rep_title'))
    } else if (result == "Combinación con repetición" || result == "Combination with repetition" || result == "Kombination mit Wiederholung"){
      setResult(t('examples.comb_with_rep_title'))
    } else if (result == "Permutation" || result == "Permutación"){
      setResult(t('examples.permutation_title'))
    } else if (result == "Variación sin repetición" || result == "Variation without repetition" || result == "Variation ohne Wiederholung"){
      setResult(t('examples.var_without_rep_title'))
    } else if(result == "Variation mit Wiederholung" || result == "Variation with repetition" || result == "Variación con repetición"){
      setResult(t('examples.var_with_rep_title'))
    }

  })


  const mainCalculator = () =>{

    let toggleOrder = order;
    let toggleRep = rep;

    console.log('el numero total es ' + totalNumber)
    console.log('el numero del grupo es ' + groupNumber)
    console.log('el valor del toggle order es  ' + toggleOrder)
    console.log('el valor del toggle ref es  ' + toggleRep)

    function methodCalculator(){

      toggleOrder == t('extras.no') ? toggleOrder = 'No' : toggleOrder = 'Si';
      toggleRep ==  t('extras.no') ? toggleRep = 'No' : toggleRep = 'Si';


        if(toggleOrder == 'No' && toggleRep == 'No' && (totalNumber > groupNumber)){
            const result = t('examples.comb_without_rep_title');
            return result;
        } 

        else if (toggleOrder == 'No' && toggleRep == 'Si' && (totalNumber > groupNumber)){
            const result = t('examples.comb_with_rep_title');
            return result;
        }

        else if(toggleOrder == 'Si' && toggleRep == 'No' && (totalNumber === groupNumber)){
            const result = t('examples.permutation_title');
            return result;
        }

        else if(toggleOrder == 'Si' && toggleRep == 'No' && (totalNumber > groupNumber)){
            const result = t('examples.var_without_rep_title');
            return result;
        }

        else if(toggleOrder == 'Si' && toggleRep == 'Si' && (totalNumber > groupNumber)){
            const result = t('examples.var_with_rep_title');
            return result;
        }

        else if(toggleOrder == 'No' && toggleRep == 'No' && totalNumber === 0 && groupNumber === 0){
          const result = t('extras.fill');
          return result;
        }

        else{
            const result = t('extras.coincidence');
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
          <h2 className='result-h2'>{result}</h2>
    </div>
        
    </>
      
    )
}
