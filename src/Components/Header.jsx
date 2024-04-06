import React from 'react'
import img from '../assets/robots.png'
const Header = ({Header = 'header',...props}) => {
  return (
    <Header {...props}>
        <div className='Parent'>
            <img src={img} alt="" id="robot"/>
            <div className='text'>
            <h1><span style={{color:"aqua"}}>React</span>.js</h1>
                <p>Conditional Css Practice</p>
            </div>
        </div>
    </Header>
  )
}

export default Header