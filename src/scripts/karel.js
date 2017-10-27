// This should be the only script loaded by the HTML directly.

require.config({
    baseUrl: "scripts",
    paths: {
        "jquery-ui":                  "libs/jquery-ui-1.7.2.custom.min",
        "bootstrap":                  "libs/bootstrap.min",
        "plugins":                    "libs/plugins",
        "css3-mediaqueries":          "libs/css3-mediaqueries",
		    "Ember":                      "libs/ember-0.9.7.1.min",
		    "peg":                        "libs/peg/peg-0.7.0",
		    "linedtextarea":              "../jquery-linedtextarea/jquery-linedtextarea",
		    "codemirror":                 "libs/codemirror"
    },
    waitSeconds: 15
});


// ORDER IMPORTANT: must be echoed in the function decl directly below this!
require(
    [
        "jquery-ui"
        , "bootstrap"
        , "plugins"
	      , "css3-mediaqueries"
	
	      , "codemirror"
	      , "https://www.gstatic.com/firebasejs/4.6.0/firebase.js"
        , "https://cdn.ravenjs.com/3.19.1/raven.min.js"
	
        , "EmberModule"
	
	      , "peg"
	      , "linedtextarea"
	
        , "firebase_conn"

	      , "jsim"
	      , "jsim.functiontable"
	      , "jsim.callstack"
	      , "jsim.stepshash"
	      , "jsim.var"
	      , "jsim.parse"
	      , "jsim.postparse"
	      , "jsim.codegen"
	      , "worldsim"
	      , "worldsim.karelsim"
	      , "karelsim"
	      , "karelsim.events"
	      , "karelsim.impexp"
	      , "karelsim.public"
	      , "karelsim.worlds"
    ],
    
	function (jqui, b, p, mq, codemirror, firebase_undefined, raven,
			      Em, peg, lined, firebase_conn, jsim,
            jsimfunctiontable, jsimcallstack, jsimstepshash, jsimvar, 
			      jsimparse, jsimpostparse, jsimcodegen,
			      WORLDSIM, worldsimkarelsim, 
			      karelsim, karelsimevents, karelsimimpexp,
			      karelsimpublic, karelsimworlds) {
		  "use strict";
		  window.CodeMirror = (codemirror);
		  window.firebase = firebase;
		  window.raven = raven;
		  WORLDSIM.worldController.initExplicit();
		  window.STARTUP_VIA_RAVEN();
      	  karelsim.init();
  }
);

