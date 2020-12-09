import lottie from 'lottie-web';
import React, { useEffect, useRef,} from 'react';
import './App.css'

export default function Loading() {

    const anima = useRef(null)

    useEffect(() => {
      lottie.loadAnimation({
        container: anima.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./img/39413-loading.json')
      })
    }, [])


    return (
        <div class='anima'>

        </div>
    )
}
