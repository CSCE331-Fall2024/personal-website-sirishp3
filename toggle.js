function load()
{
    let style = localStorage.getElementById('stylesheet');
    if(style === null)
    {
        style =  "coffee.css";
    }
    ducument.getElementById('stylesheet').setAttribute("href", style);
}

function park_mode() {
    localStorage.setItem('stylesheet', 'night.css');
    load();
}

function coffee_mode() {
    localStorage.setItem('stylesheet', 'coffee.css');
    load();
}

function toggle()
{
    var element = document.getElementById('stylesheet');
    var currentStyle = element.getAttribute('href');
    var newStyle;
    if(currentStyle === "coffee.css"){
        newStyle = "night.css";
    }
    else
    {
        newStyle = "coffee.css";
    }

    element.setAttribute('href', newStyle);
    localStorage.setItem('stylesheet', newStyle);
}

window.onload = function() {
    var savedStyle = localStorage.getItem('stylesheet');
    var element = document.getElementById('stylesheet');
    if(savedStyle || element)
    {
        element.setAttribute('href', savedStyle);
    }
}


