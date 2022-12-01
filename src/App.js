import React from 'react';
import './App.css';
import logo from './assets/img/BL_logo_square_jpg.jpg'

class App extends React.Component {
  url='https://www.bridgelabz.com'

  constructor(){
    super()
    this.state = {
      userName:'',
      nameError:''
    }
  }

//onclick function
  onClick = (event) =>{
    console.log("Button is clicked!",event);
    window.open(this.url,"_blank");
}

onNameChange = (event) =>{
  console.log("value is ", event.target.value);

  const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
  //set the title using setState method
  this.setState({userName: event.target.value})
  if(nameRegex.test(event.target.value)){
    this.setState({nameError: ''})
  }else{
   this.setState({nameError: 'Name Is Incorrect'}) 
  }
  
}

  render(){
  return (
      <div className='App'>
        <div className='center'>
          <h1>Hello {this.state.userName} From Bridgelabz</h1>
          <img src={logo} onClick={this.onClick}
            alt="The Bridgelabz Logo: a Bridgelabz To Employment Through Lab Works" />
      <div>
          <input onChange={this.onNameChange} />
          <span className='error-output'>{this.state.nameError}</span>
      </div>
    </div>
    <p>At Bridgelabz,We Are a Community Of</p>
    <ul>
          <li>Technologists</li>
          <li>Thinkers</li> 
          <li>Builders</li> 
        </ul>
          <p>Working together to keep the employability of Engineers alive and accessible, 
            so Tech Companies worldwide can get contributors and creators for technology Solutions.
            We belive this act of human collaboration across an employability platfor is essential 
            to individual growth and our collevtive future.</p>
          <p>To know more about us, visit <a href="https://www.bridgelabz.com/">Bridgelabz</a> to
           learn even more about out mission </p>
          <p>i.e Employability to all</p>
        
    </div>
    );
  }
}
export default App;
