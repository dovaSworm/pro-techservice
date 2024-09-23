$(function () {
    var ww = $(window).width();
    var wh = $(window).height();
    var navbar = $(".navbar");
    var date = new Date();
    var year = date.getFullYear();
    var hours = date.getHours();
    var day = date.getDay();
    $(".radnovreme").html('Radnim danom 10h - 19h<br>Subotom 10-15h');
    if ((hours >= 10 && hours <= 19 && day <= 5 && day > 0) || (day == 6 && hours >= 10 && hours <= 15)) {
        $(".r-vreme").html('otvoreno');
        $(".r-vreme").removeClass('closed')
        $(".r-vreme").addClass('open')
    } else {
        $(".r-vreme").html('zatvoreno');
        $(".r-vreme").addClass('closed');
        $(".r-vreme").removeClass('open');
    }

    document.getElementById('prava').innerHTML = "<small>Copyright &copy; RDdesign " + year + ". All Rights Reserved</small>";

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $(".title-holder").addClass("anima-hero2");
    $(".dropdown-menu").addClass("nav-anima");

    // EFFECTS navbar    --------------------------------------------------------------------
    if (document.title === "Servis laptop i desktop računara – Voždovac, Autokomanda, Beograd") {
        $(".nav-link:first-of-type").addClass('active');
        $(window).on('scroll', () => {
            let hero = document.getElementsByClassName('holder')[0].getBoundingClientRect().bottom;
            let scrollPosition = $(window).scrollTop();
            if (hero < scrollPosition) {
                navbar.addClass('d-flex');
            } else {
                navbar.removeClass('d-flex');
            }
        });
    } else {
        navbar.addClass("d-flex");
    }
    if (document.title === "Usluge, Servis računara Voždovac, Autokomanda, Beograd") {
        $(".nav-link:nth-of-type(3)").addClass('active');
    }
    if (document.title === "Cenovnik, Servis računara Voždovac, Autokomanda, Beograd") {
        $(".nav-link:nth-of-type(4)").addClass('active');
    }
});