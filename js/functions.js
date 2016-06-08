// mobile navigation
function mobileNav() {
    var  mobileHead = document.getElementById("mobileHead");

    if (mobileHead.className == "mobile-nav mobile-nav-hide") {
      mobileHead.className = "mobile-nav mobile-nav-show";
    } else {
      mobileHead.className = "mobile-nav mobile-nav-hide";
    }
    
}

//
// // headBar transition

//
// $(window).on("scroll", function () {
//     var headBar = document.getElementById("headBar");
//     if ($(this).scrollTop() > 100) {
//         headBar.className = "logo-head-scroll";
//     }
//     else {
//         headBar.className = "logo-head-home";
//     }
// });


// // smooth scroll to anchor (jquery)

// $(function() {
//   $('a[href^=#][href*=to]').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

// //smooth scroll to top
//
// var t1=0;
// window.onscroll = scroll1;
//
// function scroll1()
// {
//     var scrollToTop = document.getElementById('scrollToTop');
//     window.scrollY>0 ? scrollToTop.style.opacity='100' :  scrollToTop.style.opacity='0';
// }
// function abcd()
// {
//     var y1 = window.scrollY;
//     y1 = y1-1000;
//     window.scrollTo(0,y1);
//     if(y1>0)
//     {
//         t1 = setTimeout("abcd()",100);
//     }
//     else
//     {
//         clearTimeout(t1);
//     }
// }
