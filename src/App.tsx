import { Route, Routes } from 'react-router-dom';
import Navbar from './core/components/Navbar/Navbar';
import Home from './core/pages/Home/Home';
import Search from './core/pages/Search/Search';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='search' element={<Search />} />
      </Routes>
    </>
  );
};

export default App;
