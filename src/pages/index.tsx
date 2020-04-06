import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useSound from 'use-sound'
import { useState } from 'react';

const Index = () => {
  const [playOn] = useSound(
    '/24hours.mp3',
    { volume: 0.25 }
  )
  
  const [playOff] = useSound(
    '/24hours.mp3',
    { volume: 0.25 }
  )
  const [isPlaying, setIsPlaying] = useState(false)

  return <>
    <button
      onMouseUp={() => {
        isPlaying ? playOff({}) : playOn({})
      }}
      onChange={() => setIsPlaying(!isPlaying)}
    />
      />
    <Title>Stressless Productions</Title>
    <FontAwesomeIcon icon='envelope-square' size='2x' fixedWidth />
    <FontAwesomeIcon icon='envelope-square' size='6x' fixedWidth listItem />
    <FontAwesomeIcon icon="spinner" size='2x' spin border fixedWidth />
    <FontAwesomeIcon icon="spinner" size='10x' pulse fixedWidth />
    <FontAwesomeIcon icon="spinner" size='10x' inverse pulse fixedWidth />
  </>
}

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`

export default Index