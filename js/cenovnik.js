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


    $('.topnav').mouseleave(function() {
        $("#dropusluge-menu").css({ "visibility": "hidden", "opacity": "0" });
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

    if (title === "Cenovnik") {
        $(".navbar").css("background-image", "linear-gradient(60deg, rgba(248, 247, 236, 0.7) 15%, rgba(244, 245, 205, 0.7), rgba(249, 250, 233, 0.6) 85%)");
        $("footer").css("background-image", "linear-gradient(60deg, rgba(248, 247, 236, 0.7) 15%, rgba(244, 245, 205, 0.7), rgba(249, 250, 233, 0.6) 85%)");
        $(".content-contact").css("background-image", "linear-gradient(60deg, rgba(248, 247, 236, 0.7) 15%, rgba(244, 245, 205, 0.7), rgba(249, 250, 233, 0.6) 85%)");
        $(".dropdown-menu").css("background-image", "linear-gradient(60deg, rgba(248, 247, 236, 0.7) 15%, rgba(244, 245, 205, 0.7), rgba(249, 250, 233, 0.6) 85%)");
        colorLi();
    }
    colorLi();
    var liColor = $('ul.dropdown-menu li').css("background-color");

    function colorLi() {
        $('ul.dropdown-menu li').mouseover(function() {
            $(this).css("background-color", "#f7fafa");
            $('a', $(this)).css("background-color", "#f7fafa");
        });
        $('ul.dropdown-menu li').mouseleave(function() {
            $(this).css("background-color", liColor);
            $('ul.dropdown-menu li>a').css("background-color", liColor);
        });

    }

    // za nav in mobile view //////////////////////////////////////////////


    var clickCounter = 0;
    $(function() { //podesavanje menija za telefone
        if ($(window).width() <= 768) {
            $('li.dropdown').remove();
            $('li.show-mobile').css("display", "block");
            $('div.col-lg-offset-2, .col-sm-pull-6').removeClass("card-padding");
            $('i.fa-lg').removeClass("fa-lg");
            $('div.radnovreme').addClass("phone-intro-header");
            $('div.radnovreme').removeClass("radnovreme");
            $('.text-scroll').removeClass("text-scroll");
            $('#dropusluge-menu').remove();
            $('.phone-nav span, span a').css("font-size", "15px");

            $('li.dropdown a').click(function() {
                clickCounter++;
                if (clickCounter == 1) {
                    $('li.dropdown a').removeAttr("href");

                } else if (clickCounter > 1) {
                    $('li.dropdown a').attr("href", "services.html");
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

    window.onscroll = function() {
        myFunction()
    };

    var windowHeight = (window.innerHeight * 5) / 10;
    var contact = document.getElementById("contact");

    function myFunction() {

        var positionC = contact.getBoundingClientRect().top;

        if (windowHeight >= positionC) {
            contact.getElementsByClassName("container")[0].classList.add("animaimg");
            document.getElementById("partner").classList.add("animarightdelay");
            var banner = document.getElementsByClassName("banner");
            banner[0].getElementsByClassName("col-md-6")[0].classList.add("animaleftdelay");
            banner[0].getElementsByClassName("col-md-6")[1].classList.add("animaleftdelay");
            // contact.getElementsByClassName("col")[1].classList.add("animaright");
        }
        // console.log(positionS);
    }
    //za radno vreme
    var newDate = new Date();
    var hours = new Date().getHours();
    var day = new Date().getDay();
    if ((hours >= 13 && hours <= 21 && day <= 5) || (day = 6 && hours >= 10 && hours <= 15)) {
        $("#r-vreme").html('otvoreno');
    } else {
        $("#r-vreme").html('zatvoreno');
        $("#r-vreme").css('color', 'red');
    }

});