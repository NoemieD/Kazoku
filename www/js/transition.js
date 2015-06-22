$(function() {

  //Transition on Create Form
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

  /*TRansition between section.page*/
  $next.on("click", goToNextPage);
  $prev.on("click", goToPrevPage);


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

/*Event on click*/

  /*animation for btn-icon first choice*/
  $('.first-choice .btn-icon').on('click', function(e){
    if(!$(this).hasClass('active')){   
      $('.page.is-visible .first-choice .btn-icon').each(function(){
        $(this).removeClass('active');
      });
    }
    e.preventDefault();
    $(this).toggleClass('active');
    $('.active:after').css("opacity",'1');
    $(this).parent().css("transform",'translateY(0)');
    $('.second-choice').css("transform",'translateY(0)');
    $('.second-choice').css("opacity",'1');
  });

  /*event for input*/
  $('input').on('click', function(e){
    e.preventDefault();
    $('.btn-next').removeClass('hide');
  });

  /*event onclick for btn-shpere*/
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

  /*event on click for btn-emotion*/
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

  /*event on click for btn-icon-cnd*/
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


});