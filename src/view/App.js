import React, { Component } from 'react';
import Myterminal from './consoleTerminal';
import '../css/App.css';
import {
  click_func,
  setImgs,
  getImgs
} from '../controller/functionset';

class App extends Component {
  constructor(props){
    super(props);
    this.btonClick = this.btonClick.bind(this);
    this.state = {
      chosen : ' ',
      imgsrc1 : require('../module/img/Bedding/15.jpg'),
      imgsrc2 : require('../module/img/Children/15.jpg'),
      submit : null
    }
  }

  

  btonClick = function(side){
    if(side === 'left' || side === 'right'){
      this.setState({chosen: side});
      click_func(side);
      var imgset = getImgs(this.state.imgsrc1, this.state.imgsrc2);
      this.setState({
        imgsrc1 : imgset.imgsrc1,
        imgsrc2 : imgset.imgsrc2,
      });
    }else if(side === 'btsubmit'){
      console.log('button clicked!');
      this.setState({
        submit : 'button clicked!'
      });
      setTimeout(()=>{
        this.setState({
          submit : null
        });
      }, 5000);
    }
  }

  componentWillMount(){
    var imgset = getImgs(this.state.imgsrc1, this.state.imgsrc2);
      this.setState({
        imgsrc1 : imgset.imgsrc1,
        imgsrc2 : imgset.imgsrc2,
      });
  }

  componentDidMount() {
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
            <a href='#' onClick={()=>this.btonClick('left')}>
              <img className="img1" src={this.state.imgsrc1} alt="left_img" />
            </a>
          </div>
          <div className="right-img">
            <a href='#' onClick={()=>this.btonClick('right')}>
              <img className="img2" src={this.state.imgsrc2} alt="right_img" />
            </a>
          </div>
        </div>
        <div className="btbox">
          <button className="button_submit" onClick={()=>this.btonClick('btsubmit')} alt="btsubmit">Submit</button>
        </div>
        <div className="terminalbox">
          <div className="terminal">
            <Myterminal />
          </div>
        </div>
        <div className="right-blank"></div>
        <div className="footer">
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
