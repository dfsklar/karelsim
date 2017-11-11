var root = document.body;

//initialize the application
var hn = {};

//get connection to Firebase
var ref = new Firebase("https://kareltherobot-eedab.firebaseio.com/");

hn.db = {};


hn.db.init = function () {
    var that = this;
  
    that.SaveEvent = function (post) {
        this.datetime = post.datetime;
        this.description = post.description;
        this.path = post.path;
    }

    //Firebase uses API endpoints and callbacks return a snapshot of data
    var itemRef;
    ref.child('code-snaps').once('value', function (snapshot) {
        hn.vm.DATA = snapshot.val();
        m.redraw();
    });
};





hn.vm = {};
hn.vm.init = function () {
    var that = this;
    that.DATA = new Array();
}



hn.controller = function () {
    hn.vm.init();
    hn.db.init();
}


// datetime looks like yyyymmdd_hh_mm_ss
function rendertime(datetime) {
    var m = datetime.match(/^(\d\d\d\d)(\d\d)(\d\d)_(\d\d)_(\d\d)_(\d\d)$/);
    return new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], 0);
}
    


hn.view = function () {
    return m("html", [
        m('h2', 'Select your personal/team name.'),
        m('div', [
            m('ul', [
                Object.keys(hn.vm.DATA).map(function (teamname) {
                    var teamroot = hn.vm.DATA[teamname];
                    return m('div', [
                        m('h3', teamname),
                        Object.keys(teamroot).map(function(sessiondate) {
                            var session = teamroot[sessiondate];
                            return [
                                m('h4', 'Karel Session started at: ' + rendertime(sessiondate)),
                                Object.keys(session).map(function(saveevent) {
                                    var descr = session[saveevent].description;
                                    var isAutosaved = (descr == '(autosave)');
                                    var label = isAutosaved ?
                                        '(autosaved)' : 'STUDENT SAVED with this description: ' + descr;
                                    return [
                                        m('h5.autosave' + String(isAutosaved), [
                                            m('span', label),
                                            m('a[href=karel.html?fbload='+session[saveevent].path+']', 'LOAD!')
                                        ])
                                    ];
                                })
                            ];
                        })]);
                })
            ])
        ])
    ]);
}

m.module(document.getElementById("app"), hn);
