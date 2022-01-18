$(".square").on("contextmenu", function(e) {
    e.preventDefault();
    if ($(this).html().indexOf("warning") == -1)
        $(this).html("<div class=\"warning hidden\"></div>" + "<div class=\"no-entry hidden\"></div>" + $(this).html());
    
    if (e.ctrlKey) {
        $(this).children(".warning").toggleClass("hidden");
        $(this).children(".starred").toggleClass("hidden");
    } else if (e.altKey) {
        $(this).children(".no-entry").toggleClass("hidden");
        $(this).children(".starred").toggleClass("hidden");
    }
    return false;
});
