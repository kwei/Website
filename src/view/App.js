import React, { Component } from 'react';
//import Myterminal from './consoleTerminal';
import Snackbar from 'material-ui/Snackbar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
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
      randtopic1 : 'Bedding',
      imgsrc2 : require('../module/img/Children/15.jpg'),
      randtopic2 : 'Children',
      submit : null,
      submit_open: false,
      left_open: false,
      right_open: false,
      msg : ''
    }
  }

  

  btonClick = function(side){
    if(side === 'left' || side === 'right'){
      this.setState({chosen: side});
      var dataset = {
        userName: 'KW',
        testId: 0,
        picLeft: this.state.randtopic1,
        picRight: this.state.randtopic2,
        chosen: side
      }
      var table = click_func(dataset);
      this.setState({
        msg: table.userName + " #" + table.testId + "  [ " + table.picLeft + " / " + table.picRight + " ] chosen: " + table.chosen,
      });
      var imgset = getImgs(this.state.imgsrc1, this.state.imgsrc2);
      this.setState({
        imgsrc1 : imgset.imgsrc1,
        imgsrc2 : imgset.imgsrc2,
        randtopic1 : imgset.randtopic1,
        randtopic2 : imgset.randtopic2,
        chosen : side,
      });
    }else if(side == 'submit'){
      this.setState({
        submit_open: true,
      });
    }
  }

  handleRequestClose = () => {
    this.setState({
      submit_open: false,
      left_open: false,
      right_open: false,
    });
  };

  componentWillMount(){
    var imgset = getImgs(this.state.imgsrc1, this.state.imgsrc2);
      this.setState({
        imgsrc1 : imgset.imgsrc1,
        imgsrc2 : imgset.imgsrc2,
        randtopic1 : imgset.randtopic1,
        randtopic2 : imgset.randtopic2,
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
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <RaisedButton
              onClick={()=>this.btonClick('submit')}
              label="Submit"/>
            <Snackbar
              className="snackbar"
              open={this.state.submit_open}
              message={this.state.msg}
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose}/>
          </MuiThemeProvider>
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
