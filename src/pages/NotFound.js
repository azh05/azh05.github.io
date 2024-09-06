import React from "react";
import NavBar from "../components/NavBar";

export default function NotFound() {
    return(
        (
            <div>  
                <header className="py-6 px-1">
                  <NavBar />
                </header>
                
                <div className="grid justify-items-center">
                    <h1 className="text-4xl p-3">404 Page not found</h1>
                </div>
            </div>
        )
    )
}