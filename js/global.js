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


/* date picker */

/* calendars > simple */

$(function() {
    $('.calendar').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'), 10)
    });
});

/* report range  */

$(function() {
    var start = moment().subtract(29, "days");
    var end = moment();

    function cb(start, end) {
        $(".reportrange span").html(
            start.format("DD MMM YYYY") + " - " + end.format("DD MMM YYYY")
        );
    }

    $(".reportrange").daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
                Today: [moment(), moment()],
                Yesterday: [
                    moment().subtract(1, "days"),
                    moment().subtract(1, "days")
                ],
                "Last 7 Days": [moment().subtract(6, "days"), moment()],
                "Last 30 Days": [moment().subtract(29, "days"), moment()],
                "This Month": [
                    moment().startOf("month"),
                    moment().endOf("month")
                ],
                "Last Month": [
                    moment()
                    .subtract(1, "month")
                    .startOf("month"),
                    moment()
                    .subtract(1, "month")
                    .endOf("month")
                ]
            }
        },
        cb
    );

    cb(start, end);
});