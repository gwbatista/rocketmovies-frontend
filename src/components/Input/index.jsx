import { Container } from './styles';

export function Input({icon: Icon, ...rest}) {
  return(
    <Container>
      {Icon && <Icon size={20} />} {/* existe o icone, aí sim mostro ele, caso contrario não. Tamanho 20px */}
      <input {...rest} />

    </Container>
  )
}