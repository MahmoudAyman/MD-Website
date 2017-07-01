/******************************************************************************************************************************
COMMING SOON PAGE
*******************************************************************************************************************************/
(function($) {
    /**
    * Set your date here  (YEAR, MONTH (0 for January/11 for December), DAY, HOUR, MINUTE, SECOND)
    * according to the GMT+0 Timezone
    **/
    var launch = hamada1;
    launch.setMonth(launch.getMonth()-1)
    var launch2= hamada2;
    launch2.setMonth(launch2.getMonth()-1)
    /**
    * The script
    **/
    var message1 = $('#message1');
    var days1 = $('#days1');
    var hours1 = $('#hours1');
    var minutes1 = $('#minutes1');
    var seconds1 = $('#seconds1');

    var message2 = $('#message2');
    var days2 = $('#days2');
    var hours2 = $('#hours2');
    var minutes2 = $('#minutes2');
    var seconds2 = $('#seconds2');
    
    setDate();
    function setDate(){
        var now = new Date();
        if( launch < now ){
            days1.html('<h1>0</H1><p>Day</p>');
            hours1.html('<h1>0</h1><p>Hour</p>');
            minutes1.html('<h1>0</h1><p>Minute</p>');
            seconds1.html('<h1>0</h1><p>Second</p>');
            message1.html('NEXT ROUND');
        }
        else{
            var s = -now.getTimezoneOffset()*60 + (launch.getTime() - now.getTime())/1000;
            var d = Math.floor(s/86400);
            days1.html('<h1>'+d+'</h1><p>Day'+(d>1?'s':''),'</p>');
            s -= d*86400;

            var h = Math.floor(s/3600);
            hours1.html('<h1>'+h+'</h1><p>Hour'+(h>1?'s':''),'</p>');
            s -= h*3600;

            var m = Math.floor(s/60);
            minutes1.html('<h1>'+m+'</h1><p>Minute'+(m>1?'s':''),'</p>');

            s = Math.floor(s-m*60);
            seconds1.html('<h1>'+s+'</h1><p>Second'+(s>1?'s':''),'</p>');
            setTimeout(setDate, 1000);

        }
    }
    setDate2();
    function setDate2(){
        var now = new Date();
        if( launch2 < now ){
            days2.html('<h1>0</H1><p>Day</p>');
            hours2.html('<h1>0</h1><p>Hour</p>');
            minutes2.html('<h1>0</h1><p>Minute</p>');
            seconds2.html('<h1>0</h1><p>Second</p>');
            message2.html('NEXT ROUND');
        }
        else{
            var s = -now.getTimezoneOffset()*60 + (launch2.getTime() - now.getTime())/1000;
            var d = Math.floor(s/86400);
            days2.html('<h1>'+d+'</h1><p>Day'+(d>1?'s':''),'</p>');
            s -= d*86400;

            var h = Math.floor(s/3600);
            hours2.html('<h1>'+h+'</h1><p>Hour'+(h>1?'s':''),'</p>');
            s -= h*3600;

            var m = Math.floor(s/60);
            minutes2.html('<h1>'+m+'</h1><p>Minute'+(m>1?'s':''),'</p>');

            s = Math.floor(s-m*60);
            seconds2.html('<h1>'+s+'</h1><p>Second'+(s>1?'s':''),'</p>');
            setTimeout(setDate, 1000);

        }
    }
})(jQuery);
// /******************************************************************************************************************************
// ANIMATIONS
// *******************************************************************************************************************************/
// (function($) {
//     "use strict";
//     var isMobile = false;
//     if (navigator.userAgent.match(/Android/i) || 
//         navigator.userAgent.match(/webOS/i) ||
//         navigator.userAgent.match(/iPhone/i) || 
//         navigator.userAgent.match(/iPad/i)|| 
//         navigator.userAgent.match(/iPod/i) || 
//         navigator.userAgent.match(/BlackBerry/i)) {                 
//         isMobile = true;            
//     }
//     if (isMobile == true) {
//         $('body').removeClass('nomobile');
//         $('.animated').removeClass('animated');
//     }
//     $(function() {
//         if (isMobile == false) {
//             $('*[data-animated]').addClass('animated');
//         }
//         function animated_contents() {
//             $(".animated:appeared").each(function (i) {
//                 var $this    = $(this),
//                     animated = $(this).data('animated');

//                 setTimeout(function () {
//                     $this.addClass(animated);
//                 }, 50 * i);
//             });
//         }
//         animated_contents();
//         $(window).scroll(function () {
//             animated_contents();
//         });
//     });
// })(jQuery);
// *****************************************************************************************************************************
// SLIDER
// ******************************************************************************************************************************
// (function($) {
//     "use strict";
//     $("body.nomobile #slider").revolution(
//     {
//             delay:9000,
//             startheight:450,
//             startwidth:890,

//             thumbWidth:100,
//             thumbHeight:50,
//             thumbAmount:5,

//             onHoverStop:"on",
//             hideThumbs:200,
//             navigationType:"bullet",
//             navigationStyle:"round",
//             navigationArrows:"none",

//             touchenabled:"on",

//             navOffsetHorizontal:0,
//             navOffsetVertical:80,
//             shadow:undefined,
//             fullWidth:"on",
//             fullScreen:"on"
//     });
// })(jQuery);
// /******************************************************************************************************************************
// BOOTSTRAP
// *******************************************************************************************************************************/
// (function($) {
//     "use strict";
//         $('[data-rel=tooltip]').tooltip();
//         $(".alert").alert();
// })(jQuery);
// /******************************************************************************************************************************
// PROGRESS BAR
// *******************************************************************************************************************************/
// (function($) {
//     "use strict";
//     $("a.btn-progress").click(function(){
//         $('#bar-container').slideToggle(); 
//     });
// })(jQuery);
