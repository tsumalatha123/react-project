import logo from './logo.svg';
import './App.css';
import Overview from './overview';
import PropClassFunDemo from './ClassfunCompodemo';
import PropsFuncDemo from './FunctCompoDemo';
import ProductDetails from './ProductPage';
import Product from './ProductDetails';
import ProductPage from './ProductPage';
import { useState } from 'react';
import DashboardPage from './Dashboard';

function App() {

  const [count, setCount] = useState(0);

  function incrementCount() {
      setCount(count+1);
  }


  return (
    <div class="app">
      {/* <Overview></Overview> */}
      {/* <PropClassFunDemo number="098790098"></PropClassFunDemo> */}
      {/* <PropsFuncDemo name="Suma"></PropsFuncDemo> */}
      {/* <ProductPage count={count} onClick={incrementCount}></ProductPage> */}
      {/* <ProductPage count={count} onClick={incrementCount}></ProductPage> */}
      <DashboardPage></DashboardPage>
    </div>
   
  );
}

export default App;
