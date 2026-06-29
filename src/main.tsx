import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.tsx';
import './styles/index.css';

function getBasename() {
  const base = import.meta.env.BASE_URL;
  if (base === '/') return undefined;
  return base.replace(/\/$/, '');
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={getBasename()}>
    <App />
  </BrowserRouter>,
);
