import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Content } from './styles'
import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
  const [movies, setMovies] = useState([]);
  const [tags, setTags] = useState([]);

 /*  const navigate = useNavigate(); */

  /* function handleDetails(id) {
    console.log('Função chamada');
    console.log(id);
    navigate(`/movie/${id}`);
  } */

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get('/notes');
      setMovies(response.data);
    }

    fetchMovies();

  }, []);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();

  }, []);

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <header>
            <h1>Meus filmes</h1>

            <ButtonText className="buttontext"
            to='/new' 
            icon={FiPlus}
            title='Adicionar filme'/>

          </header>
          <div className="notes">

              { 
                movies.map(movie => (
                  <Note
                    key={String(movie.id)} 
                    data={movie}  
                    to={`/movie/${movie.id}`}
                    /* onClick={() => handleDetails(movie.id)} */     
                  />
                  )) 
              }
              
          </div> 
        </Content>
      </main>
    </Container>
  )
  
}