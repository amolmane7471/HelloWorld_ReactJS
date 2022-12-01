import React from 'react';
// import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Hello from './components/Hello';

class App extends React.Component {

  render(){
  return (
      <div >
       <Router>
        <Switch>
          <Route ><Hello/></Route>
        </Switch>
       </Router>
    </div>
    );
  }
}
export default App;
