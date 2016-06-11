Template.sgNav.helpers({
    components: function() {
        return _.values(SG.components);
    },
    active: function() {
        return (this.name === SG.getComponent()) ? "active" : "";
    }
});

Template.sgCompStyle.helpers({
    active: function() {
        return (this.component === SG.getComponent() &&
            this.style.descr === SG.getStyle()) ? "active" : "";
    }
});
Template.sgCompStyle.events({
    click: function(e) {
        e.preventDefault();
        var cmp = this.component;
        var style = this.style.descr;
        console.debug("cmp", cmp, "style", style);
        SG.setComponent(cmp);
        SG.setStyle(style);
    }
});
