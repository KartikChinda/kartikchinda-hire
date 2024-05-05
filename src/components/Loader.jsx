import React from 'react'
import { Html, useProgress } from '@react-three/drei'


const Loader = () => {

    // useprogress is essentially a hook that gives you information about your model being loaded. 
    const progress = useProgress();

    return (
        <Html>
            <span className='canvas-load'></span>
            <p style={{
                fontSize: 16,
                color: '#f1f1f1',
                fontWeight: 800, marginTop: 40
            }}>
                {/* Just showing the percentage as the model loads up */}
                {progress.toFixed(2)}%
            </p>
        </Html>
    )
}

export default Loader