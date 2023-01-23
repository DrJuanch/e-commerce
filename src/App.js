import React from 'react';
import {Header} from "./components/Header"
import 'boxicons';
import {BrowserRouter as Router} from "react-router-dom"
import {Pages} from './components/Pages.js'
import {DataProvider} from'./components/Context/DataProvider.js'
import {Cart} from './components/ShoppingCart';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Header/>
        <Cart/>
        <Pages/>
      </Router>
    </div>
    </DataProvider>  
  );
}

export default App;
