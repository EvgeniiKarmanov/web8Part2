var $popOverlay = $(".popup-overlay");
var $popWindow = $(".popWindow");
var $popupMainWindow = $(".popup-main-window");
var $popThankYouWindow = $(".thank-you-window");
var $popClose = $(".close-btn");
var $popOpen = $("#for-popup-form");

$(function() {
    $popClose.on("click", function() {
        history.replaceState(null, null, ' ');
        $popOverlay.fadeOut();
        $popWindow.fadeOut();
        $popThankYouWindow.fadeOut();
    });

    $(document).on("click", function(event) {
        if ($(event.target).closest($popWindow).length) return;
        history.replaceState(null, null, ' ');
        $popOverlay.fadeOut();
        $popWindow.fadeOut();
        $popThankYouWindow.fadeOut();
        event.stopPropagation();
    });

    $(".popup-form").submit(function() {
        var th = $(this);
        $(".popup-submit").prop('disabled', true);
        $.ajax({
        type: "POST",
        url: "https://formcarry.com/s/1lL9UGjejlN",
        data: th.serialize(),
        })
        $popupMainWindow.fadeOut();
        $popThankYouWindow.fadeIn();
        setTimeout(function() {
            $(".popup-submit").prop('disabled', false);
            th.trigger("reset");
        }, 1000);

        return false;
    });
});

$(document).ready(function() {
    $popOpen.click(function(){
        window.location.hash = "#popup";
        $popOverlay.fadeIn();
        $popupMainWindow.fadeIn();
        return false;
    });
});

$(window).on('hashchange', function (event) {
    if(window.location.hash == "#popup"){
        $popOverlay.fadeIn();
        $popupMainWindow.fadeIn();
    }
    else{
        if(window.location.hash != "#popup") {
            $popOverlay.fadeOut();
            $popupMainWindow.fadeOut();
            $popThankYouWindow.fadeOut();
        }
    }
});