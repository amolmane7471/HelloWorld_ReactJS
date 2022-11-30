import React from 'react';
import './App.css';
import logo from './assets/img/BL_logo_square_jpg.jpg'

class App extends React.Component {
  url='https://www.bridgelabz.com'

  constructor(){
    super()
    this.state = {
      title: 'Hello From Bridgelabz'
    }
  }

//onclick function
  onClick = (event) =>{
    console.log("Button is clicked!",event);
    window.open(this.url,"_blank");
}

  render(){
  return (
      <div>
          <h1>{this.state.title}</h1>
          <img src={logo} onClick={this.onClick}
            alt="The Bridgelabz Logo: a Bridgelabz To Employment Through Lab Works" />
      </div>
    );
  }
}
export default App;
