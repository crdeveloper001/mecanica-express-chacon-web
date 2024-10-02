import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import './index.css'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>

    {AOS.init()}
    <App />
  </HelmetProvider>
)
