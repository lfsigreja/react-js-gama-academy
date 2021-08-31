import React, {useCallback, useState} from 'react';

// import { Container } from './styles';

const SingUp: React.FC = () => {
  return (
    <div>
        <form onSubmit={ () => alert('Teste')}>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Email" />
            <input type="submit" placeholder="Cadastrat" />
        </form>
    </div>

  )
}

export default SingUp;