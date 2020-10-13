import React from 'react'
import { Link } from "react-router-dom"
import Navigation from './Navigation'

function NavigationMenu(props) {
    return (
         <div>
             <div className="font-bold py-3">
                AppName
            </div>
            <ul>
                <li>
                    <Link onClick={props.closeMenu} to="/" className="py-3 block border-t border-b text-blue-500">Home</Link>
                </li>
                <li>
                    <Link onClick={props.closeMenu} to="/about" className="py-3 block border-b text-blue-500">About</Link>
                </li>  
            </ul>
         </div>
    )
}

export default NavigationMenu;