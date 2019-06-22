
var a="august 03 2017 5:00:00 GMT+6";
function timecount(a)
{
	var k=Date.parse(a)-Date.parse(new Date());
	var days=Math.floor(k/(1000*3600*24));
	var hours=Math.floor((k/(1000*3600))%24);
	var minutes=Math.floor((k/(1000*60))%60);
	var seconds=Math.floor((k/(1000))%60);
	return{days,hours,minutes,seconds,k};
}
function runclock()
{
	var p=document.getElementById("day");
	var q=document.getElementById("hour");
	var r=document.getElementById("minute");
	var s=document.getElementById("second");
	
	 
	var tm=timecount(a);
	   p.innerHTML=tm.days;
	   q.innerHTML=tm.hours;
	   r.innerHTML=tm.minutes;
	   s.innerHTML=tm.seconds;
if(tm.k<=0)
{
	clearInterval(o);
}
  
    

}
var o=setInterval("runclock()",1000);

/**modal**/
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });