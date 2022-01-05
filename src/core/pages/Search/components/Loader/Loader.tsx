import ContentLoader from 'react-content-loader';
import './styles.scss'

const Loader = () => (
  <div className='loader'>
    <div className='image'>
      <ContentLoader
        speed={2}
        width={355}
        height={455}
        viewBox='0 0 255 355'
        backgroundColor='#ebe5e5'
        foregroundColor='#ecebeb'
      >
        <rect x='3' y='248' rx='0' ry='0' width='104' height='30' />
        <rect x='7' y='34' rx='0' ry='0' width='186' height='188' />
        <rect x='61' y='140' rx='0' ry='0' width='71' height='4' />
      </ContentLoader>
    </div>
    <div className='text'>
      <ContentLoader
        speed={2}
        width={900}
        height={355}
        viewBox='0 0 700 355'
        backgroundColor='#ebe5e5'
        foregroundColor='#ecebeb'
      >
        <rect x='12' y='21' rx='0' ry='0' width='120' height='30' />
        <rect x='167' y='23' rx='0' ry='0' width='133' height='29' />
        <rect x='339' y='23' rx='0' ry='0' width='110' height='28' />
        <rect x='15' y='71' rx='0' ry='0' width='567' height='291' />
      </ContentLoader>
    </div>
  </div>
);

export default Loader;
