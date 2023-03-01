import React, { Component } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Media from "./components/Media";

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: "danger",
      header: "Fatal Error",
      content: "ini content dari alert",
      title: "Image",
      desc: "ini ciboox 1",
      image: "WhatsApp Image 2023-02-28 at 08.58.20.jpg"
    };
  }
  //satu
  changeTypeAlert = (event) => {
    this.setState({ type: event.target.value });
  };

  changeHeaderAlert = (event) => {
    this.setState({ header: event.target.value });
  };

  changeContentAlert = (event) => {
    this.setState({ content: event.target.value });
  };

  changeTitleImage = (event) => {
    this.setState({ title: event.target.value });
  };

  changeGambarImage = (event) => {
    this.setState({ image: event.target.value });
  };
  
  changeDescImage = (event) => {
    this.setState({ desc: event.target.value });
  };

  render() {
    return (
      <>
        <div className="mt-3 container text-center">
          <Alert type={this.state.type} header={this.state.header}>
            {this.state.content}
          </Alert>
        </div>
        <hr />

        <h4>Alert Control</h4>
        <b className="text-left">Tipe Alert</b>
        <select
          className="form-control"
          name="type"
          value={this.state.type}
          onChange={this.changeTypeAlert}
        >
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
          <option value="info">Info</option>
        </select>
        <b className="text-left">Header Alert</b>
        <input
          type="text"
          name="header"
          className="form-control"
          value={this.state.header}
          onChange={this.changeHeaderAlert}
        />
        <b className="text-left">Content Alert</b>
        <input
          type="text"
          name="content"
          className="form-control"
          value={this.state.content}
          onChange={this.changeContentAlert}
        />

        <div className="mt-3 container text-center">
          <Media type="info" title={this.state.title} image={this.state.image}>
          {this.state.desc}
          </Media>
        </div>

        <hr />
        <h4>Image Control</h4>

        <b className="text-left">Image</b>
        <select
          className="form-control"
          name="type"
          value={this.state.image}
          onChange={this.changeGambarImage}
        >
          <option value="WhatsApp Image 2023-02-28 at 08.58.20.jpg">Image 1</option>
          <option value="WhatsApp Image 2023-02-28 at 08.58.21.jpg">Image 2</option>
          <option value="WhatsApp Image 2023-02-28 at 08.58.212.jpg">Image 3</option>
        </select>

        <b className="text-left">Title</b>
        <input
          type="text"
          name="title"
          className="form-control"
          value={this.state.title}
          onChange={this.changeTitleImage}
        />

        <b className="text-left">Desc</b>
        <input
          type="text"
          name="desc"
          className="form-control"
          value={this.state.desc}
          onChange={this.changeDescImage}
        />
      </>
    );
  }
}

export default App;
