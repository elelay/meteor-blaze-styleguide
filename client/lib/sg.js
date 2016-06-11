SG = {};

SG.getComponent = function(){
	return Session.get("component");
};

SG.getStyle = function(){
	return Session.get("style");
};


SG.setComponent = function(comp){
	Session.set("component", comp);
};

SG.setStyle = function(style){
	Session.set("style", style);
};
