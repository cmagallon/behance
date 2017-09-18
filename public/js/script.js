var accessToken;


  $.ajax({
    url: "./config.json",
    dataType: "json",
    beforeSend: function(xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }

    },
	success: function(data){
       accessToken = data.accessToken;
       getData();
        

    },
    error: function(){
        console.log("Something went wrong")
    }
})


function getData(){	
	$.ajax({
		url: "https://api.behance.net/v2/creativestofollow?client_id="+accessToken,
		dataType: "jsonp",
		success:function(dataFromBehance){
			console.log(dataFromBehance);
      $("#nameReal").append("<p>" +dataFromBehance.creatives_to_follow[2].display_name + "</p>");
      $("#trialImage").append("<p><img src='" +dataFromBehance.creatives_to_follow[1].images[138] + "'></p>");



      for (var i = 0; i < dataFromBehance.creatives_to_follow.length; i++) {
                console.log(dataFromBehance.creatives_to_follow[i])
                
                
            }


		},

		error:function(){
			console.log("can't connect to Behance api");
		}



	});

}


// Code for popup

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

