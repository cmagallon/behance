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
       getUserData();
        

    },
    error: function(){
        console.log("Something went wrong")
    }
})


function getData(){	
	$.ajax({
		// url: "https://api.behance.net/v2/creativestofollow?client_id="+accessToken,
    url: "https://api.behance.net/v2/users/matiascorea/projects?client_id="+accessToken,
		dataType: "jsonp",
		success:function(dataFromBehance){

			console.log(dataFromBehance.projects[0]);
      // $("#nameReal").append("<p>" +dataFromBehance.creatives_to_follow[2].display_name + "</p>");
      // $("#trialImage").append("<p><img src='" +dataFromBehance.creatives_to_follow[1].images[100] + "'></p>");

      $("#proName").append("<p>" +dataFromBehance.projects[0].name + "</p>");
      $("#img1").append("<p><img src='" +dataFromBehance.projects[0].covers["original"] + "'></p>");
      $("#thumbnail").append("<p><img src='" +dataFromBehance.projects[0].covers[115] + "'></p>");
      $("#likes").append("<p>" +dataFromBehance.projects[0].stats["appreciations"]+ "</p>");
      $("#views").append("<p>" +dataFromBehance.projects[0].stats["views"]+ "</p>");



      // for (var i = 0; i < dataFromBehance.projects.length; i++) {
      //           console.log(dataFromBehance.projects[0])
                
                
      //       }


		},

		error:function(){
			console.log("can't connect to Behance api");
		}

	});

}

function getUserData(){ 
  $.ajax({
    
    url: "https://api.behance.net/v2/users/matiascorea?client_id="+accessToken,
    dataType: "jsonp",
    success:function(dataFromBehance){

      console.log(dataFromBehance.user["images"]);

      $("#profileImg").append("<p><img src='" +dataFromBehance.user["images"][138] + "'></p>");
      
    


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

