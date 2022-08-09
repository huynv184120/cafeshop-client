import './App.css';
import React from 'react';
import { getListProDuct } from './services/product';
import { useDispatch } from 'react-redux';
import { updateProduct } from './redux/actions/product';
import ListProductCard from './components/ListProductCard';
import { Routes, Route } from 'react-router-dom';
import HomePage from './containers/Homepage';
const App = () => {
  const dispatch = useDispatch();
  getListProDuct().then(data => {
    dispatch(updateProduct(data))
  });
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>      
    </div>
  );
}

export default App;
