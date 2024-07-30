import PropTypes from 'prop-types'
import { useRef, useState, useEffect } from 'react'

export default function Video({ src }) {
    const [isPlaying, setPlaying] = useState(false)
    const video = useRef(null)

    useEffect(() => {
        video.current.play()
    }, [])

    function playAndPause() {
        if (isPlaying) {
            video.current.pause()
            setPlaying(!isPlaying)
        } else {
            video.current.play()
            setPlaying(!isPlaying)
        }
    }

    return <div>
        <video style={{ width: '500px', height: '280px' }} ref={video} src={src} loop playsInline />
        <button onClick={playAndPause}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
}

Video.propTypes = {
    src: PropTypes.string,
    isPlaying: PropTypes.bool
}