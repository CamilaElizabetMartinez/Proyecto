import React from 'react'
import { useState, useEffect} from 'react'
import { API_CATEGORY } from './settings'
import {AppProvider} from './context/AppContext'
import Router from './routers/Router'
import './App.css'

  const [categories, setCategories] = useState(null);

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
