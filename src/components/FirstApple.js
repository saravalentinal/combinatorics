import React from 'react'

export default function FirstApple(props) {
  return (
                <div className='first-second-apple'>
                    <ul className='list-numbers'>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>

                    <ul>
                        <li><span className={props.color1}><i class="fa-solid fa-pencil"></i></span></li>
                        <li><span className={props.color2}><i class="fa-solid fa-calculator"></i></span></li>
                        <li><span className={props.color2}><i class="fa-solid fa-calculator"></i></span></li>
                    </ul>

                    <ul>
                        <li><span className={props.color2}><i class="fa-solid fa-calculator"></i></span></li>
                        <li><span className={props.color1}><i class="fa-solid fa-pencil"></i></span></li>
                        <li><span className={props.color3}><i className="fa-sharp fa-solid fa-clock"></i></span></li>
                    </ul>

                    <ul>
                        <li><span className={props.color3}><i class="fa-sharp fa-solid fa-clock"></i></span></li>
                        <li><span className={props.color3}><i className="fa-sharp fa-solid fa-clock"></i></span></li>
                        <li><span className={props.color1}><i class="fa-solid fa-pencil"></i></span></li>
                    </ul>

                </div>
  );
}