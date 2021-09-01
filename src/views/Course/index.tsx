import React, { FormEvent, useState, useCallback } from 'react';
import Footer from '../../components/footer';
import Nav from '../../components/Nav';
import { Container } from './style';


const Course: React.FC = () => {


  return (
    <>
      <Nav />
      <Container>
        <h1>Cursos</h1>
      </Container>
      <Footer />
    </>
  )
}

export default Course;