$('.steps').empty();
var max = $('.frames .frame').length;
var maps = {};



var update = function () {
    if ($('.steps .step:last').hasClass('active')) {
        $('.next').text('Fini !');
    } else {
        $('.next').text('Continuer');
    }
    $('.frame.coming').find('.map').each(function () {
        var key = $(this).attr('id');
        if (key && maps[key]) {
            maps[key]();
            maps[key] = null;
        }
    });
};

/*jshint loopfunc: true */
for (var i = 1; i <= max; i++) {
    $('.steps').append(
        $('<div>').addClass('step').append(
            (function (btn, k) {
                btn.on('click', function () {
                    var parent = $(this).parent();
                    if (!parent.hasClass('active')) { 
                        $('.step.active').removeClass('active');
                        $('.frame.coming').removeClass('coming').addClass('leaving');
                        $('.frame-' + k).removeClass('leaving').addClass('coming');
                        parent.addClass('active');
                    }
                    update();
                });
                return btn;
            })(
                $('<button>').addClass('inner'), i
            )
        )
    );
}


$('.begin').on('click', function () {
    $(document.body).removeClass('is-home');
    $('.homepage').addClass('leaving').removeClass('coming');
    $('.frame-1').addClass('coming').removeClass('leaving');
    $('.steps .step:first').addClass('active');
});

$('.home').on('click', function () {
    $('.frame.coming').removeClass('coming').addClass('leaving');
    $('.steps .step.active').removeClass('active');
    $('.homepage').removeClass('leaving').addClass('coming');
    $(document.body).addClass('is-home');
});


$('.next').on('click', function () {
    var current = $('.frame.coming');
    var next = current.next();
    if (next.length) {
        current.removeClass('coming').addClass('leaving');
        next.removeClass('leaving').addClass('coming');
        $('.steps .step.active').removeClass('active');
        $('.steps .step').eq(next.index()).addClass('active');
    }
    update();
});

$('.card').on('click', function () {
    var page = $(this).closest('.page');
    console.log(page, page.length);
    if (page.length === 0) page = $(this).closest('.frame');
    var note = page.find('.note');
    note.find('.title').text( $(this).find('.title').text() );
    note.find('.content').empty().append( $(this).find('.content').clone() );
    page.addClass('with-note');
});

$('.mask').on('click', function () {
   $(this).closest('.page').removeClass('with-note');
   $(this).closest('.frame').removeClass('with-note');
});$('.steps').empty();
var max = $('.frames .frame').length;
var maps = {};

$('audio').get(0).volume = 0.1;
$('audio').get(0).play();

var update = function () {
    if ($('.steps .step:last').hasClass('active')) {
        $('.next').text('Fini !');
    } else {
        $('.next').text('Continuer');
    }
    $('.frame.coming').find('.map').each(function () {
        var key = $(this).attr('id');
        if (key && maps[key]) {
            maps[key]();
            maps[key] = null;
        }
    });
};

/*jshint loopfunc: true */
for (var i = 1; i <= max; i++) {
    $('.steps').append(
        $('<div>').addClass('step').append(
            (function (btn, k) {
                btn.on('click', function () {
                    var parent = $(this).parent();
                    if (!parent.hasClass('active')) { 
                        $('.step.active').removeClass('active');
                        $('.frame.coming').removeClass('coming').addClass('leaving');
                        $('.frame-' + k).removeClass('leaving').addClass('coming');
                        parent.addClass('active');
                    }
                    update();
                });
                return btn;
            })(
                $('<button>').addClass('inner'), i
            )
        )
    );
}


$('.begin').on('click', function () {
    $(document.body).removeClass('is-home');
    $('.homepage').addClass('leaving').removeClass('coming');
    $('.frame-1').addClass('coming').removeClass('leaving');
    $('.steps .step:first').addClass('active');
});

$('.home').on('click', function () {
    $('.frame.coming').removeClass('coming').addClass('leaving');
    $('.steps .step.active').removeClass('active');
    $('.homepage').removeClass('leaving').addClass('coming');
    $(document.body).addClass('is-home');
});


$('.next').on('click', function () {
    var current = $('.frame.coming');
    var next = current.next();
    if (next.length) {
        current.removeClass('coming').addClass('leaving');
        next.removeClass('leaving').addClass('coming');
        $('.steps .step.active').removeClass('active');
        $('.steps .step').eq(next.index()).addClass('active');
    }
    update();
});

$('.card').on('click', function () {
    var page = $(this).closest('.page');
    console.log(page, page.length);
    if (page.length === 0) page = $(this).closest('.frame');
    var note = page.find('.note');
    note.find('.title').text( $(this).find('.title').text() );
    note.find('.content').empty().append( $(this).find('.content').clone() );
    page.addClass('with-note');
});

$('.mask').on('click', function () {
   $(this).closest('.page').removeClass('with-note');
   $(this).closest('.frame').removeClass('with-note');
});