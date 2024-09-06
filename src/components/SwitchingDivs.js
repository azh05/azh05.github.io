import React, { useState, useEffect } from 'react'

// switches divs every 5 seconds
export default function SwitchingDivs({ divList }) {
    const [flipped, setFlipped] = useState(false)

    // Automatically toggle the flipped state every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setFlipped((prevFlipped) => !prevFlipped)

      }, 4000)
      
      return () => clearInterval(interval) // Clean up interval on component unmount
    }, [])

    return (
        <div className="h-48 w-48">
          {/* First div fades out when flipped */}
          <div
            className={`w-full h-full transition-opacity duration-1000 ease-in-out ${
              flipped ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {divList[0]}
          </div>
    
          {/* Second div fades in when flipped */}
          <div
            className={`w-full h-full transition-opacity duration-1000 ease-in-out ${
              flipped ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {divList[1]}
          </div>
        </div>
      )
}
