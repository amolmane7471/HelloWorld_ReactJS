import React from 'react';
import './App.css';
import logo from './assets/img/BL_logo_square_jpg.jpg'

class App extends React.Component {
  url='https://www.bridgelabz.com'

  constructor(){
    super()
    this.state = {
      userName:''
    }
  }

//onclick function
  onClick = (event) =>{
    console.log("Button is clicked!",event);
    window.open(this.url,"_blank");
}

onNameChange = (event) =>{
  console.log("value is ", event.target.value);
  //set the title using setState method
  this.setState({userName: event.target.value})
}

  render(){
  return (
      <>
      <div>
          <h1>Hello {this.state.userName} From Bridgelabz</h1>
          <img src={logo} onClick={this.onClick}
            alt="The Bridgelabz Logo: a Bridgelabz To Employment Through Lab Works" />
      </div>
      <div>
          <input onChange={this.onNameChange} />
      </div>
      </>
    );
  }
}
export default App;
