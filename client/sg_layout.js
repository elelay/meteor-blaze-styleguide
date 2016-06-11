Template.sgLayout.onRendered(function(){
		this.autorun(function(){
			var comp = SG.getComponent();
			var style = SG.getStyle();

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
		componentName: SG.getComponent,
		componentStyle: SG.getStyle,
		disabledNoneSelected: function(){
			return (SG.getComponent() && SG.getStyle()) ? "" : "disabled";
		},
		rendererPath: function(){
			return FlowRouter.url("styleguide-renderer");
		},
		rendererPathWithOptions: function(){
			return FlowRouter.url("styleguide-renderer", {
					comp: SG.getComponent(),
					style: SG.getStyle()
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