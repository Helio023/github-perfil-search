import './styles.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <div className='header'>
      <nav className='navbar'>
        <h1>
          <Link className='navbar__logo' to='/'>
            HelioDev
          </Link>
        </h1>
        <ul className='navbar__menu'>
          <li className='navbar__item'>
            <a
              className='navbar__link'
              rel='noreferrer noopener'
              title='social media'
              target='_blank'
              href='https://github.com/Helio023'
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className='navbar__item'>
            <a
              className='navbar__link'
              rel='noreferrer noopener'
              title='social media'
              target='_blank'
              href='https://www.linkedin.com/in/h%C3%A9lio-engr%C3%A1cia-mapupo-8875561b9/'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
