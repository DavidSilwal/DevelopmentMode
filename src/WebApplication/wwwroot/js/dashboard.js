$(function () {
    var s;
    if (s == 1) {
        s = 1;
    }
    else
        s = 0;

    $('.sidebar-toggle').click(function () {
        toggle();
    });

    toggle();

    function toggle() {
        if (s != 1) {
            s = 1;

            //$('.sidebar').css('left', '0');
            $('.sidebar').css('width', '50px');

            $('.content').css('padding-left', '50px');

            $('.sidebar .pl-25').addClass('hidden');



        } else {
            s = 0;
            //$('.sidebar').css('left', '-200px');

            $('.sidebar').css('width', '200px');

            $('.content').css('padding-left', '200px');
            $('.sidebar .pl-25').removeClass('hidden');


        }
    }




});