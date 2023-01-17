import { Container, Form, Avatar } from './styles';
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi';

import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() { 
  return (
    <Container>
      <header>
        <ButtonText 
        to='/'
        icon={FiArrowLeft}
        title='Voltar' />
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/LABDevelop.png"
            alt="Foto do usuário"
          />

          <label htmlFor='avatar'>
            <FiCamera />

            <input 
              id='avatar'
              type='file'
            />

          </label>
        </Avatar>

        <Input 
          placeholder='Nome'
          type='text'
          icon={FiUser}  
        />
        <Input 
          placeholder='E-mail'
          type='text'
          icon={FiMail}  
        />
        <Input 
          placeholder='Senha atual'
          type='password'
          icon={FiLock}  
        />
        <Input 
          placeholder='Nova senha'
          type='password'
          icon={FiLock}  
        />

        <Button title='Salvar' />

      </Form>
    
    </Container>
  );
};