import React from 'react'
import './TabButton.css'

function TabButton({handleClick,children,isSelected}) {
  

  
  return (
    <li><button className={isSelected ? 'active' : ''}  onClick={handleClick}>{children}</button></li>
  )


}

export default TabButton
