$(document).ready(function () {
    $(".navbar-nav a").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function () {
            window.location.hash = hash;
        });
    });
});
