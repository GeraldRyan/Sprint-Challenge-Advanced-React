import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar  from './components/Navbar'
import
{
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';




export default class App extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      playerData: []
    }
  }

  componentDidMount()
  {
    const url = "http://localhost:5000/api/players"
    axios.get(url)
      .then(response =>
      {
        this.setState({
          playerData: response.data
        })
        console.log(this.state.playerData)
      })
      .catch("You caught me")
  }




  render()
  {





    return (
      <div>
        <Navbar></Navbar>
        <br />
        <br />
        <h1>Player Data</h1>
        {this.state.playerData.map(item =>
        {
          return (
            <Card >
              <CardBody>
                <CardTitle>
                  {`Player Name: ${item.name}`}
                </CardTitle>

                <CardSubtitle>
                  {`Country: ${item.country}`}
                </CardSubtitle>
                <CardText>
                  {`searches: ${item.searches}`}

                  {item.searches}
                  <br />

                  {`id: ${item.id}`}
                  {item.id}

                </CardText>


                {/* {JSON.stringify(item)} */}
              </CardBody>
            </Card>
          )
        })}

      </div>
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
