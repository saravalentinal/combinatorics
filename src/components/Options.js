import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';


export default function Options() {
 
  const { t } = useTranslation();

  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const handleCombination = () => {
    setActive(true);
    setActive2(false);
    setActive3(false);
  };

  const handlePermutation = () => {
    setActive(false);
    setActive2(true);
    setActive3(false);
  };

  const handleVariation = () => {
    setActive(false);
    setActive2(false);
    setActive3(true);
  };


  return (
    <>
    <div className="options">


      <div class="dropdown">

        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id={active.toString()} onClick={handleCombination}>
          {t('options.one')}
        </button>

        <ul className="dropdown-menu">
          <li id="li-options"><NavLink to='/combinationWithoutRepetition' exact><span className="dropdown-item">Sin repetición</span></NavLink></li>
          <li id="li-options"><NavLink to='/combinationWithRepetition' exact><span className="dropdown-item">Con repetición</span></NavLink></li>
        </ul>

      </div>


{/*       <div>
        <NavLink to='/combination' exact><button id={active.toString()} onClick={handleCombination}>{t('options.one')}</button></NavLink>
      </div> */}
  

      <div>
        <NavLink to='/permutation' exact><button id={active2.toString()} onClick={handlePermutation}>{t('options.two')}</button></NavLink>
      </div>


      <div class="dropdown">

        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id={active3.toString()} onClick={handleVariation}>
          {t('options.three')}
        </button>

        <ul className="dropdown-menu">
          <li id="li-options"><NavLink to='/variationWithoutRepetition' exact><span className="dropdown-item">Sin repetición</span></NavLink></li>
          <li id="li-options"><NavLink to='/variationWithRepetition' exact><span className="dropdown-item">Con repetición</span></NavLink></li>
        </ul>

      </div>

{/*       <div>
        <NavLink to='variation' exact><button id={active3.toString()} onClick={handleVariation}>{t('options.three')}</button></NavLink>
      </div> */}
        
    </div>
    </>
  )
}
