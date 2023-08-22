import { createRoot } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { reportWebVitals } from './reportWebVitals';

const rootElement = document.getElementById('root');
const appRoot = createRoot(rootElement);
appRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
