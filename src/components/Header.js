import React from 'react'

function Header() {
  return (
    <div className='Header'>
        <img className='logo' src={require('../assets/logo.png')}/>
        <h1 className='logo-text'>Meme Generator</h1>
    </div>
  )
}

export default Header