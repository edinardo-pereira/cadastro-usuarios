import { Background } from './styles'
import ImageUsuarios from '../../assets/users.png'

function TopBackground(){




    return (
        <Background>
        <img src={ImageUsuarios} alt="Imagem-usuários" />
      </Background>
    )
}

export default TopBackground