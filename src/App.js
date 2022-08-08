import './App.css';
import React from 'react';
import { getListProDuct } from './services/product';
import { useDispatch } from 'react-redux';
import { updateProduct } from './redux/actions/product';
import ListProductCard from './components/Product/ListProductCard';
const App = () => {
  const dispatch = useDispatch();
  getListProDuct().then(data => {
    dispatch(updateProduct(data))
  });
  return (
    <div className="App">
      <ListProductCard></ListProductCard>
    </div>
  );
}

export default App;
