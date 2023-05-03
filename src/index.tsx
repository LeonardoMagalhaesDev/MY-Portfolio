import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// MY PAGES
import Header from './pages/Header';
import MainSobre from './pages/Main/MainSobre';
import MainHabilidade from './pages/Main/MainHabilidade';
import MainProjeto from './pages/Main/MainProjeto';
import Footer from './pages/Footer/Footer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <MainSobre />
    <MainHabilidade />
    <MainProjeto />
    <Footer />
  </React.StrictMode>
);