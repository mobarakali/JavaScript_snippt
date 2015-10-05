/**
 * Created by Mobarak on 10/5/2015.
 */

var output = document.getElementById("output");
var today = new Date();// current date and time

output.innerHTML = today;

var y2K = new Date(2000,0,1);// 1st Jabuary, 2000

output.innerHTML += "\n" + y2K;

var date = today.getDate();
output.innerHTML += "\n Today's Date:" + date;

date = today.getDay();
output.innerHTML += "\n Today's Day:" + date;

date = today.getMonth();
output.innerHTML += "\n Today's in in Month:" + date;

date = today.getFullYear();
output.innerHTML += "\n This is Year :" + date;

date = today.getHours();
output.innerHTML += "\n Hours is :" + date;

date = today.getTime();
output.innerHTML += "\n Time is :" + date;

// Setting some dates
output.innerHTML += "\n <hr> " ;

date = today.setFullYear(1975);
output.innerHTML += "\n Month is :" + date;

date = today.getTime(1975);
output.innerHTML += "\n Month is :" + date;