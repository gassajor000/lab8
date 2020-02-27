// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initMap();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	$('.judge-img').bind('taphold', tapholdHandler);
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
  $('#rsvpForm').submit(function(e){
	  e.preventDefault();
	  console.log('submitting form');
	  var rsvpEmail = $('#rsvpEmail').val();
	  $.post('/addRSVP', {
		  rsvpEmail: rsvpEmail}, postCallback);
  })
}

function postCallback(res){
	alert('rsvp form successfully submited!');
	$('#rsvpEmail').val('');
}

// taphold Handler
function tapholdHandler(event){
	// get id of source event
	var targetIDPrefix = event.target.id;
	// console.log("got prefix:" + targetIDPrefix);
	// show bio
	$('#'+targetIDPrefix + "-bio").show();
}