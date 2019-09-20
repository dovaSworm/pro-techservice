$(document).ready(function() {

    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $('.usluge-lista li').mouseover(function() { //uvecava sliku ikonice on hover li
        $('img.dropdown-toggle', this).css({ "display": "inline-block" });
        $(this).children("img").css({ 'height': '21px', 'width': '21px' });
    });
    $('.usluge-lista li').mouseleave(function() {
        $('img.dropdown-toggle', this).css({ "display": "none" });
        $(this).children("img").css({ 'height': '20px', 'width': '20px' });
    });

    $('.dropdown-menu').mouseleave(function() {
        $(this).removeClass("show");
    });

    $('a.dropdown-item').mouseover(function() {
        $(this).css("font-weight", "600");
    });
    $('a.dropdown-item').mouseleave(function() {
        $(this).css("font-weight", "400");
    });

    $('#dropusluge').mouseover(function() {
        $("#dropusluge-menu").css({
            "display": "block",
            "text-decoration": "none",
            "font-weight": "700",
            "opacity": "1",
            "visibility": "visible"
        });
    });
    $('#dropusluge').mouseleave(function() {
        if ($('ul.nav > li > a:hover').html() == 'O nama' ||
            $('ul.nav > li > a:hover').html() == 'Cenovnik')
            $("#dropusluge-menu").css({ "visibility": "hidden", "opacity": "0" });
    });
    $('.topnav').mouseleave(function() {
        $("#dropusluge-menu").css({ "visibility": "hidden", "opacity": "0" });
    });
    $('#dropusluge-menu').mouseleave(function() {
        $("#dropusluge-menu").css({ "visibility": "hidden", "opacity": "0" });
    });

    $('div#dropusluge-menu > a').mouseover(function() {
        $(this).css("font-weight", "700");
    });
    $('div#dropusluge-menu > a').mouseleave(function() {
        $(this).css("font-weight", "500");
    });

    $('div.navbar-collapse ul li a[href="#contact"]').click(function() {
        $('div.navbar-collapse').removeClass("show");
    });
    $('div.navbar-collapse ul li a[href="#about"]').click(function() {
        $('div.navbar-collapse').removeClass("show");
    });
    //  ukidanje margine iznad banera na svim stranicama izuzev index.html
    var title = document.title;
    if (title !== "Servis laptop i desktop računara – Autokomanda, Beograd") {
        $('.slide-show > img:gt(0)').css("position", "relative");
        $('.banner').css("margin-top", "1px");
    }




    var clickCounter = 0;
    $(function() { //podesavanje menija za telefone
        if ($(window).width() <= 768) {
            console.log();
            $('div.col-lg-offset-2, .col-sm-pull-6').removeClass("card-padding");
            $('div.col-lg-5.col-sm-6').removeClass("card-padding");
            $('i.fa-lg').removeClass("fa-lg");
            $('div.radnovreme').addClass("phone-intro-header");
            $('div.radnovreme').removeClass("radnovreme");
            $('.text-scroll').removeClass("text-scroll");
            $('#dropusluge-menu').remove();
            // $('.phone-nav span:last-child a').css("margin-left", "5px");
            $('.phone-nav span, span a').css("font-size", "15px");
            // $('.slide-show > img:gt(0)').css("position", "relative");
            // $(".slide-show > img.brisi").remove();
            // $('.slide-show').removeClass("slide-show");

            $('#dropusluge').click(function() {
                clickCounter++;
                if (clickCounter == 1) {
                    $('#dropusluge').removeAttr("href");
                    $(this).parent().after('<li><a href="laptop.html">Laptop servis<a></li>', '<li><a href="desktop.html">Desktop servis<a></li>');
                    $('a[href="laptop.html"]').next().remove();
                    $('a[href="desktop.html"]').next().remove();
                } else if (clickCounter > 1) {
                    $('#dropusluge').attr("href", "services.html");
                }
            });
        } else if ($(window).width() <= 1200) {
            // $('#bs-example-navbar-collapse-1 ul').removeClass("navbar-right");
            $('#bs-example-navbar-collapse-1 ul').css("font-size", ("20px"));
            $('.phone-nav span, span a').css("font-size", ("20px"));
            $('#dropusluge-menu').css("width", "170px");
            // $('.phone-nav img').css("margin-left","40px");
        } else if ($(window).width() <= 850) {
            $('.phone-nav span:last-child a').css("margin-left", "22px");
            $('#bs-example-navbar-collapse-1 ul').removeClass("navbar-right");
            $('.phone-nav span, span a').css("font-size", ("18px"));
        }


    });
    $('.carousel').carousel();
    // SLIDE SHOW
    var timer;
    $(".slide-show > img:gt(0)").hide();
    $(".slide-show")
        // when mouse enters, clear the timer if it has been set
        .mouseenter(function() {
            if (timer) { clearInterval(timer) }
        }).mouseleave(function() { // when mouse goes out, start the slideshow
            timer = setInterval(function() {
                $('.slide-show > img:first')
                    .fadeOut(1000)
                    .next()
                    .fadeIn(1000)
                    .end()
                    .appendTo('.slide-show');
            }, 3000);
        }).mouseleave(); // trigger mouseleave for initial slideshow starting

    var date = new Date();
    var year = date.getFullYear();
    console.log(year);
    document.getElementById('prava').innerHTML = "Copyright &copy; RDdesign " + year + ". All Rights Reserved";

});