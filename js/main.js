var $main = document.querySelector('.task-list'); 
var $tasks = [];
var $nav = document.querySelector("#nav")

showDate();

document.querySelector(".js-btn").addEventListener('click',function() {
	postIt();
});

document.querySelector(".user-input").addEventListener('keyup',function(e){
	if (e.keyCode === 13) {
		postIt();	
	}
});

document.querySelector(".reset-btn").addEventListener('click',function() {
	
	localStorage.clear();
	location.reload();

});

var $sidebar_div = document.querySelector("#sidebar");
var $sidebar_classes = $sidebar_div.classList;

$nav.addEventListener('click',function() {
	
	
	$sidebar_classes.toggle('hide');

});
//remove item from task arr


function postIt() {

	var $input = document.querySelector(".user-input").value; 

	if(input !== '') {
		var $item = '';

		$tasks.push(input);
		//console.log(tasks);

		$item = document.createElement('li');
		
		$item.innerHTML = $input;
		$main.append(item);

		clearInput();

		localStorage.setItem("key", $main.innerHTML);

	} else {
		alert("Please enter a task.");
	}
}

function clearInput(){
	document.querySelector(".user-input").value = '';
}


function showDate() {
	
	var $d = new Date();
	var $months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
	document.getElementById("month").innerHTML = $months[$d.getMonth()];

	document.getElementById("day").innerHTML = $d.getDate();
	document.getElementById("year").innerHTML = $d.getFullYear();
}



$main.innerHTML = localStorage.getItem("key");