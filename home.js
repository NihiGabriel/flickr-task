$(function(){

    $("#btn1").on("click", function() {

        //ajax GET or POST
        //Use  json For cors
        var searchstring = $("#photosearch").val();
        var url = "https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=?&tags="+searchstring;

        $.ajax({
            url: url,
            dataType: 'jsonp',
            type: 'GET',
            contentType: 'application/json',
            crossDomain: true,
            async: false,
            success: function(data){
                console.log(data);
                $("#flickrresults").html("");
                $.each(data.items, function(i, item){
                    var src = item.media.m;
                    var img = $("<img src='"+src+"'</img>");
                    $("#flickrresults").append(img);
                })
            }

        });

    });


});