import axios from 'axios';
import { useState } from 'react';
import NotFoundUser from '../../components/NotFoundUser/NotFoundUser';
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
  created_at: Date;
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
    created_at: new Date(),
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

  const handleDate = (date: Date) => {
    const newDate = new Date(date);

    return `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
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
        <button
          type='submit'
          disabled={name === '' ? true : false}
          className='search__btn'
        >
          {isLoading ? 'Pesquisando...' : 'Pesquisar'}
        </button>
      </form>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data.name === '' ? (
            <>{isVisible && <NotFoundUser text='Usu??rio n??o encontrado!'/>}</>
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
                  <p>reposit??rios p??blicos: {data.public_repos}</p>
                  <p>seguidores: {data.followers}</p>
                  <p>seguindo: {data.following}</p>
                </div>

                <div className='perfil__info'>
                  <h4>Informa????es</h4>
                  <p>
                    <b>Nome</b>: {data.name}
                  </p>
                  <p>
                    <b>Biografia</b>: {data.bio}
                  </p>
                  <p>
                    <b>Localiza????o</b>: {data.location}
                  </p>
                  <p>
                    <b>Criado em</b>: {handleDate(data.created_at)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
