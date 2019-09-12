/*global $*/
$(document).ready(function () {
    
    "use strict";
    
    $(".nav-item").click(function () {
        $(this).addClass("before").siblings().removeClass("before");
    });
    
    $(".brand").click(function () {
        $("main").css("display", "block");
    });
});