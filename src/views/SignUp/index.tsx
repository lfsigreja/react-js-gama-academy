import React, { useCallback, useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import Loader from '../../components/Loader';
import { api } from '../../services/api';

import { Container } from './style';

interface IData {
    name: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {

    const [data, setData] = useState<IData>({} as IData)
    const [load, setLoad] = useState(false)
    const history = useHistory()
    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoad(true)
        api.post('session', {
            email: "email@email.com",
	        password: "123456"
        })
        api.post('users', data).then(
            response => {
                setLoad(false)
                console.log(response.data)
                toast.success('Cadastro Realizado com Sucesso', {
                    hideProgressBar: false,
                    onClose: () => history.push('/signin')
            })
                
            }
        ).catch( e => {
            toast.error('Oops, algo não deu certo')
            setLoad(false)
            })
    }, [data, history])

    if(load) {
        return <Loader />
      }

    return (
        <Container>
            <div className="card">
                <h5>Cadastre-se!</h5>
                <form onSubmit={ handleSubmit }>
                    <input
                        type="text"
                        placeholder="Nome"
                        onChange={e => setData({ ...data, name: e.target.value })} />
                    <input
                        type="text"
                        placeholder="Email" onChange={e => setData({ ...data, email: e.target.value })} />
                    <input
                        type="text"
                        placeholder="Senha" onChange={e => setData({ ...data, password: e.target.value })} />
                    <input type="submit" value="Cadastrar" />
                </form>
                <Link to="/signin">Já possuí conta? Clique aqui.</Link>
            </div>
        </Container>

    )
}

export default SignUp;