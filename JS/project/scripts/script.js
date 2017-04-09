$( document ).ready(function() {
// fixed header changing background
$(window).scroll(function(){
  if(window.pageYOffset == 0){
    $('#header').css('background-color','')
  }if(window.pageYOffset > 0){
    $('#header').css('background-color','black')
  };});

// nav/btn scrolls
$('#homeBtn').click(function(){
    $('html, body').animate({
      scrollTop: $('#slide-holder').offset().top
    }, 2000);
});
$('#servicesBtn').click(function(){
    $('html, body').animate({
      scrollTop: $('#services').offset().top - 150
    }, 2000);
});
$('#workBtn').click(function(){
    $('html, body').animate({
      scrollTop: $('#works').offset().top - 150
    }, 2000);
});
$('#aboutBtn').click(function(){
    $('html, body').animate({
      scrollTop: $('#about').offset().top - 150
    }, 2000);
});
$('#clientsBtn').click(function(){
    $('html, body').animate({
      scrollTop: $('#clients').offset().top - 150
    }, 2000);
});
$('#contactBtn').click(function(){
    $('html, body').animate({
      scrollTop: $('#contacts').offset().top - 150
    }, 2000);
});
$('#up-arrow').click(function(){
    $('html, body').animate({
      scrollTop: $('#slide-holder').offset().top
    }, 2000);
});
$('#down-arrow').click(function(){
    $('html, body').animate({
      scrollTop: $('#contacts').offset().top - 150
    }, 2000);
});
$('#works-button').click(function(){
    $('html, body').animate({
      scrollTop: $('#contacts').offset().top - 150
    }, 2000);
});
//thumbnail photos yellow hover
$(".thumbnail-img").hover(function(){
    $(this).css('opacity', '0.59');
    }, function(){
    $(this).css('opacity', '1');
});
//photo filter
$('#webdesBtn').click(function(){
  $('.thumbnail-img').css('width','33.33%');
  $('.thumbnail-img').css('height','100%');
  $('.webdes').css('display', 'block');
  $('.illus').css('display', 'none');
  $('.phto').css('display', 'none');
  $('.graphdes').css('display', 'none');
});
$('#graphdesBtn').click(function(){
  $('.thumbnail-img').css('width','33.33%');
  $('.thumbnail-img').css('height','100%');
  $('.graphdes').css('display', 'block');
  $('.illus').css('display', 'none');
  $('.phto').css('display', 'none');
  $('.webdes').css('display', 'none');
});
$('#phtoBtn').click(function(){
  $('.thumbnail-img').css('width','33.33%');
  $('.thumbnail-img').css('height','100%');
  $('.phto').css('display', 'block');
  $('.illus').css('display', 'none');
  $('.graphdes').css('display', 'none');
  $('.webdes').css('display', 'none');
});
$('#illusBtn').click(function(){
  $('.thumbnail-img').css('width','33.33%');
  $('.thumbnail-img').css('height','100%');
   $('.illus').css('display', 'block');
  $('.phto').css('display', 'none');
  $('.graphdes').css('display', 'none');
  $('.webdes').css('display', 'none');
});
$('#allBtn').click(function(){
  $('.thumbnail-img').css('width','');
  $('.thumbnail-img').css('height','');
   $('.phto').css('display', 'block');
  $('.illus').css('display', 'block');
  $('.graphdes').css('display', 'block');
  $('.webdes').css('display', 'block');
});
// numbers
var z=0;
$(window).scroll(function(){
  var trigger = document.getElementById('numbers-trigger');
  var top = trigger.getBoundingClientRect().top;
  var bottom = trigger.getBoundingClientRect().bottom;
  var h = window.innerHeight;
  if (top>0&&bottom<h){
    if(z!==0){
      $('.yellow-border-numbers').each(function(index){
        $(this).animate({ num:$(this).html()-1}, {
          duration: 3000,
          step: function (num){
            this.innerHTML = (num + 1).toFixed(0);
          }
        });
      });
      z=0;
    }if(z==0){
      return;
  };
  };
  z++;
});
//skills
var x=1;
$(window).scroll(function(){
  var trigger1 = document.getElementById('percent-trigger');
  var top1 = trigger1.getBoundingClientRect().top;
  var bottom1 = trigger1.getBoundingClientRect().bottom;
  var h1 = window.innerHeight;
  if (top1>0&&bottom1<h1){
    if(x!==0){
      $('.persent-number').each(function(index){
        $(this).animate({ bum:$(this).html()-1}, {
          duration: 3000,
          step: function (bum){
            this.innerHTML = (bum + 1).toFixed(0) + '%';
          }
        });
      });
      x=0;
    };
  };
});
//icons
var oldWidth;
var oldHeight;
var newWidth;
var newHeight;
$('.hover-img').mouseenter(function(){
  oldWidth = this.width;
  oldHeight = this.height;
  newWidth = this.width*1.1;
  newHeight = this.height*1.1;
$(this).animate({
    width: newWidth,
    height: newHeight
}, 150);
});
$('.hover-img').mouseleave(function(){
$(this).animate({
    width: oldWidth,
    height: oldHeight
    }, 150);
})
//feedback
setInterval(function feedbackSwitch(){  
  var active = $('.active');
  var next = active.next();
  if (next.length == 0){
    $(".feedback").first().addClass('active');
  };
  next.addClass('active');
  active.removeClass('active');
}, 5000)
//header-slider
var j=1;
function sliderSwitch(){
  if(j==0||j>2){$('#slide-holder').css({
    backgroundImage: 'url("styles/images/header-background-0.jpg")'})
    j=0;
  };
  if(j==1){$('#slide-holder').css({
    backgroundImage: 'url("styles/images/header-background-1.jpg")'})
  };
  if(j==2){$('#slide-holder').css({
    backgroundImage: 'url("styles/images/header-background-3.jpg")'})
  }
  j++;
  var active = $('.active-slider');
  var next = active.next();
  if (next.length == 0){
    $(".slider").first().addClass('active-slider');
  };
  next.addClass('active-slider');
  active.removeClass('active-slider');
};
var interval = (setInterval(sliderSwitch, 3000));
$('#slide-holder').hover(function(){
  clearInterval(interval);
},
  function(){
    setInterval(sliderSwitch, 3000);
});
//partners
setInterval(function partnersSwitch(){  
  var active = $('.partners-active');
  var next = active.next();
  if (next.length == 0){
    $(".partners").first().addClass('partners-active');
  };
  next.addClass('partners-active');
  active.removeClass('partners-active');
}, 1000)
//team 
$('#member-img-1').click(function(){
  console.log('bla')
  $('.person-block').css('display', 'none');
  $('.person-block-1').css('display', 'block');
})
$('#member-img-2').click(function(){
  $('.person-block').css('display', 'none');
  $('.person-block-2').css('display', 'block');
})
$('#member-img-3').click(function(){
  $('.person-block').css('display', 'none');
  $('.person-block-3').css('display', 'block');
})
$('#member-img-4').click(function(){
  $('.person-block').css('display', 'none');
  $('.person-block-4').css('display', 'block');
})
//form
var mailPattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;;
$('#input-mail').keyup(function(){
  var input = $('#input-mail');
		if(input.val() != ''){
				$("#mail-error").html(' ');
          if(input.val().search(mailPattern) == 0){
            $("#mail-error").html(' ');
          }else{
            $("#mail-error").html("Error!");
          }
			}else{
				$("#mail-error").html("Error!");
			}
	});
var namePattern = /^[a-zA-Z]/i;
$('#input-name').keyup(function(){
  var input = $('#input-name');
		if(input.val() != ''){
				$("#name-error").html(' ');
          if(input.val().search(namePattern) == 0){
            $("#name-error").html(' ');
          }else{
            $("#name-error").html("Error!");
          }
			}else{
				$("#name-error").html("Error!");
			}
	});
var subjectPattern = /^[a-zA-Z0-9]/i;
$('#input-subject').keyup(function(){
  var input = $('#input-subject');
		if(input.val() != ''){
				$("#subject-error").html(' ');
          if(input.val().search(subjectPattern) == 0){
            $("#subject-error").html(' ');
          }else{
            $("#subject-error").html("Error!");
          }
			}else{
				$("#subject-error").html("Error!");
			}
	});
  
});
