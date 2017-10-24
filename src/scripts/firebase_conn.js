window.STARTUP_VIA_RAVEN = function() {

    // Init Sentry.io
    window.raven.config('https://3e70f7a92f4c4e448f4bb97da8e1908d@sentry.io/233842').install();

    window.raven.context(function () {

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
            return String(1900+today.getYear()) + String(today.getMonth()+1) + String(today.getDate()) + "_" + h + "_" + m + "_" + s;
        }

	      
        try {
            firebase.initializeApp(config);
            var auth = firebase.auth();
            window.storageRef = firebase.storage().ref();

            $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
	              window.ipaddress = data['ip'];
                  window.karel_session_name = produceTimeHumanFriendly() + "__" + window.ipaddress;
	              window.karel_storage_index = 0;
	              try {
		                window.storageRef.child(window.karel_session_name+'/start.sentinel').putString('hello').then(function(snapshot) {
			                  ;  //nothing to do here
		                });
	              } catch(ex) {}
	          });
        } catch(ex){}

    });

} // END OF STARTUP_VIA_RAVEN
