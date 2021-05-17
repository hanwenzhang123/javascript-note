document.addEventListener('keypress', respondToKey(event));   //respondToKey is a callback function

function respondToKey(event){
  console.log('key pressed.');
}


.addEventListener('click', function(event){
  console.log(event);   //log the event that actually triggers the addEventListener
});



function anotherAddEventListener(typeOfEvent, callback){
  
  //detect event code...
  var eventThatHappened = {
    eventType: 'keypress',
    key:'p'
    durationOfKeypress: 2
  }
  
  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
}


anotherAddEventListner('keypress', function(event) {
  console.log(event);
});
 
