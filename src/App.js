import React from 'react';
import './App.css';
import Header from './components/Header';
import { Provider } from "react-redux"
import configureStore from "./redux/configureStore";
import PokemonList from './components/PokemonList';

const store = configureStore();

function App() {

  return (
    <Provider store={store}>
      <Header></Header>
      <div className="container">
        <PokemonList />
      </div>
    </Provider>
  );
}

export default App;
