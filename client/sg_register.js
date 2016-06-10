SG.components = {};


function Component(name){
	this.styles = [];
	this.name = name;
}

Component.prototype.add = function(descr, style){
	this.styles.push({
			descr: descr,
			style: style
	});
	return this;
};

Component.prototype.getStyle = function(descr){
	var style = _.find(this.styles, function(s){
			return s.descr === descr;
	});
	return style && style.style;
};

SG.register = function(name) {
	if(!SG.components[name]){
		SG.components[name] = new Component(name);
	}
	return SG.components[name];
};