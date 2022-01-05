import axios from 'axios';
import { useState } from 'react';
import Loader from './components/Loader/Loader';

import './styles.scss';

type DataProps = {
  url: string;
  html_url: string;
  avatar_url: string;
  name: string;
  location: string;
  bio: string;
  public_repos: string;
  followers: string;
  following: string;
};

const Search = () => {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [data, setData] = useState<DataProps>({
    url: '',
    html_url: '',
    avatar_url: '',
    name: '',
    location: '',

    bio: '',
    public_repos: '',
    followers: '',
    following: '',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsVisible(true);
    setIsLoading(true);
    axios(`https://api.github.com/users/${name}`)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className='search '>
      <form className='search__box' onSubmit={handleSubmit}>
        <h1 className='search__header'>Encontre um perfil do GitHub</h1>
        <input
          onChange={handleOnChange}
          value={name}
          type='text'
          placeholder='ex: helio023'
          className='search__input'
        />
        <button type='submit' className='search__btn'>
          {isLoading ? 'Pesquisando....' : 'Pesquisar'}
        </button>
      </form>

      {isLoading ? (
        <Loader />
      ) : (
        <div className={isVisible ? 'perfil' : 'hide'}>
          <div className='perfil__img'>
            <img src={data.avatar_url} alt={`Imagem de: ${data.name}`} />
            <a
              className='perfil__btn'
              href={data?.html_url}
              target='_blank'
              rel='noreferrer'
            >
              Ver perfil
            </a>
          </div>

          <div className='perfil__data'>
            <div className='perfil__rep'>
              <p>repositórios públicos: {data.public_repos}</p>
              <p>seguidores: {data.followers}</p>
              <p>seguindo: {data.following}</p>
            </div>

            <div className='perfil__info'>
              <h4>Informações</h4>
              <p>Nome: {data.name}</p>
              <p>Biografia: {data.bio}</p>
              <p>Localização: {data.location}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
