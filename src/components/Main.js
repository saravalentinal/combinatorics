import React from 'react'
import '../index.css'

import CombinationWithRepetition from './CombinationWithRepetition'
import CombinationWithoutRepetition from './CombinationWithoutRepetition'
import Permutation from './Permutation'
import VariationWithoutRepetition from './VariationWithoutRepetition'
import VariationWithRepetition from './VariationWithRepetition'
import Options from './Options'
import {Routes, Route} from 'react-router-dom'
import { useTranslation } from 'react-i18next';


export default function Main() {

  const { t } = useTranslation();

  return (
    <>
    <div className='main-calc'>
      <Options/>
        <Routes>
          <Route path='/combinationWithoutRepetition' exact element={<CombinationWithoutRepetition/>}/>
          <Route path='/combinationWithRepetition' exact element={<CombinationWithRepetition/>}/>
          <Route path='/permutation' exact element={<Permutation/>}/>
          <Route path='/variationWithoutRepetition' exact element={<VariationWithoutRepetition/>}/>
          <Route path='/variationWithRepetition' exact element={<VariationWithRepetition/>}/>
        </Routes>
      </div>
      <a href="#question-title" className='dont-know'><h3 className='dont-know'>{t('options.choose')}</h3></a>
    </>
  )
}
