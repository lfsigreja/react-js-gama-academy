import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import { api } from '../../services/api'
import { useDispatch } from 'react-redux';
import addNewUser from '../../store/modules/user/action'
import { Link } from 'react-router-dom';

import { Container } from './style';

interface ICollaborator {
  id: number;
  name: string;
  email: string;
  photo: {
    path: string;
  }
}



const Dash: React.FC = () => {

  const [data, setData] = useState<ICollaborator[]>()
  const [isLoad, setIsLoad] = useState(false)
  const token = localStorage.getItem('@gamaServiceToken')?.replace(/[]/, "")
  console.log(token)

  const dispatch = useDispatch()

  useEffect(() => {
    api.get('collaborator', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMwNTU4MjE1LCJleHAiOjE2MzA1NjE4MTV9.Pkb4TdcpHZ6QEPoIf2vlgTlYF0UmSU56lQERYyVAHag`
      }
    }).then(resp => {
      setIsLoad(true)
      setData(resp.data)
    }).finally(() => setIsLoad(false))
  }, [token])

  useEffect(() => {
    data?.map(user => dispatch(addNewUser(user)))
  }, [data, dispatch])

  if (isLoad) {
    return <Loader />
  }



  return (
    <Container>
      <div className='wrapper'>
        <h1>Dashboard</h1>
        <div>
          {data?.map(el => (
            <div key={el.id} className='card'>
              <img src={`https://computerworld.com.br/wp-content/uploads/2020/01/Em-meio-a-investiga%C3%A7%C3%B5es-e-protestos-Bezos-anuncia-US-1-bilh%C3%A3o-para-%C3%8Dndia.jpg.webp`} alt="img" />
              <div className='contentInfo'>
                <p>Nome: {el.name}</p>
                <p>Email: {el.email}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/">Retornar a home</Link>
      </div>
    </Container>
  );
}

export default Dash;