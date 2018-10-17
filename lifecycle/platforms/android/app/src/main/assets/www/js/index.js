var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

document.addEventListener("deviceready", onDeviceReady, false); //Prepares device
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {

    var key = “macbook”;
    var value = “green”;

    window.localStorage.setItem( 'macbook', 'green' );

    var value2 = window.localStorage.getItem(#keys);
	
	document.addEventListener("resume", onResume, false); //Creates event for alert message
	document.addEventListener("pause", onPause, false); //Creates event for alert message
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
