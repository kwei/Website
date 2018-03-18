import {inter_dataset} from '../module/database/dataset.js';
import Terminal from 'terminal-in-react';

//var mongo = require('mongodb');

var topics = [
	"Bedding",
	"Children", 
	"Cowboy", 
	"Daily", 
	"Gentleman", 
	"Interesting", 
	"Ladies-celebrity", 
	"Make-up", 
	"Popular-apparel", 
	"Popular-Famous", 
	"Sports"
];

function click_func(side){
	console.log('You click the ' + side + ' picture.');
	// get the chosen info
}
export {click_func}

function setImgs(imgsrc){
}
export {setImgs}

function getImgs(imgpath1, imgpath2){
	//var randtopic1 = topics[Math.floor(Math.random() * Math.floor(11))];
	var randtopic1, randtopic2;
	while(1){
		randtopic1 = topics[Math.floor(Math.random() * Math.floor(11))];
		if(randtopic1 !== imgpath1){
			break;
		}
	}
	var imgsrc1 = require('../module/img/' + randtopic1 + '/1.jpg');
	//setTimeout(()=>{console.log('timeout!')}/*callback function*/, 1000);

	//var randtopic2 = topics[Math.floor(Math.random() * Math.floor(11))];
	while(1){
		var randtopic2 = topics[Math.floor(Math.random() * Math.floor(11))];
		if(randtopic2 !== randtopic1 && randtopic2 !== imgpath2){
			break;
		}
	}
	var imgsrc2 = require('../module/img/' + randtopic2 + '/1.jpg');
	//setTimeout(()=>{console.log('timeout!')}/*callback function*/, 1000);

	var imgset = {
		imgsrc1,
		imgsrc2
	}
	return imgset;
}
export {getImgs}