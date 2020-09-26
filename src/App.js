import React from 'react';
import './App.css';
import Header from './components/Header';
import { Provider } from "react-redux"
import configureStore from "./redux/configureStore";
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const store = configureStore();

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <div>
          <Switch>
              <Route exact path='/'>
                <PokemonList />
              </Route>
              <Route exact path='/pokemon/:pokemon/:id'>
                <PokemonDetail />
              </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
