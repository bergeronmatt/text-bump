import React, { useState, useEffect } from "react";

export default function Main() {

    const [seconds, setSeconds] = useState(6);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds-1), 3500);
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
        <p id="6" className="cards hidden">Hi, my name's Matt. I'm a Full Stack Web Developer</p>
        <p id="5" className="cards hidden">I like to make web sites and apps; I even made this tik-tok in code</p>
        <p id="4" className="cards hidden">I'm really good at making eCommerce sites without things like Shopify because I don't like their business model.</p>
        <p id="3" className="cards hidden">I recently lost my warehouse job, so I'm trying to find a full time development job, or find freelance work until I do.</p>
        <p id="2" className="cards hidden">So if you know someone who needs a site or is hiring, I'd appreciate if you'd send them my way or share this tik-tok.</p>
        <p id="1" className="cards hidden">Thanks {`<3`}</p>
        <p id="0" className="cards hidden">[as]</p>
      </div>
    </div>
  );
}
