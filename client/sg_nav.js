Template.sgNav.helpers({
		components: function(){
			return _.values(SG.components);
		},
		active: function(){
			return (this.name === Session.get("component")) ? "active": ""; 
		}
});

Template.sgCompStyle.helpers({
		active: function(){
			return (this.component === Session.get("component") && 
				this.style.descr === Session.get("style")) ? "active": "";
		}
});
Template.sgCompStyle.events({
		click: function(e){
			e.preventDefault();
			var cmp = this.component;
			var style = this.style.descr;
			console.debug("cmp", cmp, "style", style);
			Session.set("component", cmp);
			Session.set("style", style);
		}
});