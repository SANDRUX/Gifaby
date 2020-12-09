import React, { useEffect, useRef,} from 'react';
import lottie from 'lottie-web';

export default function Notfound() {
    
    const ani = useRef(null)

    useEffect(() => {
      lottie.loadAnimation({
        container: ani.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./img/3146-404page.json')
      })
    }, [])
    
    
    return (
        <div className='ani' ref={ani} >
            
        </div>
    )
}
