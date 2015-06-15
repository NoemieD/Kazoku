$(function() {

	var btnNewtSphere = document.getElementById("btn-next-sphere");
	if(btnNewtSphere)
	btnNewtSphere.addEventListener("click", animateSphere, false);

	var btnNextEmotion = document.getElementById("btn-next-emotion");
	if(btnNextEmotion)
	btnNextEmotion.addEventListener("click", animateEmotion, false);

 	var btnNext = document.getElementsByTagName("btn-next")[0];
 	if(btnNext)
 	btnNext.addEventListener("touchstart", activeBtn, false);


function activeBtn(){
  $(this).addClass('active');
}

});

function animateSphere(){

	setInterval(function () {
		document.getElementById("amical").style.opacity = 1;
		document.getElementById("amical").style.transform = "scale(1) translate(-80%,-150%)";
	}, 500);

	setInterval(function () {
		document.getElementById("amour").style.transform = "scale(1) translate(41%,-109%)";
		document.getElementById("amour").style.opacity = 1;
	}, 700);

	setInterval(function () {
		document.getElementById("historique").style.transform = "scale(1) translate(65%,15%)";
		document.getElementById("historique").style.opacity = 1;
	}, 900);

	setInterval(function () {
		document.getElementById("professionnel").style.transform = "scale(1) translate(-60%,50%)";
		document.getElementById("professionnel").style.opacity = 1;
	}, 1100);

	setInterval(function () {
		document.getElementById("familial").style.transform = "scale(1) translate(-150%,-35%)";
		document.getElementById("familial").style.opacity = 1;
	}, 1300);

}


function animateEmotion(){

	setInterval(function () {
		document.getElementById("joie").style.opacity = 1;
		document.getElementById("joie").style.transform = "scale(1)";
	}, 500);

	setInterval(function () {
		document.getElementById("colere").style.transform = "scale(1)";
		document.getElementById("colere").style.opacity = 1;
	}, 700);

	setInterval(function () {
		document.getElementById("triste").style.transform = "scale(1)";
		document.getElementById("triste").style.opacity = 1;
	}, 900);

	setInterval(function () {
		document.getElementById("surprise").style.transform = "scale(1)";
		document.getElementById("surprise").style.opacity = 1;
	}, 1100);

	setInterval(function () {
		document.getElementById("doute").style.transform = "scale(1)";
		document.getElementById("doute").style.opacity = 1;
	}, 1300);

}

