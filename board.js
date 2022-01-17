setTimeout(function() {
    nodeList = document.getElementsByClassName('square');
    for (var x in nodeList) {
        nodeList[x].innerHTML = "<div class=\"warning hidden\"></div>" + "<div class=\"no-entry hidden\"></div>" + nodeList[x].innerHTML;
    }
}, 5000);

$(".square").on("contextmenu", function(e) {
    e.preventDefault();
    if (e.ctrlKey) {
        $(this).children(".warning").toggleClass("hidden");
        $(this).children(".starred").toggleClass("hidden");
    } else if (e.altKey) {
        $(this).children(".no-entry").toggleClass("hidden");
        $(this).children(".starred").toggleClass("hidden");
    }
    return false;
});
