({
    appDir: "../src",
	baseUrl: "scripts",
	paths: {
	"jquery-ui":                  "libs/jquery-ui-1.7.2.custom.min",
	    "bootstrap":                  "libs/bootstrap.min",
	    "codemiror":                  "libs/codemirror",
	    "plugins":                    "libs/plugins",
	    "css3-mediaqueries":          "libs/css3-mediaqueries",
	    "Ember":                      "libs/ember-0.9.7.1.min",
		
	    "peg":                        "libs/peg/peg-0.7.0",
	    "linedtextarea":              "../jquery-linedtextarea/jquery-linedtextarea",
	    },
	dir: "../dist",
	keepBuildDir:false,
	optimize:"none",     /* uglify, closure, closure.keepLines, none */
	XXXXoptimize:"uglify",     /* uglify, closure, closure.keepLines, none */
	modules: [
		  {
		      name: "karel",
			  exclude: [] /* ["jquery-ui", "bootstrap", "plugins", "css3-mediaqueries"] */
			  }
		  ]
	})
