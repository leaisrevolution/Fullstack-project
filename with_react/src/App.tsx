import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateGroup from './components/CreateGroup';
import AddMembers from './components/AddMembers';
import ExpenseMain from './components/ExpenseMain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateGroup />}></Route>
        <Route path="/members" element={<AddMembers />}></Route>
        <Route path="/expense" element={<ExpenseMain />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
