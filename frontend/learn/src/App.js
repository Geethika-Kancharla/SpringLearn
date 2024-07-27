import React from 'react';
import ListEmployee from './components/ListEmployee';
import { Routes, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ListEmployee />} />
      <Route path='/add' element={<AddEmployee />} />
    </Routes>
  );
}

export default App;