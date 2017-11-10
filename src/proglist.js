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


hn.view = function () {
    return m("html", [
        m('h2', 'Select your personal/team name.'),
        m('div', [
            m('ul', [
                Object.keys(hn.vm.DATA).map(function (vv) {
                    return m('p', vv);
                })
            ])
        ])
    ]);
}

m.module(document.getElementById("app"), hn);

