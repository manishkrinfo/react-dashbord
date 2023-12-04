import React from 'react'
import "./topbar.css";

const TopBar = () => {
  return (
    <div className='topBar'>
      <div className='topBarWrapper'>
         <div className='topLeft'>
            <span className='logo'>Admin</span>
         </div>
         <div className='topRight'>
            <div className='topBarIcons'>
               hello
            </div>
         </div>
      </div> 
    </div>
  )
}

export default TopBar;