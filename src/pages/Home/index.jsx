import { Container, Content } from './styles'
import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { ButtonText } from '../../components/ButtonText'

export function Home() {

  return (
    <Container>
      <Header/>
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
            <Note to='/movie/1' 
              data={{
              title: 'Interestellar',
              text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se',
              tags: [
                {id: 1, name: 'Ficção Científica'},
                {id: 2, name: 'Suspense'},
                {id: 3, name: 'Drama'},
              ]
            }} 
            />
            <Note to='/movie/2' 
              data={{
              title: 'Interestellar',
              text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se',
              tags: [
                {id: 1, name: 'Ficção Científica'},
                {id: 2, name: 'Suspense'},
                {id: 3, name: 'Drama'},
              ]
            }} 
            />
            <Note to='/movie/3' 
              data={{
              title: 'Interestellar',
              text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se',
              tags: [
                {id: 1, name: 'Ficção Científica'},
                {id: 2, name: 'Suspense'},
                {id: 3, name: 'Drama'},
              ]
            }} 
            />
          </div>
        </Content>
      </main>
    </Container>
  )
  
}