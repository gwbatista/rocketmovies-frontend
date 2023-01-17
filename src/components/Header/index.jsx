import { Container, Profile, Imagem } from "./styles";

export function Header() {
  return(
    <Container>

      <strong>RocketMovies</strong>

      <input type="text" placeholder="Pesquisar pelo título" />

      <Profile>

        <div>
          <strong>Guilherme Watanabe</strong>
          <span>Sair</span>
        </div>
        
        <Imagem to='/profile'>
          <img 
            src="https://github.com/LABDevelop.png"
            alt="Foto do usuário"
          />
        </Imagem>

      </Profile>
      
    </Container>
  )
}