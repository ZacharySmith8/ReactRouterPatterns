import React from 'react';




import {Switch,Route,Redirect,useParams} from 'react-router-dom'
import Nav from './Nav';
import dogs from  './dogs';
import DogList from './DogList';
import DogDetails from './DogDetails';
import './App.css';



function App() {
  const {name} = useParams();
  return (
    <>
        <Nav dogs={dogs}></Nav>
    <Switch>
      <Route exact path="/dogs" >
        <DogList dogs={dogs} /> 
      </Route>
      <Route path="/dogs/:name" >
        <DogDetails /> 
      </Route>
      <Redirect to="/dogs" />
    </Switch>
    </>

  );
}

export default App;
