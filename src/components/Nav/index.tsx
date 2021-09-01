import React from 'react';

import { NavBar } from './style';
import LogoGama from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <div>
      <NavBar>
        <img src={LogoGama} alt='Logo Gama' />
        <div>
          <Link to='/' className='nav-links'>Home</Link>
          <Link to='/courses' className='nav-links'>Cursos</Link>
          <Link to='/signup' className='nav-links'>Cadastre-se</Link>
          <Link to='/signin' className='nav-links'>Login</Link>
        </div>
      </NavBar>
    </div>
  )
}

export default Nav;