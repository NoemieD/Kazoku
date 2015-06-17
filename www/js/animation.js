$(function() {

	var btnNextSphere = document.getElementById("btn-next-sphere");
	if(btnNextSphere)
	btnNextSphere.addEventListener("click", animateSphere, false);

	var btnNextEmotion = document.getElementById("btn-next-emotion");
	if(btnNextEmotion)
	btnNextEmotion.addEventListener("click", animateEmotion, false);

	var btnPreview = document.getElementById("add");
	if(btnPreview)
	btnPreview.addEventListener("click", animatePreview, false);



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

function animatePreview(){

	setInterval(function () {
		document.getElementById("preview-picture").style.top ="66px";
	}, 1300);

	setInterval(function () {
		document.getElementById("preview-narration").style.top ="166px";
	}, 900);

	setInterval(function () {
		document.getElementById("preview-date").style.top ="170px";
	}, 500);

	setInterval(function () {
		document.getElementById("preview-sphere").style.top ="0px";
	}, 1100);

	setInterval(function () {
		document.getElementById("preview-music").style.top ="100px";
	}, 700);

		setInterval(function () {
		document.getElementById("preview-emotion").style.top ="70px";
	}, 1500);

}