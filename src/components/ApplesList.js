import React from 'react'
import FirstApple from './FirstApple';
import SecondApple from './SecondApple';

export default function ApplesList(props) {
  return (
    <div className='div-apples'>

            <div className='list-apples-div'>
                <FirstApple
                                color1 = "firstApple"
                                color2 = "secondApple"
                                color3 = "thirdApple"></FirstApple>
                <SecondApple
                                color1 = "firstApple"
                                color2 = "secondApple"
                                color3 = "thirdApple"></SecondApple>
            </div>

    </div>
  );
}
