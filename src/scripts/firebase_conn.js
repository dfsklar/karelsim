window.STARTUP_VIA_RAVEN = function() {

    // Init Sentry.io
    window.raven.config('https://3e70f7a92f4c4e448f4bb97da8e1908d@sentry.io/233842').install();

    window.raven.context(function () {

        // Restore author info from session storage
        var authorname = sessionStorage.getItem('authorname');
        if (authorname) {
            $('#authorname').val(authorname).addClass('populated');
            $('.saverui').removeClass('hidden');
        }
        
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


        window.loadProgram = function(pathStorage, callback) {
            storageRef.child(pathStorage).getDownloadURL().then(function(url) {
                // `url` is the download URL for 'images/stars.jpg'
              
                // This can be downloaded directly:
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'text';
                xhr.onload = function(event) {
                    if (callback) 
                      callback(xhr.response);
                };
                xhr.open('GET', url);
                xhr.send();
              }).catch(function(error) {
                  alert("SORRY - our automatic restoration system is current DOWN.  Sorry...");
                  callback(null);
              });
        }


        // Here we store a program by manufacturing a new fullpathname.
        // After storage is performed into Firebase STORAGE, a record of
        // this is made in Firebase DATABASE.
        window.storeProgram = function(str, descriptionForExplicitSave) {

            var isAutosave = (descriptionForExplicitSave == null);

            // If this is an "autosave", then ignore this if the program source code hasn't changed.
            if (isAutosave && (str === window.mostRecentProgram)) 
                return;

            if (isAutosave) {
                descriptionForExplicitSave = "(autosave)";
            }

            window.karel_session_name = window.login_time + "__" + sessionStorage.authorname + '__' + window.ipaddress;            
            try {
                var seqnum = ++window.karel_storage_index;
                var path = window.karel_session_name + '/' + seqnum;
	            window.storageRef.child(path)
	                  .putString(str).then(function(snapshot) {
		                    window.mostRecentProgram = str;
		                    // alert('good store');
                        });
                window.firebaseDB.ref("/code-snaps/" + sessionStorage.authorname + "/" + window.login_time + "/" + seqnum).set(
                    {
                        datetime: produceTimeHumanFriendly(),
                        path: path,
                        description: descriptionForExplicitSave
                    }
                );
                if (!isAutosave)
                    alert("Your program was SAVED along with the description you provided.")
            } catch(ex) {
                  console.log('Attempt to store program in firebase failed.');
            }
        };

        
        function forceTwoDig(i) {
            if (i < 10) {
	              i = "0" + String(i);
            }
            return String(i);
        }

        // Produces a human-friendly rendering of the CURRENT TIME 
        function produceTimeHumanFriendly() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            // add a zero in front of numbers<10
            m = forceTwoDig(m);
            h = forceTwoDig(h);
            s = forceTwoDig(s);
            return String(1900+today.getYear()) + forceTwoDig(today.getMonth()+1) + forceTwoDig(today.getDate()) + "_" + h + "_" + m + "_" + s;
        }

	      
        try {
            firebase.initializeApp(config);
            window.firebaseApp = firebase.app();
            var auth = firebase.auth();
            window.storageRef = firebase.storage().ref();

            window.firebaseDB = firebase.database();
            window.firebaseDB_codesnaps = window.firebaseDB.ref("/code-snaps");

            // Obtain the IP address
            $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
                  window.ipaddress = data['ip'];
                  window.login_time = produceTimeHumanFriendly();
	              window.karel_storage_index = 0;
	          });
        } catch(ex){}

    });

} // END OF STARTUP_VIA_RAVEN
