var current = 1; //current div
var height = $('.adjectives').height(); //the height of the adjectives div
var numberDivs = $('.adjectives').children().length; //the number of children of the adjectives div
var first = $('.adjectives div:nth-child(1)'); //the first div nested in adjectives div
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $('#custom-nav').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $('#custom-nav').removeClass('affix');
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }   
});