import NavBar from '../components/NavBar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import PokeSite from '../components/PokeSite';
import SwitchingDivs from '../components/SwitchingDivs';

import '../PogoParallax.css';

// import React, { useState, useEffect } from 'react';
// use an Effect for Table loading and naming scheme

function Pogo() {
  const codes = [
    (<div className="animation_layer parallax" id="code-1"></div>),
    (<div className="animation_layer parallax" id="code-2"></div>),
    
  ]

  return (
    <div className={"cursor-pokeball-closed w-full h-full"} id="background">
      <header className="py-6 px-1">
        <NavBar buttonCSS="transition hover:cursor-pokeball-open text-white" textCSS="text-white"/>
      </header>

      <Parallax pages={2} style={{ top: 0, left: 0 }} className='animation flex justify-center'>
        <ParallaxLayer offset={0} speed={0.3}> 
          <div className="animation_layer parallax" id="sky"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}> 
          <div className="animation_layer parallax" id="mountains_2"></div>
        </ParallaxLayer>


        <ParallaxLayer offset={0.15} speed={0}>
          <div className="animation_layer parallax" id="text">
            <div className="p-5 m-10 flex align-middle">
              <h1 className="text-5xl font-bold text-white text-center w-full ">
                Pokemon Go Travel Pictures
              </h1>
              <p className="text-2xl font-bold text-white w-1/2 ">
                Here are some of the pictures I've taken in Pokemon Go, using the AR feature! I'm active in West LA and the Boston Area.
              </p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}> 
          <div className="animation_layer parallax" id="waterfront"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}> 
          <div className="animation_layer parallax" id="rocks"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}> 
          <div className="animation_layer parallax" id="mountains_1"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}> 
          <div className="animation_layer parallax" id="houses_1"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}> 
          <div className="animation_layer parallax" id="houses_2"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.6}> 
          <div className="animation_layer parallax" id="cresselia"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.6}> 
          <div className="animation_layer parallax" id="woopers"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.6}> 
          <div className="animation_layer parallax" id="talonflame"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.98} speed={0.85}> 
          <div className="animation_layer parallax" id="city-back"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.90} speed={0.9}> 
          <div className="animation_layer parallax" id="xurkitree"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.92} speed={0.75}> 
          <SwitchingDivs divList={codes}/>
        </ParallaxLayer>

        <ParallaxLayer offset={0.98} speed={1.02}> 
          <div className="animation_layer parallax" id="city-fore"></div>
        </ParallaxLayer>
        

        <ParallaxLayer offset={0.98} speed={1.05}> 
          <div className="animation_layer parallax" id="gengar"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.98} speed={1}> 
          <div className="animation_layer parallax" id="magnezone"></div>
        </ParallaxLayer>
        
        
        <ParallaxLayer offset={1} speed={1}>
          <PokeSite />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Pogo;
