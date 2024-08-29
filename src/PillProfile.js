import React from "react";

export default function PillProfile( { title, text, img, divCSS } ) {
    return(
        
        <div className={`flex items-center p-4 my-3 border rounded-full shadow-md ${divCSS}`}>
            <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-xs text-gray-600 text-left m-3 p-1">{text}</p>
            </div>
            <div className="w-20 h-20 ml-4 rounded-full overflow-hidden flex-shrink-0">
                <img
                    src={img}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}