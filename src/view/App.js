import React, { Component } from 'react';
import imgsrc1 from '../module/img/12.jpg'
import imgsrc2 from '../module/img/44.jpg'
import '../css/App.css';
import {
  click_func
} from '../controller/functionset';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chosen : null,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Customer Analysis System</h1>
          <h4 className="App-subtitle">
            This system will make your own intrests table.<br/>
            The only thing you need to do is to choose the picture which you like.
          </h4>
        </header>
        <div className="imgbox">
          <div className="left-img">
            <a href='#' onClick={()=>{this.setState({chosen: 'left'})}}>
              <img className="img1" src={imgsrc1} />
            </a>
          </div>
          <div className="right-img">
            <a href='#' onClick={()=>{this.setState({chosen: 'right'})}}>
              <img className="img2" src={imgsrc2} />
            </a>
          </div>
          <p>You choose the {this.state.chosen} pictue.</p>
        </div>
        <div className ="footer">
          <h3 className="footer-title">Thanks for useing the Customer Analysis System</h3>
          <h5 className="footer-subtitle">
            &copy; 2018 KW<br/><br/>
            We are useing ReactJs and it is awesome!<br/>
            Follow my <a className="link_github" href="https://github.com/">github</a> to get more info.
          </h5>
        </div>
      </div>
    );
  }
}

export default App;
