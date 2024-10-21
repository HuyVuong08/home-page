import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SingleProjectProvider } from './context/SingleProjectContext';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <SingleProjectProvider>
        <App />
    </SingleProjectProvider>
);

reportWebVitals();
