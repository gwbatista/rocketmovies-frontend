import { Container, Profile, Imagem } from "./styles";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth();
  
  return(
    <Container>

      <strong>RocketMovies</strong>

      <input type="text" placeholder="Pesquisar pelo título" />

      <Profile>

        <div>
          <strong>Guilherme Watanabe</strong>
          <a onClick={signOut}>Sair</a>
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