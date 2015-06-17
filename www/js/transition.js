$(function() {

  //References to DOM elements
  var $window = $(window);
  var $document = $(document);

  var pageHeight = $window.innerHeight();
  var pageWidth = $window.innerWidth();

  var $main = $("main");
  var $next = $("a.btn-next").filter("[href^=#]");
  var $prev = $("a.btn-prev");

  var barWidth = ($(".progress-bar").width())/8;

  var $page = $(".page");
  var $currentPage = $page.first();

  $currentPage.toggleClass("is-visible");

  $next.on("click", goToNextPage);
  $prev.on("click", goToPrevPage);


  $('.first-choice .btn-icon').on('click', function(e){
    if(!$(this).hasClass('active')){   
      $('.page.is-visible .first-choice .btn-icon').each(function(){
        $(this).removeClass('active');
      });
    }
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().css("transform",'translateY(0)');
    $('.second-choice').css("transform",'translateY(0)');
    $('.second-choice').css("opacity",'1');
  });

  $('input').on('click', function(e){
    e.preventDefault();
    $('.btn-next').removeClass('hide');
  });

  $('.btn-sphere').on('click', function(e){
    if(!$(this).hasClass('active')){   
      $('.btn-sphere').each(function(){
        $(this).removeClass('active');
      });
    }
    e.preventDefault();
    $(this).toggleClass("active");
    $('.btn-next').removeClass('hide');
  });

  $('.btn-emotion').on('click', function(e){
    if(!$(this).hasClass('active')){   
      $('.btn-emotion').each(function(){
        $(this).removeClass('active');
      });
    }
    e.preventDefault();
    $(this).toggleClass("active");
    $('.btn-next').removeClass('hide');
  });

  $('.btn-icon-snd').on('click', function(e){
    e.preventDefault();
    $('.btn-next').removeClass('hide');
  });
  $('#narration').on('click', function(e){
    e.preventDefault();
    $('.btn-next').removeClass('hide');
  });


  $('.btn-next').on('click', function(e){
    e.preventDefault();
  });


  $('.btn-share').on('click', function(e){
      $(this).toggleClass('active');
      $('.btn-next').removeClass('hide');
  });

  function goToNextPage()
  {
    if($currentPage.next().length)
    {
      $('.second-choice').css("transform",'translateY(500px)');
      $('.second-choice').css("opacity",'0');
      $('.memories .btn-next').addClass("hide");
      $('.bar').css("width", $('.bar').width()+barWidth +"px");
      goToPage($currentPage.next());
    }
  }

  function goToPrevPage()
  {
    console.log("click")
    if($currentPage.prev().length)
    {
     $('.bar').css("width", $('.bar').width()-barWidth +"px");
     goToPage($currentPage.prev());
   }
 }

 function goToPage($page)
 {
  $currentPage.removeClass("is-visible").addClass("go-next");
  $currentPage = $page;
  $currentPage.addClass("is-visible");
  
}

});