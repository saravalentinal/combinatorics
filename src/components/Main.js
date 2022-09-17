import { React, Navigate} from 'react'
import '../index.css'

import CombinationWithRepetition from './CombinationWithRepetition'
import CombinationWithoutRepetition from './CombinationWithoutRepetition'
import Permutation from './Permutation'
import VariationWithoutRepetition from './VariationWithoutRepetition'
import VariationWithRepetition from './VariationWithRepetition'
import MethodCalculator from './MethodCalculator'
import Error from './Error'
import Options from './Options'
import {Routes, Route} from 'react-router-dom'


export default function Main() {

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
          <Route path='/' exact element={<MethodCalculator/>}/>
        </Routes>
      </div>
    </>
  )
}
