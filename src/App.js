import React, { Component } from 'react';
import './App.css';

const country_stuff = ["chicken", "pig", "cow", "farmer", "lack of basic sevices", "'is that potable?'"]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    }
  }

  updateSearch(event) {
    console.log(event.target.value);
    this.setState({search: event.target.value})
  }

  render() {
    let filteredStuff = country_stuff.filter(
      (stuff) => {
        return stuff.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div className="App">
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <ul>
          {filteredStuff.map((stuff, i)=>
            <li key={i}>{stuff}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
