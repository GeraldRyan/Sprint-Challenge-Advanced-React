import React from 'react';
import axios from 'axios';
import './App.css';




export default class App extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      "name": "",
      "country": "",
      "searches": 1,
      "id": 0
    }
  }


  render()
  {
    return (
      <div>Hello Boys and Girls</div>
    )
  }



}







// Legacy Backup
// function App() {

//   const url = "http://localhost:5000/api/players"
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;
