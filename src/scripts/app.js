function loadScript( url, callback ) {
  var script = document.createElement( "script" )
  script.type = "text/javascript";
  if(script.readyState) {  //IE
    script.onreadystatechange = function() {
      if ( script.readyState === "loaded" || script.readyState === "complete" ) {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Others
    script.onload = function() {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName( "head" )[0].appendChild( script );
}

function STARTUP_VIA_RAVEN() {

// Init Sentry.io
Raven.config('https://3e70f7a92f4c4e448f4bb97da8e1908d@sentry.io/233842').install();

Raven.context(function () {

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDTkHkrTUcgA7rscGXM72YHRxcidMA4rJw",
    authDomain: "kareltherobot-eedab.firebaseapp.com",
    databaseURL: "https://kareltherobot-eedab.firebaseio.com",
    projectId: "kareltherobot-eedab",
    storageBucket: "kareltherobot-eedab.appspot.com",
    messagingSenderId: "729639063558"
};
	
window.mostRecentProgram = '';
window.storeProgram = function(str) {
    if (str === window.mostRecentProgram) return;
    try {
	window.storageRef.child(window.karel_session_name+'/'+(++window.karel_storage_index)+'.txt')
	    .putString(str).then(function(snapshot) {
		    window.mostRecentProgram = str;
		    // alert('good store');
		});
    } catch(ex) {
	console.log('Attempt to store program in firebase failed.');
    }
};

function xcheckTime(i) {
    if (i < 10) {
	i = "0" + i;
    }
    return i;
}

function produceTimeHumanFriendly() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = xcheckTime(m);
    h = xcheckTime(h);
    s = xcheckTime(s);
    return h + "_" + m + "_" + s;
}

	
try {
    firebase.initializeApp(config);
    var auth = firebase.auth();
    window.storageRef = firebase.storage().ref();

    $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
	    window.ipaddress = data['ip'];
	    window.karel_session_name = window.ipaddress + "__" + produceTimeHumanFriendly();
	    window.karel_storage_index = 0;
	    // alert(window.karel_session_name);
	    try {
		window.storageRef.child(window.karel_session_name+'/start.sentinel').putString('hello').then(function(snapshot) {
			;  //nothing to do here
		    });
	    } catch(ex) {}
	});
} catch(ex){}

});

}


loadScript('https://cdn.ravenjs.com/3.19.1/raven.min.js', STARTUP_VIA_RAVEN);
