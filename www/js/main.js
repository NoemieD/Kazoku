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

	

	if(music)
		pButton.addEventListener("click", play, false);

//Play and Pause
function play() {
	// start music
	if (music.paused) {
		music.play();
		pButton.className = "play";
	} else { // pause music
		music.pause();
		pButton.className = "pause";
	}
}


//FILE MUSIC
// initialisation des variables
/*
var fileInput  = document.getElementById("input-file");
var button     = document.getElementById('musique');
var the_return = document.getElementById("file-return");

// action lorsque le label est cliqué
if(button){
	button.addEventListener( "click", function( event ) {
		console.log("clique");
		fileInput.focus();
		return false;
	});
}

// affiche un retour visuel dès que input:file change
	fileInput.addEventListener( "change", function( event ) {
		console.log(change);
	the_return.innerHTML = this.value;  
});
*/


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

});