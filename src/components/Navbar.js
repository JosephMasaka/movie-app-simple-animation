import React from 'react'

function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <h1>Logo</h1>
        </div>
        <div className='navMenu'>
            <ul>
                <li><a href='/'>Login</a></li>
                <li><a href='/'>Sign Up</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar