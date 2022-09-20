import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import ClassNames from 'classnames';
import { useLocation } from 'react-router-dom';


export default function Options() {

  const location = useLocation();
 
  const { t } = useTranslation();

  return (
    <>

    <div className="options">

      <div class="dropdown">

        <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className={ClassNames('dropdown-toggle', {'true': location.pathname.match('combination(With|Without)Repetition')})}>
          {t('options.one')}
        </button>

        <ul className="dropdown-menu">
          <li id="li-options"><NavLink to='/combinationWithoutRepetition' exact><span className="dropdown-item">Sin repetición</span></NavLink></li>
          <li id="li-options"><NavLink to='/combinationWithRepetition' exact><span className="dropdown-item">Con repetición</span></NavLink></li>
        </ul>

      </div>
  

      <div>
        <NavLink to='/permutation' exact><button className={ClassNames({'true': location.pathname === '/permutation'})} >{t('options.two')}</button></NavLink>
      </div>


      <div class="dropdown">

        <button type="button" data-bs-toggle="dropdown" aria-expanded="false" className={ClassNames('dropdown-toggle', {'true': location.pathname.match('variation(With|Without)Repetition')})}>
          {t('options.three')}
        </button>

        <ul className="dropdown-menu">
          <li id="li-options"><NavLink to='/variationWithoutRepetition' exact><span className="dropdown-item">Sin repetición</span></NavLink></li>
          <li id="li-options"><NavLink to='/variationWithRepetition' exact><span className="dropdown-item">Con repetición</span></NavLink></li>
        </ul>

      </div>
        
    </div>

    <div className = "method-div">
       <NavLink to='/' exact><button className={ClassNames({'true': location.pathname === '/'})}>{t('options.four')}</button></NavLink>
    </div>
    
    </>
  )
}
