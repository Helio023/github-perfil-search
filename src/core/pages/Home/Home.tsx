import './styles.scss';
import { ReactComponent as Background } from '../../../assets/images/bg.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__text'>
        <h1 className='home__header'>
          Pesquise perfil do <span>github</span>
        </h1>

        <Link className='home__btn' to='/search'>
          Pesquisar
        </Link>
      </div>
      <div className='home__image'>
        <Background className='home__bg' />
      </div>
    </div>
  );
};

export default Home;
