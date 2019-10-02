/* navigation*/
$('aside').on('mouseenter mouseleave', function() {
    $('main').toggleClass('mainHidden');
});

/* bulk box */
$('#selectBulk').on('click', function() {
    $('main').toggleClass('mainHidden');
    $('.bulk-box').addClass('opened');
});
$('.bulk-box .close').on('click', function() {
    $('main').toggleClass('mainHidden');
    $('.bulk-box').removeClass('opened');
});

$('.wrapSpecialSelect').on('click ', function() {
    $(this).children('.selectlist').toggleClass('opened');
});


$('.selectlist').on('mouseleave ', function() {
    $(this).toggleClass('opened');
});

$(".rating a").click(function(event) {
    event.preventDefault();
    var id = $(this).parent().attr("id");
    $("#" + id + " .vote").text($(this).data("vote"));

});


$(".rating a").on("mouseover", function() {

    var id = $(this).parent().attr("id");
    $("#" + id + ".rating a").each(function(i, v) {
        $(v).removeClass("rated");
    });

    $(this).prevAll().each(function(i, v) {
        $(v).addClass("rated");
    });
    $(this).addClass("rated");
});

$('.calendar').datepicker();

/* popup */
$('.openpopup').on('click', function(event) {
    event.preventDefault();
    $popuptoopen = '#' + $(this).attr('data-rel');
    $($popuptoopen).toggleClass('visible');
});
$('.closepopup').on('click', function(event) {
    event.preventDefault();
    $popuptoclose = $(this).parents('.popupWrap');
    $($popuptoclose).toggleClass('visible');
});