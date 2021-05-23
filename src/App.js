import React,{useState} from 'react';
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'
function App() {
  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartIsshown=()=>{
  setCartIsShown(true);
  };
  const hideCartIsshown=()=>{
      setCartIsShown(false);
  }
  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartIsshown} /> }
      <Header onShowCart={showCartIsshown} onHideCart={hideCartIsshown} />
      <main>
      <Meals />
      </main>
    </div>
  );
}

export default App;
