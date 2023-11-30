import React from 'react'; 
import './App.css';
import Profil from './composantes/Profil'; 


class App extends React.Component{
  constructor(){
    super()
    this.state={
      show : false   
    }
    
  } 

  MontrerCacher = () => {
    this.setState({ 
      show: !this.state.show,
    }); 
  } 
  render() {
    return (
      <div>
        
        <h1>About myself</h1>
       <h4 className={this.state.show ? 'one' : 'two'}> Want to know me ?</h4>

        {
          this.state.show &&  <Profil/>  
        }
 <div className='bouton'>  
        <button style={{color: this.state.show ? 'red': 'green'}} onClick={this.MontrerCacher}> {this.state.show ? 'Hide':'Show'}</button>
        </div>  
      </div>
    )
  }
} 

export default App;
