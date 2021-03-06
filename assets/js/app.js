(function ($) {
    'use strict';
    // PreLoader 
    jQuery(window).on('load', function() {
        //jQuery(".preloader").fadeOut(1000);
        $(".preloader").delay(1600).fadeOut("slow");
    });


    /*======= Search bar=======*/
    var submitIcon = $('.search-btn i');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function() {
        if (isOpen == false) {
            searchBox.addClass('searchbox-open');
            submitIcon.attr('class', 'bx bx-x');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            submitIcon.attr('class', 'bx bx-search');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function() {
        return false;
    });
    searchBox.mouseup(function() {
        return false;
    });
    $(document).mouseup(function() {
        if (isOpen == true) {
            $('.searchbox-icon').css('display', 'block');
            submitIcon.click();
        }
    });
    /*======= Search bar end =======*/

    // ===== Main Menu
    function mainMenu() {
        const navbarToggler = $('.nav-toggler'),
            navMenu = $('.nav-menu'),
            mobilePanel = $('.mobile-menu-panel'),
            mobilePanelMenu = $('.mobile-menu-panel .panel-menu'),
            navClose = $('.panel-close');

        // Navbar toggler
        navbarToggler.on('click', function (e) {
            e.preventDefault();

            navbarToggler.toggleClass('panel-opened');
            mobilePanel.toggleClass('panel-opened');
        });

        // Close icon
        navClose.on('click', function (e) {
            e.preventDefault();

            mobilePanel.removeClass('panel-opened');
            navbarToggler.removeClass('panel-opened');
        });

        // Adds toggle button to li items that have children
        navMenu.find('li a').each(function () {
            if ($(this).next().length > 0) {
                $(this).append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>');
            }
        });

        mobilePanelMenu.find('li a').each(function () {
            if ($(this).next().length > 0) {
                $(this).append('<span class="dd-trigger"><i class="far fa-angle-down"></i></span>');
            }
        });

        // Expands the dropdown menu on each click
        mobilePanelMenu.find('.dd-trigger').on('click', function (e) {
            e.preventDefault();
            $(this).parent().parent('li').children('ul.submenu').stop(true, true).slideToggle(350);
            $(this).toggleClass('submenu-opened')
        });
    };

    // ===== Sticky Header
    function stickyHeader() {
        let scroll_top = $(window).scrollTop(),
            siteHeader = $('.site-header'),
            offsetTop = siteHeader.outerHeight(),
            offsetTopAnimation = offsetTop + 150;

        if (siteHeader.hasClass('sticky-header')) {
            if (scroll_top > offsetTopAnimation) {
                siteHeader.addClass('sticky-on');
            } else {
                siteHeader.removeClass('sticky-on');
            }
        }
    }

    // ===== Header Breakpoint Resize
    function headerBreakpointResize() {
        // Breakpoint Check
        const windowWidth = $(window).innerWidth(),
            navContainer = $('.navbar-wrapper'),
            breakpoint = 992;

        if (windowWidth <= breakpoint) {
            navContainer.addClass('breakpoint-on');
        } else {
            navContainer.removeClass('breakpoint-on');
        }

        // Header Height
        const siteHeader = $('.site-header');
        if (!siteHeader.hasClass('transparent-header')) {
            let newHeight = 0;
            siteHeader.removeAttr('style');
            newHeight = siteHeader.outerHeight();
            siteHeader.height(newHeight);
        }
    }
    /*---------------------
    === Document Ready  ===
    ----------------------*/

    $(document).ready(function () {
        mainMenu();
        headerBreakpointResize();
    });

    /*--------------------
    === Window Resize  ===
    --------------------*/
    $(window).on('resize', function () {
        headerBreakpointResize();
    });

    /*--------------------
    === Window Scroll  ===
    ----------------------*/
    $(window).on('scroll', function () {
        stickyHeader();
    });

    /* ========= COUNTER WIDGET ========*/
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
        counter.innerText = "0";
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 5000;
            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 50);
            } else counter.innerText = target;
        };
        updateCounter();
    });

    
    // Timer CountDown
    function makeTimer() {

        // var endTime = new Date("02 june 2022 9:56:00 GMT+01:00");
        var endTime = new Date("02 june 2022 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");

    }
    setInterval(function() { makeTimer(); }, 1000);


})(jQuery);
