import React from 'react'
import "./Navbar.css"

export default function Navbar({getData}) {
    return(
        <>
        <nav className='main-nav'>
            {/* brand name */}
            <div>
                <h2>LETSGROWMORE</h2>
            </div>
            <div  className='button'>

            <button  onClick={getData}>GetUser</button>
            </div>
            

        </nav>
        
       
        </>
    )
}