import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './global.modules.scss'

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
