import React, { useState } from 'react';
import Profile from './Profile';
import Tooltip from './Tooltip';
import ProfileList from './ProfileList';

import FreddyFazbear from './static/FreddyFazbear.JPG';
import { interestsList } from './static/consts'
import { classList } from './static/consts'

export default function MainProfile() {
    const numSwitch = 2;

    const [textNum, setTextNum] = useState(0);
    const [listVisible, setListVisible] = useState(Array(numSwitch).fill(false));

    const handleListVisible = () => {
        setListVisible((prevList) => 
            prevList.map((item, i) => i === textNum ? !item : item)
        );
    };

    const textOptions = [
        (
            <p className='text-left'>What is <span className="font-bold">goody</span> gang 🤠 My name is Anthony Zhao 🐜
            I'm a second year 2️⃣  <Tooltip buttonName="Mathematics of Computation"
                                        buttonCSS="font-bold"
                                            text="Coursework includes Math and Computer Science topics"
                                            textCSS="bg-white p-4 rounded text-sm text-black"/> major 🖥️ at UCLA 🐻 originally from
                                            ✨Belmont, MA✨.
                Broadly, I am interested 🤔 in things that I find <span className="font-bold">interesting 😎</span>! Here's a list 😼
            </p>
        ),
        (<p>Here are the <span className="font-bold">classes</span> I'm taking!
        </p>)
    ];

    const buttonOptions = [
        (<button className="relative overflow-hidden rounded-full bg-white px-5 py-2.5 text-black font-bold
            drop-shadow-md border
            transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110
            hover:scale-110 transition:scale"
            onClick={handleListVisible}>
                Interests ↓
            </button>
        ),
        (<button className="relative overflow-hidden rounded-full bg-white px-5 py-2.5 text-black font-bold
            drop-shadow-md border
            transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110
            hover:scale-110 transition:scale"
            onClick={handleListVisible}>
                Classes ↓
            </button>),
    ];

    const dropdownOptions = [
        (<ProfileList sectionTitle="" titleList={interestsList.titleList} descList={interestsList.descList} imageList={interestsList.imageList}
            visible={listVisible[textNum]} profileCSS="bg-white"/>),

        (<ProfileList sectionTitle="" titleList={classList.titleList} descList={classList.descList} imageList={classList.imageList}
            visible={listVisible[textNum]} profileCSS="bg-white" />)
    ]

    const handleTextNum = () => {
        setTextNum(prevState => (prevState === 1 ? 0 : 1));
    };


    return(
        <div className="grid grid-cols-2 grid-rows-1">
            <div className="text-center">
                <div onClick={handleTextNum} 
                     className="cursor-pointer hover:scale-105 transition:scale duration-200">
                    <p className="m-5 p-5 pl-8 text-lg border drop-shadow-lg rounded-lg bg-white ">
                        {textOptions[textNum]}
                    </p>
                </div>

                <div>
                    {buttonOptions[textNum]}
                    {dropdownOptions[textNum]}
                    
                </div>
            </div>

            <div className="px-4 justify-center h-dvh">
                <Profile image={FreddyFazbear} caption={<p>🐜 posing in front of <span className='font-bold'>Freddy Fazbear Pizza Place</span> in the Insomnia Cookie store in Westwood</p>}
                        imageCSS="h-1/2 drop-shadow-lg rounded-lg" captionCSS="m-1 p-4 border rounded-lg bg-white drop-shadow-lg"/>
            </div>

            
        </div>
    );
}
