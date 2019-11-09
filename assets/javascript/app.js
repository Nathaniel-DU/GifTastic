$(function () {

    var topics = ['shrek',
        'donkey',
        'Princess Fiona',
        'Puss In Boots',
        'The Gingerbread Man',
        'The Big Bad Wolf',
        'Queen Lillian',
        'King Harold',
        
    ];

    $('.info').empty();

    
    function createButtons() {

        $('.buttons').empty(); 
        

        for (i = 0; i < topics.length; i++) {
            var btn = $('<button>')
                if(i%2 == 0) {
                    btn.attr('class', 'btn btn-outline-secondary btn-lg btn-block text-white border-black animated rotateIn'); 
                }
                else {
                    btn.attr('class', "btn btn-outline-secondary btn-lg btn-block text-white border-black animated bounceInDown"); 
                }
                btn.attr('data-name', topics[i]).text(topics[i]);
            $('.buttons').append(btn) 
        }
    }

    function displayImg() {
        
        var all = $(this).attr('data-name') 
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + all + "&limit=10&api_key=7juCSAIINcQUbH9FEO1SlNUgdIudQ9qH";
        $('.info').empty() 
        $.ajax({
            url: queryURL,
            Method: "GET"
        }).then(function (response) {
            console.log(response.data)
            for (var i = 0; i < response.data.length; i++) {

                var rating = response.data[i].rating 
                var title = response.data[i].title  

                var $div = $('<div class="gifs">')
                var $image = $('<img>').addClass('images') 
                var $p = $('<p class="rating">Rating: ' + rating + '</p>')
                var $t = $('<p class="title">Title: ' + title + '</p>')

                $div.addClass('gifs animated jackInTheBox') 
                $div.append($image, $p, $t)
                $image.attr('src', response.data[i].images.fixed_height_still.url) 
                    .attr('data-still', response.data[i].images.fixed_height_still.url)
                    .attr('data-animate', response.data[i].images.fixed_height.url)
                $('.info').append($div) 
            }
        })
    }
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
        }
    }

    //click event for  submission
    $('.submit').on('click', function (event) {
        event.preventDefault();
        var input = $('.user-input').val().trim()

        if (!input) {
            alert("MUST ADD SHREK!!!!!");
        }
        else {
        console.log(input);
        form.reset()
        topics.push(input);
        createButtons();
        }
    })

    createButtons();
    $(document).on('click', '.btn', displayImg)
    $(document).on('click', '.images', stillAnimate)
});
