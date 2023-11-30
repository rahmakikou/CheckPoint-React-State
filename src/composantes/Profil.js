import React from 'react'; 
 
class Profil extends React.Component {
    state = {
      Person: {
        fullName : "Hello I am Rahma Khiari",
        bio : "Amoureuse de Paris",
        residency : "I live in Kram", 
        imgSrc : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg", 
        profession : "On a journey to find myself. Self care is my middle name ! "
      }, 
      count : 0 , 
      show : false, 
    };
      
    componentDidMount(){
        setInterval(()=> this.setState({count: this.state.count+1}),1000); 
    }
    render() {
      return (
        <div>
            <h1>{this.state.count}</h1>
  <h2>{this.state.Person.fullName}</h2>
        <h2>{this.state.Person.bio}</h2>
        <h2>{this.state.Person.residency}</h2> 
        <div className='center'>
        <img className='paris' style={{height: 300, width: 400}} src={this.state.Person.imgSrc} alt="not Found"></img>
        </div>
        <h3>{this.state.Person.profession}</h3> 
        <br/>
        
        </div>
      );
    }
  }  

export default Profil 