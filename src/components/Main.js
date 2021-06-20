import React, { useState, useEffect } from "react";
import Audio from '../Media/audio/adult_swim_audio.mp3';
import Player from './Player';
import AutoPlay from './AutoPlay';
import Timer from './Timer';

export default function Main() {

    const [seconds, setSeconds] = useState(11);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds-1), 3000);
        } else {
            setSeconds(0)
        }
    })

    useEffect(() => {
        const cards = document.getElementsByClassName('cards')
        console.log(cards);
        for(var i = 0; i < cards.length; i++) {
            if (cards[i].id == seconds) {
                cards[i].classList.remove('hidden');
            } else {
                cards[i].classList.add('hidden');
            }
        }
    })

  return (
    <div className="main-container">
        <div className='hidden'>
            {seconds}
        </div>
      <div className="text-container">
        <p id="11" className="cards hidden">Hi, my name's Matt</p>
        <p id="10" className="cards hidden">I'm a Full Stack Web Developer</p>
        <p id="9" className="cards hidden">I like to make web sites and apps</p>
        <p id="8" className="cards hidden">I even made this whole <br/>tik-tok in code</p>
        <p id="7" className="cards hidden">I'm really good at making eCommerce sites without things like Shopify</p>
        <p id="6" className="cards hidden">because I don't like how it costs businesses so much over time</p>
        <p id="5" className="cards hidden">I lost my job at a warehouse recently</p>
        <p id="4" className="cards hidden">so I'm trying to find a full time development job,</p>
        <p id="3" className="cards hidden">or find freelance work until I do. So if you know someone who needs a site</p>
        <p id="2" className="cards hidden">or is hiring, I'd appreciate if you'd send them my way or share this tik-tok.</p>
        <p id="1" className="cards hidden">Thanks {`<3`}</p>
        <p id="0" className="cards hidden">[as]</p>
      </div>
    </div>
  );
}
