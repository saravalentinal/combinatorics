import React from 'react'

export default function ApplesList(props) {
  return (

                <div className='first-second-apple'>

                    <ul className='list-numbers'>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                    </ul>


                    <ul>
                        <li><span className={props.color3}><i className="fa-solid fa-apple-whole"></i></span></li>
                        <li><span className={props.color1}><i className="fa-solid fa-apple-whole"></i></span></li>
                        <li><span className={props.color3}><i className="fa-solid fa-apple-whole"></i></span></li>
                    </ul>

                    <ul>
                        <li><span className={props.color2}><i className="fa-solid fa-apple-whole"></i></span></li>
                        <li><span className={props.color3}><i className="fa-solid fa-apple-whole"></i></span></li>
                        <li><span className={props.color1}><i className="fa-solid fa-apple-whole"></i></span></li>
                    </ul>

                    <ul>
                        <li><span className={props.color1}><i className="fa-solid fa-apple-whole"></i></span></li>
                        <li><span className={props.color2}><i className="fa-solid fa-apple-whole"></i></span></li>
                        <li><span className={props.color2}><i className="fa-solid fa-apple-whole"></i></span></li>
                    </ul>

                </div>
  );
}
