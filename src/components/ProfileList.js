import React from "react";
import PillProfile from "./PillProfile";

export default function ProfileList({ sectionTitle, titleList, descList, imageList, className, visible, profileCSS }) {
    return(
        <div className={`grid grid-cols-1 grid-rows-${descList.length + 1}
        mx-4 p-2 ${className}`}>
            <h1>{sectionTitle ? sectionTitle : ""}</h1>

            {descList.map((val, index) => {
                return (
                <div
                    key={index}
                    className={`transition duration-200
                    ${visible ? `opacity-100` : 'opacity-0 translate-y-5'}`}
                >
                    <PillProfile
                        title={titleList[index]}
                        text={val}
                        img={imageList[index]}
                        divCSS={profileCSS}
                    />
                </div>)
            })}
        </div>
    )
}