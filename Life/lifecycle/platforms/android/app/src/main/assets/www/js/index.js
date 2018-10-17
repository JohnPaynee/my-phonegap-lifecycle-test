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
	
	document.addEventListener("resume", onResume, false); //Creates event for alert message
	document.addEventListener("pause", onPause, false); //Creates event for alert message
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }

    function {
    var key = “pen”;
    var value = “blue”;

    var key = “macbook”;
    var value = “green”;

    var key = “headphones”;
    var value = “white”;

    var key = “coins”;
    var value = “gold”;

    var key = “glasses”;
    var value = “grey”;

    var key = “lanyard”;
    var value = “teal”;

    window.localStorage.setItem( macbook, green” );
    window.localStorage.setItem( headphones, white” );
    window.localStorage.setItem( coins, gold” );
    window.localStorage.setItem( glasses, grey” );
    window.localStorage.setItem( lanyard, teal” );


    var value1 = window.localStorage.getItem(pen);
    var value2 = window.localStorage.getItem(macbook);
    var value3 = window.localStorage.getItem(headphones);


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
