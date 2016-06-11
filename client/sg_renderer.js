window.addEventListener("message", function(message) {
    if (message.data.type === "set-component") {
        var data = message.data;
        console.log("received set-component");
        FlowRouter.setParams({
            "comp": data.comp,
            "style": data.style
        });
    }
}, false);

Template.sgRenderer.helpers({
    component: function() {
        return FlowRouter.getParam("comp") || "sgEmpty";
    },
    data: function() {
        var ret = {};

        var name = FlowRouter.getParam("comp");
        var stylename = FlowRouter.getParam("style");

        if (name && stylename) {
            console.debug("rendering", name, ">", style, "[", SG.components);
            var cmp = SG.components[name];
            if (cmp) {
                var style = cmp.getStyle(stylename);
                if (style) {
                    ret = style();
                    console.log("data", ret);
                }
            } else {
                console.error("component", name, "not found");
            }
        }
        return ret;
    }
});
