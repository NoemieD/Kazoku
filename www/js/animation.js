$(function() {
	/*Animation btn-sphere*/
	var btnNextSphere = document.getElementById("btn-next-sphere");
	if(btnNextSphere)
		btnNextSphere.addEventListener("click", animateSphere, false);

	/*ANimation btn Emotion*/
	var btnNextEmotion = document.getElementById("btn-next-emotion");
	if(btnNextEmotion)
		btnNextEmotion.addEventListener("click", animateEmotion, false);

	/*animation preview*/
	var btnPreview = document.getElementById("add");
	if(btnPreview)
		btnPreview.addEventListener("click", animatePreview, false);

	/*animation btn choice*/
	var btnNextChoice = document.getElementById("btn-next-choice");
	if(btnNextChoice)
		btnNextChoice.addEventListener("click", animateChoice, false);



});

function animateSphere(){


	setTimeout(function () {
		document.getElementById("amical").style.opacity = 1;
		document.getElementById("amical").style.transform = "translate3d(-53%, -136%,0) scale(1)";
		//document.getElementById("amical").style.animation= "animatedAmitie 3s infinite;"
	}, 500);

	/*setTimeout(function () {
		document.getElementById("amical").style.webkitAnimationName= "animatedAmitie"; 
		document.getElementById("amical").style.webkitAnimationDuration= "5s"; 
		document.getElementById("amical").style.webkitAnimationIterationCount= "infinite"; 
	}, 600);*/


setTimeout(function () {
	document.getElementById("amour").style.transform = "translate3d(-131%, -86%,0) scale(1)";
	document.getElementById("amour").style.opacity = 1;
}, 700);

setTimeout(function () {
	document.getElementById("historique").style.transform = "translate3d(20%, -35%,0) scale(1)";
	document.getElementById("historique").style.opacity = 1;
}, 900);

setTimeout(function () {
	document.getElementById("professionnel").style.transform = "translate3d(-127%, 2%,0) scale(1)";
	document.getElementById("professionnel").style.opacity = 1;
}, 1100);

setTimeout(function () {
	document.getElementById("familial").style.transform = "translate3d(-40%, 35%,0) scale(1)";
	document.getElementById("familial").style.opacity = 1;
}, 1300);

}


function animateEmotion(){

	setTimeout(function () {
		document.getElementById("joie").style.opacity = 0.8;
		document.getElementById("joie").style.transform = "scale(1)";
	}, 500);

	setTimeout(function () {
		document.getElementById("colere").style.transform = "scale(1)";
		document.getElementById("colere").style.opacity = 0.8;
	}, 700);

	setTimeout(function () {
		document.getElementById("triste").style.transform = "scale(1)";
		document.getElementById("triste").style.opacity = 0.8;
	}, 900);

	setTimeout(function () {
		document.getElementById("surprise").style.transform = "scale(1)";
		document.getElementById("surprise").style.opacity =0.8;
	}, 1100);

	setTimeout(function () {
		document.getElementById("doute").style.transform = "scale(1)";
		document.getElementById("doute").style.opacity = 0.8;
	}, 1300);

}

function animatePreview(){

	setTimeout(function () {
		document.getElementById("preview-picture1").style.top ="66px";
	}, 1300);

	setTimeout(function () {
		document.getElementById("preview-picture2").style.top ="-5px";
	}, 1300);

	setTimeout(function () {
		document.getElementById("preview-narration").style.top ="177px";
	}, 900);

	setTimeout(function () {
		document.getElementById("preview-date").style.top ="177px";
	}, 500);

	setTimeout(function () {
		document.getElementById("preview-sphere").style.top ="0px";
	}, 1100);

	setTimeout(function () {
		document.getElementById("preview-music").style.top ="114px";
	}, 700);

	setTimeout(function () {
		document.getElementById("preview-emotion").style.top ="70px";
	}, 1500);

}

function animateChoice(){

	setTimeout(function () {
		document.getElementById("date").style.top ="25%";
	}, 900);

	setTimeout(function () {
		document.getElementById("sphere").style.top ="43%";
		document.getElementById("sphere").style.left ="17%";
	}, 700);

	setTimeout(function () {
		document.getElementById("emotion").style.top ="58%";
		document.getElementById("emotion").style.left ="37%";
	}, 500);

}