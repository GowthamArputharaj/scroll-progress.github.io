$(document).ready(function(){
  $(window).scroll(function(){
    var doch = $(document).height();
    var winh = $(window).height();
    var use = doch - winh;
    var scrh = $(document).scrollTop();
    var per = (scrh / use) * 100;
    per = Math.floor( per );
    console.log(scrh);
    $('.value').text(' Loaded '+per+' ');
    $('.progress').css({'width': per+'%'});
  });
});

