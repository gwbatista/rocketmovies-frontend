import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { TextArea } from '../../components/TextArea';
import { NoteFilms } from '../../components/NoteFilms';
import { Button } from '../../components/Button';

import { api } from '../../services/api';
import { FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Content } from './styles';

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Digite o titulo do filme")
    }

    if(!rating) {
      return alert("Digite a nota do filme")
    }

    if(!description) {
      return alert("Digite a descrição do filme")
    }

    if(newTag) {
      return alert("Você deixou um marcador no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.");
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      rating
    });

    alert("Nota criada com sucesso!");
    navigate("/");
  }

  return(
    <Container>
      <Header />
      <main>
        <Content>
          <Form>
            <header>
              <ButtonText 
              to='/'
              icon={FiArrowLeft}
              title='Voltar'/>
              <h1>Novo Filme</h1>
            </header>

            <div className="firstDiv">
              <Input 
                placeholder='Titulo'
                onChange={e => setTitle(e.target.value)}
              />
              <Input 
                placeholder='Sua nota (de 0 a 5)'
                onChange={e => setRating(e.target.value)}
              />
            </div>

            <TextArea 
              placeholder='Observações' 
              onChange={e => setDescription(e.target.value)}
            />

            <h2>Marcadores</h2>

            <div className="secondDiv">

              {
                tags.map((tag, index) => (
                  <NoteFilms 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteFilms 
                placeholder='Novo Marcador' 
                isNew
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>

            <div className="button">
              <Button title='Excluir Filme' />
              <Button 
                title='Salvar Alterações' 
                onClick={handleNewNote}
              />
            </div>

          </Form>
        </Content>
      </main>
    </Container>
  )
}