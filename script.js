(function(){
	"use strict"
 var missions = ["Verover Azië en Zuid-Amerika",
								 "Verover Noord-Amerika en Afrika",
								 "Verover Azië en Afrika",
								 "Verover Noord-Amerika en Australië",
								 "Verover Europa en Zuid-Amerika en een derde continent naar keuze",
								 "Verover Europa en Australië en een derde continent naar keuze",
								 "Schakel rood volledig uit. Ben jij dit, of doet rood niet mee? Bezit dan 24 gebieden naar keuze en verdedig deze één beurt",  
								 "Schakel geel volledig uit. Ben jij dit, of doet geel niet mee? Bezit dan 24 gebieden naar keuze en verdedig deze één beurt",
								 "Schakel blauw volledig uit. Ben jij dit, of doet blauw niet mee? Bezit dan 24 gebieden naar keuze en verdedig deze één beurt",
								 "Schakel groen volledig uit. Ben jij dit, of doet groen niet mee? Bezit dan 24 gebieden naar keuze en verdedig deze één beurt",
								 "Schakel grijs volledig uit. Ben jij dit, of doet grijs niet mee? Bezit dan 24 gebieden naar keuze en verdedig deze één beurt",
								 "Bezit 24 gebieden naar keuze en verdedig deze één beurt",
								 "Bezit 18 gebieden met ten minste 2 troepen (punten aantal) per gebied."
								];
	
var missionSelect =[]; 

// cashing the dom
	var button = document.getElementById("submit");
	var numPlayers = document.getElementById("numPlayers");
	var formNumPlayer = document.getElementById("formNumPlayer");
	var container =document.querySelector(".sub-container");

	var toggleButton =document.querySelector(".btn-primary");
	
// 	initialize risk
	function init(){
	countPlayer();
	render();
	button.removeEventListener("click", buttonClick);
}

// 	creating dynamic html elements
	
function createElement(element,classme, player,idme){
	var myElement = document.createElement(element);
	myElement.setAttribute("class",classme);
	if(idme){
	myElement.setAttribute("id",idme);
	}
	if(player){
	myElement.textContent = player;
		}
	return myElement;
}


// get the number of players
function countPlayer(){
	var valNum = numPlayers.value; 
	return valNum;
}
	
// 	rendering the html elements to the dom
function render(){
	var myAray = missions;
	for (  var i=0; i < countPlayer() ; i++ ){
		var randomNumber = (Math.floor(Math.random()*myAray.length));
		var toggleButton = createElement("button","btn-primary btn animated fadeIn", "Speler "+(i+1),"btn"+i);
		var missionContainer = createElement("div","mission-container animated fadeIn");
		toggleButton.addEventListener("click",toggleMission);
		missionSelect.push(myAray[randomNumber]);  
		myAray.splice(randomNumber,1);
		var yourMission= createElement("p","lead is-visible",missionSelect[i],"p"+i);
				container.appendChild(missionContainer);
				missionContainer.appendChild(toggleButton);
				missionContainer.appendChild(yourMission);
	} 
}
	function toggleMission(){
	$(this).toggleClass("button-clicked")	
	$(this).next().toggleClass("animated bounce is-visible");
    
	}
//  adding event listeners to the toggle buttons 	
		button.addEventListener("click",buttonClick);


function buttonClick(e){
	e.preventDefault();
	 smoothScroll();
	init();
}
function smoothScroll(){
	$('html, body').animate({
        scrollTop: $("#target").offset().top
    }, 1000);
}
	
})();