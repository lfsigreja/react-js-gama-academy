import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav'
import Footer from '../../components/footer'

import { Container } from './style';

const Home: React.FC = () => {

  return (
    <>
      <Nav />
      <Container>
          <div>
            <h1>Home</h1>
            <Link to="/contact"> Acessar página de contatos </Link>
          </div>
      </Container>
      <Footer />
    </>
  )
}

export default Home;