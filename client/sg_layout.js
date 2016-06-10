Template.sgLayout.onRendered(function(){
		this.autorun(function(){
			var comp = Session.get("component");
			var style = Session.get("style");

			if(comp && style){
				var message = {
						type: "set-component",
						comp: comp,
						style: style
				};
				var renderer = document.getElementById("renderer");
				console.log("postMessage", message);
				var target = (renderer && renderer.contentWindow) || window;
				target.postMessage(message, "*");
			}
			
		});
});

Template.sgLayout.helpers({
		toRender: function(){
			return Session.get("component") && Session.get("style");
		},
		rendererPath: function(){
			return FlowRouter.path("styleguide-renderer");
		},
		rendererPathWithOptions: function(){
			return FlowRouter.path("styleguide-renderer", {
					comp: Session.get("component"),
					style: Session.get("style")
			});
		},
		width: function(){
			return Session.get("screen-width") || 1024;
		},
		height: function(){
			return Session.get("screen-height") || 768;
		},
		zoom: function(){
			return Session.get("screen-zoom") || 1;
		}
});