import './styles.scss';
import { ReactComponent as Background } from '../../../assets/images/bg.svg';
import AppButton from '../../components/Button/AppButton';
import { useNavigate } from 'react-router-dom';




const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/search')
  }
  return (
    <div className='home'>
      <div className='home__text'>
        <h1 className='home__header'>
          Pesquise perfil do <span>github</span>
        </h1>

        <AppButton text='Pesquisar' click={handleClick}/>
      </div>
      <div className='home__image'>
        <Background className='home__bg' />
      </div>
    </div>
  );
};

export default Home;
