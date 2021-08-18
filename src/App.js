import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import "./styles.css";

/*function App() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return (
    <div className="App">
      <SeasonDisplay />
    </div>
  );
}*/

class App extends React.Component {
  /*constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
  }*/
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage} </div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <div> Loading! </div>;
    }
  }
}

export default App;
