import React, {useState, useEffect} from 'react'

export default function Timer() {
    
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds-1), 1000);
        } else {
            setSeconds('done')
        }
    })



    
    return (
        <div>
            <div>
                {seconds}
            </div>
        </div>
    )
}
