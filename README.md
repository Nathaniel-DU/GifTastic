# GifTastic

About
An API homework where I grabbed the Gify API and linked a ton of GOOD Shrek memes.

Demo
https://nathaniel-du.github.io/GifTastic/.

Requirements
dependencies of the application. 

//switch between still and animated
    function stillAnimate() {
        var src = $(this).attr('src')
        switch (src) {
            case $(this).attr('data-still'): 
                $(this).attr('src', $(this).attr('data-animate'))
                break;
            case $(this).attr('data-animate'):
                $(this).attr('src', $(this).attr('data-still'))
                break;
            default:
                break;

//this allows for pausing and playing gifs


function displayImg() {
        
        var all = $(this).attr('data-name') 
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + all + "&limit=10&api_key=7juCSAIINcQUbH9FEO1SlNUgdIudQ9qH";
        $('.info').empty() 
        $.ajax({
            url: queryURL,
            Method: "GET"

//this is where my API key and AJAX live            


Build Tools
technologies used:

Bootstrap
jQuery
Javascript
Gify API

