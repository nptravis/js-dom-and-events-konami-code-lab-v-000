const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let i = 0;
  document.addEventListener('keydown', function(key) {
	  	
	  	if (key.which === code[i]) {
	  		i++;
	  		if(i === code.length){
	  			window.alert("wefwefqwefqwf");
	  			i = 0;
	  		}
	  		
	  		
	  	} else {
	  		i = 0;
	  	}
	 
	});
}

init();