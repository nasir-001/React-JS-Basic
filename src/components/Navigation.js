import React, { useState } from 'react'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from './NavigationMenu'
  
function Navigation() {
    const [showMenu, setShowMenu] = useState(false)
    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },

    })

    return (
        <nav>
            <span onClick={() => setShowMenu(!showMenu)}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
            </span>
            {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div key={key} style={props} onClick={() => setShowMenu(false)} className="fixed left-0 w-full h-full z-50">
        
                    </animated.div> 
                )
            }

            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div key={key} style={props} className="fixed bg-white top-0 left-0 w-4/5 shadow-2xl h-full z-50 p-3">
                        <NavigationMenu closeMenu={() => setShowMenu(false)}/>
                    </animated.div> 
                )
            }   
        </nav>
    )
}

export default Navigation;