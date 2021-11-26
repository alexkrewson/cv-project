import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    task: "",
    tasks: []
  };

  handleInput = event => {
    this.setState({ task: event.target.value });
  };

  onClickBtn = e => {
    e.preventDefault();
    this.setState({ tasks: this.state.tasks.concat(this.state.task) });
    // this.setState({ task: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onClickBtn}>
          <input onChange={this.handleInput} placeholder="enter new task" />
          {/* <button onClick={this.onClickBtn}>add to task list</button> */}
          <button type="submit">Submit</button>
        </form>
        <Overview tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
