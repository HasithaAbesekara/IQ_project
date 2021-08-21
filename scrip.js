

function updateClock()
{
	var myDate = new Date();
	var	dname=myDate.getDay();
	 	mo=myDate.getMonth(),
	 	dnum=myDate.getDate(),
		yr=myDate.getFullYear(),	
	 	myhour=myDate.getHours(),
		myminit=myDate.getMinutes(),
	 	mysecond=myDate.getSeconds(),
	 	pe="AM";


	if(myhour==0){
		myhour=12;
	}
	if(myhour>12)
	{
		myhour=myhour-12;
		pe="PM";
	}

	Number.prototype.pad=function(digits){
		for(var n=this.toString();n.length<digits;n=0+n);
		return n;
	}

	var months =["January","February","March","April","May","June","July","Augest","September","October","November","December"];
	var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var ids =["dayname","month","daynum","year","hour","minites","second","priod"];
	var values=[week[dname],months[mo],dnum.pad(2),yr,myhour.pad(2),myminit.pad(2),mysecond.pad(2),pe];

	for(var i =0; i< ids.length;i++)
	document.getElementById(ids[i]).firstChild.nodeValue=values[i];

}
function initClock(){
	updateClock();
	window.setInterval("updateClock()",1);
}
