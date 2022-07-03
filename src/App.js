import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component{

add = ()=>{
  let taskjs = document.getElementById("tasktID");
  const ul = document.getElementById("list");
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(taskjs.value));
            ul.appendChild(li);
            

}
  render(){
    return(
      <div className="App">
        <div className='container' >
        
      <h2>TODO LIST</h2>
      <h5>Write your note</h5>
      <input id="tasktID" type="text"/>
      <button onClick={this.add} type="button">Add!</button>

      
     <ul id="list"></ul>
    
     </div>
      </div>
    )
  }
}


export default App;
