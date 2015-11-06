(function() {

//Set width of #sidebar
var contentPadding = 40 * 2;
var sidebarPercent = 0.25;
var setSideBarWidth = function() {
    $('#sidebar').css("width", ($('.content').outerWidth() - contentPadding) * sidebarPercent);
};

//Add .fixed-sidebar class to #sidebar at the appropriate point
$(window).scroll(function() {
    setSideBarWidth();

    //find the y val of first .main div
    var offset = $(".main:first").offset();
    //Use the y val insted of a number in the scrollTop function
    if ($(this).scrollTop() > offset.top - 10) {
        $('#sidebar').addClass('fixed-sidebar');
    } else {
        $('#sidebar').removeClass('fixed-sidebar');
    }

});

//Set right (for fixed positioning) of .fixed-sidebar
var contentMargin = parseInt($('.content').css('margin-left'));
var setSideBarRight = function() {
    $('#sidebar').css("right",contentMargin + contentPadding/2);
};

$(window).load(function() {
    setSideBarWidth();
    setSideBarRight();
});
$(window).resize(function() {
    setSideBarWidth();
    setSideBarRight();
});

})();