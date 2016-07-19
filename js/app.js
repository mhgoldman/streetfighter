$(document).ready(function(){
  $('.ryu').hover(
    function() {
      $('.ryu-still').hide();
      $('.ryu-ready').show();
    },
    function() {
      $('.ryu-ready').hide();
      $('.ryu-still').show();
    }
  ).mousedown(
    function() {
      $('.ryu-ready').hide();
      $('.ryu-throwing').show();  
      $('.hadouken').finish().show().animate(
        {'left': '1020px'},
        500,
        function() {
          $(this).hide();
          $(this).css('left', '520px');
        });
      playHadouken();
    }
  ).mouseup(
    function() {
      $('.ryu-throwing').hide();  
      $('.ryu-ready').show();
    }
  );

  $('.instructions-1').fadeIn(2500).delay(2500).fadeOut(2500, function() {
    $('.instructions-2').fadeIn(2500).delay(2500).fadeOut(2500);
  });
});

$(document).keydown(
  function(e) {
    if (e.which == 88) {
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }
  }).keyup(
    function(e) {
      if (e.which == 88) {
        $('.ryu-cool').hide();

        if ($('.ryu:hover').length != 0) {
          $('.ryu-ready').show();
        } else {
          $('.ryu-still').show();          
        }
      }
    });

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

