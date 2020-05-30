import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ProductTable from './ProductTable';



export const product=[
  {category: 'electronics',price: 2000,name: 'Iphone' },
  {category: 'clothes',price: 100,name: 'shirt'},
  {category: 'electronics',price: 1200,name: 'samsung' },
  {category: 'clothes',price: 200,name: 'pullover'}];

  


ReactDOM.render(
  <React.StrictMode>
    <ProductTable product={product} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
export default {
  product,
}
