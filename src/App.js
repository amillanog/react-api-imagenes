import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchImagesProvider from './Contexts/SearchImgesContext';
import MainImages from './components/SearchImages';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';

const App = () => (

  <BrowserRouter>  
    <Header /> 
    <Switch>        
        <Route exact path='/'>
            <SearchImagesProvider > 
                <MainImages />
            </SearchImagesProvider>  
        </Route>     
    </Switch> 
    <Footer />   
  </BrowserRouter> 
  
  );

export default App;
