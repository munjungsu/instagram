import React from 'react';
import Login from './pages/Login';
import Feed from './pages/Feed';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
