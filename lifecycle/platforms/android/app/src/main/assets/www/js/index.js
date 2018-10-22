var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
/*var key = “macbook”;
var value = “green”;
var value2 = window.localStorage.getItem(#macbook);*/


document.addEventListener("deviceready", onDeviceReady, false); //Prepares device
/*window.localStorage.setItem( "macbook", "green" );*/


function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	/*$("#macbook").text("Colour: " + launched_count);*/
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {

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
