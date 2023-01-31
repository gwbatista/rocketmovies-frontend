import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container, Content } from './styles';
import { FiClock, FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Movie() {
  const [data, setData] = useState({});
  const [dateFormatted, setDateFormatted] = useState(null);

  const { user } = useAuth();

  const avatar = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const params = useParams(); 

  useEffect(() => {
    if (data.updated_at) {
      const initialFormat = data.updated_at;

      const [date, hour] = initialFormat.split(" ");

      const [year, month, day] = date.split("-");

      const [hours, minutes] = hour.split(":");

      setDateFormatted({
        date: `${day}/${month}/${year}`,
        hour: `${hours - 3}:${minutes}`,
      });
    }
  }, [data]);

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, []);

  return (
    <Container>
      <Header />
      {
        data && //se tem conteudo mostra o data, senão não
        <main>
          <Content>
              <ButtonText 
              to='/'
              icon={FiArrowLeft}
              title='Voltar' />

              <div className="title">
                <h1>{data.title}</h1>
                <div className="icons">
                  <Rating grade={data.rating} isBigSize />
                </div>
              </div>

              <div className="author">
                <img 
                  src={avatar}
                  alt="Foto do usuário"
                />
                <p>Por {user.name}</p>
                <FiClock className='ficlock' />
                {dateFormatted && (
                  <p>
                    {dateFormatted.date} as {dateFormatted.hour}
                  </p>
                )}
              </div>

              { data.tags && (
              <div className="itens">
                  { data.tags.map(tag => (
                     <Tag 
                      key={String(tag.id)}
                      title={tag.name}  
                      />
                    ))}
              </div>
              )}

              <div className="text">
                <p>{data.description}</p>
              </div>
          </Content>
        </main>
      }
    </Container>
  );
};