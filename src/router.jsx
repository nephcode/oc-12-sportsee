// IMPORTS LIBRARIES AND DEPENDENCIES ==========================================//
import { createRoot } from 'react-dom/client';
import '../src/scss/global.module.scss';
import server from './utils/server.js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Profile from './pages/Home';

// IMPORT COMPO
import Header from './layout/Header/index.jsx';

// eslint-disable-next-line no-undef
console.log(`URL_API: ${URL_API}`);
console.log('import.meta.env.MODE:', import.meta.env.MODE);

if (import.meta.env.MODE === 'development') {
  server();
}

createRoot(document.getElementById('root')).render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/12" />} />
      <Route path="/:id" element={<Profile />} />
    </Routes>
  </Router>
);
