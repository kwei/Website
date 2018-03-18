// set a two dimantion array
class table{
	constructor(props){
		this.setData = this.setData.bind(this);
	    this.getData = this.getData.bind(this);
	    this.state = {
	      // something here
	    }
	}
	setData = function(){
		var result = {
			"Bedding": " ",
			"Children": " ", 
			"Cowboy": " ", 
			"Daily": " ", 
			"Gentleman": " ", 
			"Interesting": " ", 
			"Ladies-celebrity": " ", 
			"Make-up": " ", 
			"Popular-apparel": " ", 
			"Popular-Famous": " ", 
			"Sports": " "
		};
	}
	getData = function(){
		// not yet
	}
}
// an interface
class inter_dataset{
	constructor(props){
		this.setTable = this.setTable.bind(this);
	}

	setTable = function(){
		var table = new table();
		table.setData();
		//table.getData();
	}
}
export {inter_dataset}