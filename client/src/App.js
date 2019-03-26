import React, { Component } from 'react';

import { Provider } from 'react-redux';

import store from './store';

import { Container } from 'reactstrap';

import AppNavbar from './components/app-navbar';
import ItemModal from './components/item-modal';
import ShoppingList from './components/shopping-list';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
          <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </Provider>
    );
  }
}

export default App;
