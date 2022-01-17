import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      return alert("all the fields are mandatory");
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: " " });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button className="ui button blue">Add</button>
          <Link to="/">
            <button className="ui button blue">Contact List</button>
          </Link>
        </form>
      </div>
    );
  }
}
