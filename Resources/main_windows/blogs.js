//Ti.UI.currentWindow.barColor = '#000000';
//Ti.UI.currentWindow.backgroundColor  = '#dedede';

// Rows for each of the Tuts sites. Also includes "col" property, which references that site's main color (for barcolor).
var win = Ti.UI.currentWindow;


var data = [
    { title : 'Current Shortages', hasChild:true, path : '../js/getFeed.js', header:'ASHP Reported Drug Shortages'},
	{ title : 'Resolved Shortages', hasChild:true, path : '../js/getFeed.js'},
	{ title : 'Unavailable Drugs', hasChild:true, path : '../js/getFeed.js''},
	{ title : 'Reported Shortages', hasChild:true, path : '../js/getFDA.js', header:'FDA Reported Drug Shortages'}
];

// Create table and fill it with list
var tableView = Titanium.UI.createTableView({ 
	data:data, 
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
	font : {fontSize : 15, fontWeight: 'bold'},
}); 
Titanium.UI.currentWindow.add(tableView);

// When item is clicked on, create new window.
tableView.addEventListener('click', function(e) {

	// If a path exists...	
	if ( e.rowData.path ) {
		var newWindow = Titanium.UI.createWindow({
			url : e.rowData.path,
			title : e.rowData.title,
			barColor:'#336699'
	});
	
		Ti.App.Properties.setString('websiteName', e.rowData.title); 

		Titanium.UI.currentTab.open( newWindow, { animated: true } );
	}
	
});


iads = Ti.UI.iOS.createAdView({
    width: 'auto',
    height: 'auto',
    bottom: -100
	});
 
    t1 = Titanium.UI.createAnimation({bottom:0, duration:750});
 
    iads.addEventListener('load', function(){
		tableView.bottom = 50;
	
        iads.animate(t1);
    });
 
    Titanium.UI.currentWindow.add(iads);


