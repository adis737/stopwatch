function setLightTheme() {
    // Remove dark mode class from body
    $('body').removeClass('dark-mode');
    
    // Navbar styling
    $('.navbar.navbar-expand-lg.navbar-light').addClass('bg-light');
    $('.navbar.navbar-expand-lg.navbar-light').css({ "background-color": "rgba(255, 255, 255, 0.95)" });
    
    // Title styling
    $('#title1').css({ "color": "#003333" });
    
    // Body background - keep video background
    $('body').css({ "background": "transparent" });
    
    // Video overlay for light mode
    $('.video-overlay').css({ "background": "rgba(0, 0, 0, 0.3)" });
    
    // Time display styling
    $('.digit').css({ "color": "white" });
    $('.txt').css({ "color": "white" });
    $('.todayDate h3').css({ "color": "white" });
    
    // Button styling
    $('.buttons').css({ 
        "border-color": "white",
        "background": "rgba(0, 0, 0, 0.4)",
        "color": "#fefefe"
    });
    
    // Navigation links - always dark
    $('.nav-link').css({ "color": "#003333" });
    
    // Footer styling
    $('.foot').css({ "background": "rgba(255, 255, 255, 0.95)" });
    $('.textfooter').css({ "color": "black" });
    $('.link').css({ "background-color": "#fff", "color": "#000" });
    
    // Table styling
    $('tr').css({ "background-color": "rgba(255, 255, 255, 0.95)" });
    $('th, td').css({ "color": "#000" });
    $('th').css({ "background-color": "#95A5A6" });
    
    // Mode toggle buttons
    $('.mode-btn').css({ 
        "background-color": "white",
        "color": "#003333",
        "border-color": "#003333"
    });
    $('.mode-btn.active').css({ 
        "background-color": "#003333",
        "color": "white"
    });
    
    // Countdown input
    $('#countdown-minutes').css({ 
        "background-color": "white",
        "color": "#003333",
        "border": "1px solid #003333"
    });
    
    // Set checkbox state
    $('#light').prop("checked", false);
}

function setDarkTheme() {
    // Add dark mode class to body
    $('body').addClass('dark-mode');
    
    // Navbar styling
    $('.navbar.navbar-expand-lg.navbar-light').removeClass('bg-light');
    $('.navbar.navbar-expand-lg.navbar-light').css({ "background-color": "rgba(0, 0, 0, 0.95)" });
    
    // Title styling
    $('#title1').css({ "color": "white" });
    
    // Body background - keep video background but add dark overlay
    $('body').css({ "background": "transparent" });
    
    // Video overlay for dark mode
    $('.video-overlay').css({ "background": "rgba(0, 0, 0, 0.7)" });
    
    // Time display styling
    $('.digit').css({ "color": "#ff6b35" });
    $('.txt').css({ "color": "#ff6b35" });
    $('.todayDate h3').css({ "color": "white" });
    
    // Button styling
    $('.buttons').css({ 
        "border-color": "#ff6b35",
        "background": "rgba(255, 107, 53, 0.2)",
        "color": "#ff6b35"
    });
    
    // Navigation links - always dark
    $('.nav-link').css({ "color": "#003333" });
    
    // Footer styling
    $('.foot').css({ "background": "rgba(0, 0, 0, 0.95)" });
    $('.textfooter').css({ "color": "white" });
    $('.link').css({ "background-color": "#ff6b35", "color": "white" });
    
    // Table styling
    $('tr').css({ "background-color": "rgba(0, 0, 0, 0.8)" });
    $('th, td').css({ "color": "white" });
    $('th').css({ "background-color": "#333" });
    
    // Mode toggle buttons
    $('.mode-btn').css({ 
        "background-color": "transparent",
        "color": "white",
        "border-color": "white"
    });
    $('.mode-btn.active').css({ 
        "background-color": "#ff6b35",
        "color": "black"
    });
    
    // Countdown input
    $('#countdown-minutes').css({ 
        "background-color": "rgba(0, 0, 0, 0.8)",
        "color": "white",
        "border": "1px solid #ff6b35"
    });
    
    // Set checkbox state
    $('#light').prop("checked", true);
}

var prefersDarkThemeMql = window.matchMedia("(prefers-color-scheme: dark)");

prefersDarkThemeMql.addEventListener("change", function(mql) {
    if (localStorage.getItem("darkmode") === null && mql.matches) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
})

$(document).ready(function ()
{

    if (
        localStorage.getItem("darkmode") == "true" ||
        (localStorage.getItem("darkmode") === null && prefersDarkThemeMql.matches)
    )
    {
        setDarkTheme();
    }

    $('#light').on("change paste keyup", function (e)
    {
        if (!e.target.checked)
        {
            setLightTheme();
            localStorage.setItem("darkmode", false);
        }
        else
        {
            setDarkTheme();
            localStorage.setItem("darkmode", true);
        }
    });
});
