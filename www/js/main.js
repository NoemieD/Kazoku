$(function() {

	/*CAROUSEL*/
	if($('#tutoriel').length >0){
		var carousel = $('#tutoriel');
		carousel.owlCarousel({
			loop:true,
			nav:false,
			items:1
		})
	};


	//VARIABLES
	/*Global*/
	var w = window.innerWidth;
	var h = window.innerHeight;

	/*Music*/
	var music = document.getElementById('music'); // id for audio element
	var duration; // Duration of audio clip
	var pButton = document.getElementById('pButton'); // play button

	var playhead = document.getElementById('playhead'); // playhead

var timeline = document.getElementById('timeline'); // timeline
// timeline width adjusted for playhead
if(timeline)
	var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

if(music)
	pButton.addEventListener("click", play, false);

// timeupdate event listener
if(music)
	music.addEventListener("timeupdate", timeUpdate, false);

//Makes timeline clickable
if(timeline){
	timeline.addEventListener("click", function (event) {
		moveplayhead(event);
		music.currentTime = duration * clickPercent(event);
	}, false);

}

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(e) {
	return (e.pageX - timeline.offsetLeft) / timelineWidth;
}

// Makes playhead draggable 
if(playhead)
	playhead.addEventListener('mousedown', mouseDown, false);

if(playhead)
	window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that mouse is moved on mouseUp only when the playhead is released 
var onplayhead = false;
// mouseDown EventListener
function mouseDown() {
	onplayhead = true;
	window.addEventListener('mousemove', moveplayhead, true);
	music.removeEventListener('timeupdate', timeUpdate, false);
}
// mouseUp EventListener
// getting input from all mouse clicks
function mouseUp(e) {
	if (onplayhead == true) {
		moveplayhead(e);
		window.removeEventListener('mousemove', moveplayhead, true);
		// change current time
		music.currentTime = duration * clickPercent(e);
		music.addEventListener('timeupdate', timeUpdate, false);
	}
	onplayhead = false;
}
// mousemove EventListener
// Moves playhead as user drags
function moveplayhead(e) {
	var newMargLeft = e.pageX - timeline.offsetLeft;
	if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
		playhead.style.marginLeft = newMargLeft + "px";
	}
	if (newMargLeft < 0) {
		playhead.style.marginLeft = "0px";
	}
	if (newMargLeft > timelineWidth) {
		playhead.style.marginLeft = timelineWidth + "px";
	}
}

// timeUpdate 
// Synchronizes playhead position with current point in audio 
function timeUpdate() {
	var playPercent = timelineWidth * (music.currentTime / duration);
	if(playhead)
		playhead.style.marginLeft = playPercent + "px";
	if (music.currentTime == duration) {
		pButton.className = "";
		pButton.className = "play";
	}
}

//Play and Pause
function play() {
	// start music
	if (music.paused) {
		music.play();
		pButton.className = "btn btn-diamond play";
	} else { // pause music
		music.pause();
		pButton.className = "btn btn-diamond pause";
	}
}

// Gets audio file duration
if(music){
	music.addEventListener("canplaythrough", function () {
		duration = music.duration;  
	}, false);
}

/*Add music*/
$('#fileinput').click( function(e) {
	console.log("clik file");
	filechooser.open( {}, onSucessAudio, function(err){console.log(err)} );
});

function onSucessAudio(){
	$('#etape3 .first-choice').addClass('hide');
	$('#etape3 .second-choice').addClass('hide');
	$('#audio').css('opacity','1');
}


//DISCOVER SOUVENIR

$('.discover .container-blur').on('click', function(e){
	$(this).css('display',"none");
	$(".front .discover .overlay").css('transform', 'translate3D(-50%,-50%,0) scale(14)');
	$("#img-discover").css("-webkit-filter","blur(0px)");
	music.play();
});

$('.gesture').on('click', function(e){
	$(this).css('display',"none");
	
});

/* Animation Discover page for the blur circle*/
var circle = document.getElementById("animated-circle");
var discover = document.getElementById("discover");
var btnDiscover = document.getElementById("btn-discover");
var txtDelete = document.getElementById("txt-delete");
var preDiscover = document.getElementById("pre-discover");

if(btnDiscover)
	btnDiscover.addEventListener('click', animatedCircle, false);

function animatedCircle(){
	console.log("Animation");

	txtDelete.style.opacity = 0;
	circle.style.width=800+'px';
	circle.style.height=800+'px';
	circle.style.transform='translate3d(-29%,-34%,0)';

	setTimeout(addDiscover, 4000); 
}


function addDiscover(){
	console.log('addDiscover');
	discover.style.display = "block";
	preDiscover.style.opacity = 0;

	setTimeout(deletePrediscover, 3000); 
}

function deletePrediscover(){
	console.log('deletePrediscover');
	preDiscover.style.display = "none";
}

/*Animation scroll fore more memories*/
var showMore = document.getElementById('show-more');
var main = document.getElementsByTagName('main')[0];
var y = window.pageYOffset;

if(showMore)
	showMore.addEventListener('click', scrollToY, false);

function scrollToY(){
	console.log('click')
	TweenLite.to(window, 3, {scrollTo:{y:h}, ease:Power2.easeOut});
	
}

/*Animation Discover*/

var obj = document.getElementById('zoom');
var txt = document.getElementById('text-souvenir');
var img = document.getElementById('img-discover');
var img2= document.getElementById('img-discover2');
var end = document.getElementById('fin-souvenir');
var audio = document.getElementById('audio');
var contrast = 10;
var blur=0;
var lessOpacity =1;
var moreOpacity=0;
var lessOpacityImg = 1
var scaleImg=1;
var lessOpacityAudio= 1
var opacityTxt=0;

//var blurImg=0;

if(obj){
	obj.addEventListener('touchmove', function(event) {
		var touch = event.targetTouches[0];
		contrast = contrast-0.05;
		blur = blur + 0.05;

		if(contrast >= -2){
			txt.style.opacity = opacityTxt;
			opacityTxt = opacityTxt +0.05;
			txt.style.WebkitFilter = 'blur('+contrast+'px)';
			img.style.WebkitFilter = 'blur('+blur+'px)';  
			txt.style.filter = 'blur('+contrast+'px)';
			img.style.filter = 'blur('+blur+'px)'; 
			contrastImg = blur; 

		}
		else{
			txt.style.opacity = lessOpacity;
			lessOpacity = lessOpacity-0.01;
			img.style.WebkitFilter = 'blur('+blur+'px)';
			img.style.filter = 'blur('+blur+'px)';
			blur = blur-0.1;

			if(lessOpacity<=0){

				img.style.opacity=lessOpacityImg;
				lessOpacityImg = lessOpacityImg-0.01;

				if(lessOpacityImg<=0){
					img2.style.WebkitFilter = 'blur('+blur+'px)';
					img2.style.filter = 'blur('+blur+'px)';
					blur = blur+0.1;
					audio.style.opacity = lessOpacityAudio;
					lessOpacityAudio= lessOpacityAudio - 0.01;
					if(blur>=2){
						end.style.opacity = moreOpacity;
						moreOpacity = moreOpacity + 0.005;
					}
				}
			}
		}

	}, false);
}


//Fréquence
if($('.frequence').length>0)
	$('.frequence').lcnCircleRangeSelect();

});

//call
$('#call').on('click', function(e){
	console.log("call");
	//document.location.href = 'tel:+33676047437';
	window.open('tel:0633436573', '_system')
});


//Animation Logo
var logo = $('.code .logo');

$('#animated-tuto').on('click', function(e){
	console.log("tuto");
	logo.css('transform','translate3d(0,-80px,0)');
	$('.code .logo img').css('width','25%');
	$('.code  .input-code').css('transform','translate3d(0,450px,0)');
	$(this).css('transform','translate3d(0,450px,0)');
	$('.tutoriel').css('transform', 'translate3d(0,-675px,0)');
});

if($('.btn-choice').length>0){
	$('.btn-choice').on('click', function(e){
		if(!$(this).hasClass('active')){   
			$('.btn-choice').each(function(){
				$(this).removeClass('active');
			});
		}
		e.preventDefault();
		$(this).toggleClass('active');
	});
}

/*animation for logo*/
$('#midnight').midnight();
$('#midnight').css('top','22px');




