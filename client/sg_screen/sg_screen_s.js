SG.screens = [{
    name: "iPhone6",
    width: 375,
    height: 667,
    zoom: 1
}, {
    name: "Laptop",
    width: 1366,
    height: 1080,
    zoom: 0.8
}, {
    name: "Desktop",
    width: 1440,
    height: 1080,
    zoom: 0.7
}, ];


function setScreenSession(name) {
    Session.set("screen", name);
    var screen = _.find(SG.screens, function(s) {
        return s.name === name;
    });
    if (screen) {
        Session.set("screen-width", screen.width);
        Session.set("screen-height", screen.height);
        Session.set("screen-zoom", screen.zoom);
    } else {
        console.error("invalid screen:", name);
    }
}

Meteor.startup(function() {
    setScreenSession(SG.screens[0].name);
});

Template.sgScreenS.helpers({
    data: function() {
        return {
            screens: SG.screens,
            selected: function() {
                return (this.name === Session.get("screen")) ? "selected" : "";
            },
            action: function(value) {
                if (value != Session.get("screen")) {
                    setScreenSession(value);
                }
            }
        };
    }
});
