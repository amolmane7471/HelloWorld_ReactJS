import React from 'react';
// import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Hello from './components/Hello';
import Home from './components/Home';

class App extends React.Component {

  render(){
  return (
      <div >
       <Router>
        <Switch>
          <Route path="/page"><Hello/></Route>
          <Route path='/home'><Home/></Route>
        </Switch>
       </Router>
    </div>
    );
  }
}
export default App;
