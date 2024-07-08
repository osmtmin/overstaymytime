
// slide

setInterval(function(){
    $("#slide ul").delay(2000);
    $("#slide ul").animate({
        marginLeft: '-1920px'
    },1000)
    $("#slide ul").delay(2000);
    $("#slide ul").animate({
        marginLeft: '-3840px'
    },1000)
    $("#slide ul").delay(2000);
    $("#slide ul").animate({
        marginLeft: '-5760px'
    },1000)
    //  $("#slide ul").delay(2000);
    $("#slide ul").animate({
        marginLeft: '0px'
    },0)
});

