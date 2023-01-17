import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { TextArea } from '../../components/TextArea';
import { NoteFilms } from '../../components/NoteFilms';
import { Button } from '../../components/Button';

import { FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Content } from './styles';

export function New() {
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
              <Input placeholder='Titulo'/>
              <Input placeholder='Sua nota (de 0 a 5)'/>
            </div>

            <TextArea placeholder='Observações' />

            <h2>Marcadores</h2>

            <div className="secondDiv">
              <NoteFilms value='Ação'/>
              <NoteFilms value='Interessante'/>
              <NoteFilms placeholder='Novo Marcador' isNew/>
            </div>

            <div className="button">
              <Button title='Excluir Filme' />
              <Button title='Salvar Alterações' />
            </div>

          </Form>
        </Content>
      </main>
    </Container>
  )
}