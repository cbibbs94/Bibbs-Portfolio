import React from 'react'
import TransparentLogo from '../images/TransparentLogo.png';



const LogoHeader = () => {
     return (
        <header className = 'logo-header'>
            <img src={TransparentLogo} alt='website logo' />
        </header>
     )
}

export default LogoHeader;