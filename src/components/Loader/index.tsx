import React from 'react';
import Lottie from 'react-lottie'
import animation from '../../animations/9379-loader.json'

import { Container } from './style';


const Loader: React.FC = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation
    }
  return (
    <Container>
        <Lottie 
            options={defaultOptions}
            width={200}
            height={200}
        />
    </Container>
  )
}

export default Loader;