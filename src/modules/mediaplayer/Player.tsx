import { useState } from 'react'
import useSound from 'use-sound'

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [playOn] = useSound(
    '/24hours.mp3',
    { volume: 0.25 }
  )
  const [playOff] = useSound(
    '/24hours.mp3',
    { volume: 0.25 }
  )

  return <>
    <h2>Music Player</h2>
    <button
      onMouseUp={() =>
        isPlaying ? playOff({}) : playOn({})
      }
      onChange={() => setIsPlaying(!isPlaying)}
    />
  </>
}

export default Player