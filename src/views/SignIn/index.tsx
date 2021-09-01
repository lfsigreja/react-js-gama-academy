import React, { useCallback, useState } from 'react';
import { FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import { api } from '../../services/api';
import { Container } from './style';
import Loader from '../../components/Loader'
import  Nav from '../../components/Nav/index';
import Footer from '../../components/footer';

interface IData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {


  const [data, setData] = useState<IData>({} as IData)
  const [load, setLoad] = useState(false);

  const history = useHistory()
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true)
    api.post('session', data).then(
      response => {

        const sessionToken = JSON.stringify(response.data.token)
        localStorage.setItem('@gamaServiceToken', sessionToken)
        setLoad(false)
        console.log(response.data)
        history.push('/dashboard')
      }
    ).catch(e => {
      setLoad(false)
      toast.error('Oops, algo não deu certo')
    })
  }, [data, history])

  if (load) {
    return <Loader />
  }

  return (
    <>
    <Nav />
    <Container>
      <div className="card">
        <h5>Faça o seu login!</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email" onChange={e => setData({ ...data, email: e.target.value })} />
          <input
            type="text"
            placeholder="Senha" onChange={e => setData({ ...data, password: e.target.value })} />
          <input type="submit" value="Logar" />
        </form>
        <Link to="/signup">Clique aqui para cadastrar</Link>
      </div>
    </Container>
    <Footer />
    </>
  )
}

export default SignIn;