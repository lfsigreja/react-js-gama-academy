import React from 'react';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../store/modules/user/type';

import { FooterStyles } from './style';

const Footer: React.FC = () => {

const state = useSelector((state:IGlobalState ) => state.users)

  return (
          <FooterStyles>
              <p>Gama Academy</p>
              <p>Temos { state.length} usuários cadastrados.</p>
          </FooterStyles>
  )
}

export default Footer;