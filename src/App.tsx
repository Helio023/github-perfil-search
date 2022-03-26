import { Route, Routes } from 'react-router-dom';
import Navbar from './core/components/Navbar/Navbar';
import NotFoundUser from './core/components/NotFoundUser/NotFoundUser';
import Home from './core/pages/Home/Home';
import Search from './core/pages/Search/Search';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path='*' element={<NotFoundUser text='Página não encontrada'/>} />
      </Routes>
    </>
  );
};

export default App;
