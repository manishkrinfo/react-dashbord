import React from 'react';
import './topbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


const Topbar = () => {
  return (
   <div className='topBar'>
      <div className='topBarWrapper'>
         <div className='topLeft'>
            <span className='logo'>Admin</span>
         </div>
         <div className='topRight'>
            <div className='topBarIconContainer'>
               <NotificationsIcon />
               <span className='topIconBadge'>2</span>
            </div>
            <div className='topBarIconContainer'>
               <LanguageIcon />
               <span className='topIconBadge'>2</span>
            </div>
            <div className='topBarIconContainer'>
               <SettingsIcon />
            </div>
            <img src='https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png' alt='' className='topAvatar' />
         </div>
      </div> 
   </div>
  )
}

export default Topbar