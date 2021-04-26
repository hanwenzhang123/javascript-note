//real world usages for closure

//distrubuting javascript modules
jQuery
Moment.js
Underscore.js
Express Middleware


app.use(function(req, res, next){
  // middleware logic
  next();
  });
  
var logger = require('mogan');
app.use(logger('dev'));



//beginning

var buttons = document.getElementsByTagName('button');

for(var i = 0; i < buttons.length; i += 1) {
	var button = buttons[i];
	var buttonName = button.innerHTML;
	button.addEventListener('click', function() {
		console.log(buttonName);
	});
}


//fixed
var buttons = document.getElementsByTagName('button');

function createHandler(name) {
  return function(){
    console.log(name);
  }
}

for(var i = 0; i < buttons.length; i += 1) {
	var button = buttons[i];
	let buttonName = button.innerHTML;
	button.addEventListener('click', createHandler(buttonName));
}
//each button is now correctly referring each own name

  
