Template.sgScreen.events({
    "change": function(e) {
    	var data = Template.currentData();
        var value = e.target.value;
        data.action(value);
    }
});
