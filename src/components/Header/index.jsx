import { Container, Profile, Imagem } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
  
  return(
    <Container>

      <strong>RocketMovies</strong>

      <input type="text" placeholder="Pesquisar pelo título" />

      <Profile>

        <div>
          <strong>{user.name}</strong>
          <a onClick={signOut}>Sair</a>
        </div>
        
        <Imagem to='/profile'>
          <img 
            src={avatarUrl}
            alt={user.name}
          />
        </Imagem>

      </Profile>
      
    </Container>
  )
}