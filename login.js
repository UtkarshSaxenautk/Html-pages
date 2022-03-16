$(document).ready(function(e){
  $('h6').on('click',function(){
     $('.social').stop().slideToggle();
  });
})

function goGoogle() {
  window.location = 'http://google.com'
}