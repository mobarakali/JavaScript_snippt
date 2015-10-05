/**
 * Created by Mobarak on 10/5/2015.
 */

output = document.getElementById("output");

var myArray = [2,4,6,8,"Ten", 11];
output.innerHTML += "Array length: " + myArray.length;


var toDay = new Date();

output.innerHTML += "\nTodays Date: " + toDay.getDate();

var playerName = "Fred";
var playerScore = "100";
var playerRank = "1000";

var player = new Object();
player.name = "Asad";
player.score = 10000;
player.rank = 50;

output.innerHTML += "\nPlayer Name: " + player.name +", Raned "+ playerRank + " with "+ playerScore + "Score.";


var std1 = {fname:"Abul", lname:"Asad", varsity:"RU"};
var std2 = {fname:"Amit", lname:"Sarker", varsity:"NUB"};


output.innerHTML += "\n" + std1.fname +" "+ std1.lname +" from " + std1.varsity;
output.innerHTML += "\n" + std2.fname +" "+ std2.lname +" from " + std2.varsity;

function playerInfo(){
    // full information about the student
    output.innerHTML += "\n" + this.fname +" "+ this.lname +" has come from " + this.varsity +".";
}

std1.info = playerInfo;
std1.info();
std2.info = playerInfo;
std2.info();