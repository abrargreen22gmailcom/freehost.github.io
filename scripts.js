<<<<<<< HEAD
// Simple jQuery to toggle between dark and light theme
$(document).ready(function() {
    $("button").click(function() {
        $("body").toggleClass("dark-theme");
    });
});

// Example of smooth scrolling for anchor links (e.g., for navigation)
$("a").on("click", function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top,
            },
            800
        );
    }
});
=======
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundColor = "#f0f0f0"; // Change background color after loading the page
});
>>>>>>> fcd1e68d1f73723357008a8ef89ce6942ef7330c
