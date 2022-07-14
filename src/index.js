import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Nav } from './routes/Nav';
import { Home } from './Home';
import { PokemonId } from './routes/PokemonId';
import { About } from './routes/About';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/localization/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="*" element={<Navigate replace to="/"/>}/>
        <Route index element={<Nav/>}/>
        <Route path="pokemons" element={<App/>}/>
        <Route path="pokemons/:pokemonId" element={<PokemonId/>}/>
        <Route path="190922" element={<About/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </I18nextProvider>
);


