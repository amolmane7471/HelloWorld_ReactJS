import React from 'react';
import './App.css';
import logo from './assets/img/BL_logo_square_jpg.jpg'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      title: 'Hello From Bridgelabz'
    }
  }
  render(){
  return (
      <div>
          <h1>{this.state.title}</h1>
          <img src={logo}
            alt="The Bridgelabz Logo: a Bridgelabz To Employment Through Lab Works" />
      </div>
    );
  }
}
export default App;
