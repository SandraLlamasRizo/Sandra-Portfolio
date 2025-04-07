import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router'
import MainRoutes from './routes.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Header/>
    <MainRoutes />
    <Footer/>
  </HashRouter>
)
