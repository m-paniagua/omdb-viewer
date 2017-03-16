$(document).ready(function(){
    var movie;
    var APIUrl;
    
    $("#search").on('click', function() {
       clear(); 
       movie = $("#movieName").val();
       APIUrl = 'https://www.omdbapi.com/?s=' + movie;
       $('#loader').show();
       $.ajax({
            type: 'GET',
            url: APIUrl,
            success: function(movies) {
            var htmlString = "";
            		for (var i = 0; i < movies.Search.length; i++) {
            		    htmlString += "<p>" + movies.Search[i].Title + " (" + movies.Search[i].Year +")</p>";
             		}
             		$("#results").append(htmlString);
            },
            error: function() {
            	alert('error loading movies');
            },
            complete: function(){
                $('#loader').hide();
              }
	});
	    $("#movieName").val("");
       //console.log(APIUrl);
    });
    
	function clear() {
	$("#results").empty();
	}
	
	$('#movieName').keypress(function (e) {
		 var key = e.which;
		 if(key == 13)  // the enter key code
		  {
		    $('#search').click();
		    return false;  
		  }
	});
});