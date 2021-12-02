import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Wrapper } from './App.styles';
import Header from './components/Header/Header';
import SearchPage from './components/SearchPage/SearchPage';
import TrendsPage from './components/TrendsPage/TrendsPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Wrapper>
      <Header />

      <Routes>
        <Route path='/search' element={<SearchPage />} />
        <Route path='/' element={<TrendsPage />} />
      </Routes>
    </Wrapper>
  </BrowserRouter>
);

export default App;
