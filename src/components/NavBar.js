import React from 'react'
import { Link } from 'react-router-dom'

function NavBar( { buttonCSS, textCSS} ) {
    const linkNames = ["Home", "PoGo"]
    const linkUrls  = ['/', "/Pogo"]

    return(
        <nav>
            <div className="container mx-auto flex justify-between items-center">
                <div className={`text-black text-xl font-bold mx-1 px-1 ${textCSS}`}>
                    Anthony Zhao
                </div>

                <div className="justify-end">
                        {linkNames.map((val, index) => {
                            return(
                                <Link className={`${buttonCSS} group transition-all duration-200 p-3 hover:text-violet-600 text-xl`}
                                    to={linkUrls[index]}>
                                    <span class="bg-left-bottom bg-gradient-to-r from-violet-600 to-violet-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                    {val} 
                                    </span>
                                </Link>
                            );
                        })}
                </div>
            </div>
        </nav>
        
    )
}

export default NavBar;