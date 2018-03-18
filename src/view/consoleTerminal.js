import Terminal from 'terminal-in-react';
import React, { Component } from 'react';

class MyTerminal extends Component {
  	constructor(props){
    	super(props);
  	}
  	more = () => [
  		'command1 - for doing something\n\n', 
  		'command2 - for doing something\n\n',
  		'command3 - for doing something\n\n',
  		'command4 - for doing something\n\n',
  		'command5 - for doing something\n\n',
  		'command6 - for doing something\n\n',
  		'command7 - for doing something\n\n',
  		'command8 - for doing something\n\n',
  		'command9 - for doing something\n\n'
  	]
	render() {
	    return (
		  <Terminal
		  	msg="Console log"
		  	commands={{
	        	'more' : this.more,
	        }}
	        descriptions={{
	            more: 'more commands',
	        }}
		    allowTabs = {false}
		    hideTopBar
		    barColor = "gray"
		    watchConsoleLogging />
		);
	}
}

export default MyTerminal;