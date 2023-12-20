import React, { Component } from "react";
import './Settings.css';

class Settings extends Component {
  state = {
    backgroundColor: "#191919",
    loaded: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    document.body.style.backgroundColor = this.state.backgroundColor;
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 0);
  }

  render() {
    const { backgroundColor, loaded } = this.state;

    return (
      <div className={`settings-container ${loaded ? 'fade-in' : ''} ${!loaded ? 'loading' : ''}`}>
        <h1>Settings</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="setting-item">
            <label htmlFor="backgroundColor">Background Color:</label>
            <select name="backgroundColor" value={backgroundColor || "#191919"} onChange={this.handleChange}>
              <option value="#191919">Dark (Default)</option>
              <option value="LightPink">Light Pink</option>
              <option value="LightBlue">Blue</option>
              <option value="#c0eb75">Light Lime</option>
            </select>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default Settings;
