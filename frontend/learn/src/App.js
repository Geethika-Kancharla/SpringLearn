import React from 'react';
import ListEmployee from './components/ListEmployee';
import { Routes, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import Add from './components/Add';


function App() {
  return (
    <Routes>
      <Route path='/' element={<ListEmployee />} />
      <Route path='/add' element={<AddEmployee />} />
      <Route path='/edit/:id' element={<AddEmployee />} />
      <Route path='try' element={<Add />} />

    </Routes>
  );
}

export default App;