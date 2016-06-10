SG.configure = function(options){
	options = options || {};
	var base = options.basePath || "";
	
	FlowRouter.route(base + "/catalogue/:comp?/:style?", {
			action: SG.route,
			name: "styleguide"
	});
	
	FlowRouter.route( base + "/render/:comp?/:style?", {
		action: SG.routeRender,
		name: "styleguide-renderer"
	});
};