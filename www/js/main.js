$(function() {

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

$('.container-blur').on('click', function(e){
	$(this).css('display',"none");

});

$('.gesture').on('click', function(e){
	$(this).css('display',"none");
	music.play();
});


/*Animation front*/
var showMore = document.getElementById('show-more');
var main = document.getElementsByTagName('main')[0];
var y = window.pageYOffset;

if(showMore)
	showMore.addEventListener('click', scrollToY, false);

function scrollToY(){
	console.log('click')
	TweenLite.to(window, 3, {scrollTo:{y:h}, ease:Power2.easeOut});
	
}

var obj = document.getElementById('zoom');
var txt = document.getElementById('text-souvenir');
var img = document.getElementById('img-discover');
var end = document.getElementById('fin-souvenir');
var audio = document.getElementById('audio');
var contrast = 8;
var blur=0;
var moreOpacity =1;
var lessOpacity=0;

if(obj){
	obj.addEventListener('touchmove', function(event) {
  // If there's exactly one finger inside this element
  var touch = event.targetTouches[0];
  contrast = contrast-0.1;
  blur = blur + 0.05;

  if(blur <= 10){
  	txt.style.WebkitFilter = 'blur('+contrast+'px)';
  	img.style.WebkitFilter = 'blur('+blur+'px)';
    //txt.style.opacity = blur;   
}
else{
			//txt.style.filter = 'blur('+blur+'px)';
			txt.style.opacity = moreOpacity;
			audio.style.opacity = moreOpacity;
			moreOpacity = moreOpacity-0.01;
			//end.style.filter = 'blur('+contrast+'px)';
			//contrast = contrast-0.1;
			//console.log(contrast)
			end.style.opacity = lessOpacity;
			lessOpacity = lessOpacity + 0.01;
		}


	}, false);
}


//Fréquence
$('.frequence').lcnCircleRangeSelect();

});