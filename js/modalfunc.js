var modal = document.getElementById("upl__modal");
var btn = document.getElementById("openmodal");
var nofound = document.getElementById("nofoundmod");
var span = document.getElementsByClassName("close")[0];
var overlay = document.getElementById("modal__overlay");

btn.onclick = function() {
    $("#upl__modal").slideToggle(500);
    $("#modal__overlay").slideToggle(500);
}

if (window.location.pathname == '/mods/') {
    nofound.onclick = function() {
        $("#upl__modal").slideToggle(500);
        $("#modal__overlay").slideToggle(500);
    }
}

span.onclick = function() {
    $("#upl__modal").slideToggle(500);
    $("#modal__overlay").slideToggle(500);
}

window.onclick = function(event) {
    if (event.target == modal) {
        $("#upl__modal").slideToggle(500);
        $("#modal__overlay").slideToggle(500);
    }
}