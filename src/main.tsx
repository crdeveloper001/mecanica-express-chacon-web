//eslint
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>

    {aos.init()}
    <App />
  </HelmetProvider>
)
