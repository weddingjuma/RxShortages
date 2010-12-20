var win = Titanium.UI.currentWindow;
win.backgroundColor = '#dedede';


var fda = Titanium.UI.createLabel({
	color:'#000',
	text:'Report to FDA:',
	top:20,
	left:10,
	width: 'auto',
	height: 'auto'
});

win.add(fda);

var b1 = Titanium.UI.createButton({
	title:'Email: drugshortages@fda.hhs.gov',
	height:40,
	width:275,
	top:55,
	borderWidth: 1,
	borderRadius: 10,
	borderColor: "#999"
});

win.add(b1);

var b2 = Titanium.UI.createButton({
	title:'Call: (888) 463-6332',
	height:40,
	width:275,
	top:105,
	borderWidth: 1,
	borderRadius: 10,
	borderColor: "#999"
});

win.add(b2);

var ashp = Titanium.UI.createLabel({
	color:'#000',
	text:'Report to ASHP:',
	top:160,
	left:10,
	width: 'auto',
	height: 'auto'
});

win.add(ashp);

var b3 = Titanium.UI.createButton({
	title:'Drug Shortage Report Form',
	height:40,
	width:275,
	top:195,
	borderWidth: 1,
	borderRadius: 10,
	borderColor: "#999"
});

win.add(b3);

b1.addEventListener('click', function()
{
	var emailDialog = Titanium.UI.createEmailDialog();
	emailDialog.subject = "Drug Shortage Report";
	emailDialog.toRecipients = ['drugshortages@fda.hhs.gov'];
	emailDialog.open();

});

b2.addEventListener('click', function()
{
	Titanium.Platform.openURL('tel:8884636332');
});

b3.addEventListener('click', function()
{
	Titanium.Platform.openURL('http://www.ashp.org/DrugShortages/Report/');
});

