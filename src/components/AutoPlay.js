import React, {useState, useEffect} from 'react'
import Audio from '../Media/audio/adult_swim_audio.mp3'

export default function AutoPlay() {

    

    useEffect(() => {
        const audio = document.getElementsByClassName('audio-element')[0]
        audio.play();
    })

    return (
        <div>
            <audio className='audio-element'>
                <source src={Audio}></source>
            </audio>
        </div>
    )
}
