import React from 'react'
import { useState, useEffect} from 'react'
import { API_CATEGORY } from './settings'
import {AppProvider} from './context/AppContext'
import Router from './routers/Router'
import './App.css'

const App = () => {

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch(API_CATEGORY)
      .then(response => {
        if (!response.ok) throw new Error(response.statusText)
        return response.json();
      })
      .then(data => setCategories(data))
      .catch(err => {
      });
  }, [])

  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
