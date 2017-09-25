var accessToken = "uLqA16H6sQWfTUFyQij6fsxlkDUSnckN";


$.ajax({
    url: "https://api.behance.net/v2/creativestofollow?client_id=uLqA16H6sQWfTUFyQij6fsxlkDUSnckN",
    dataType: "jsonp",
    success:function(dataFromBehance){
      console.log(dataFromBehance);

       getData();
       getUserData();


    },
	 error:function(){
      console.log("can't connect to Behance api");
    }



  });


function getData(){	
	$.ajax({
		
    url: "https://api.behance.net/v2/users/matiascorea/projects?client_id="+accessToken,
		dataType: "jsonp",
		success:function(dataFromBehance){

			console.log(dataFromBehance.projects[0]);
    

      $(".projectName").append("<p>" +dataFromBehance.projects[0].name + "</p>");
      $(".fields").append("<p>" +dataFromBehance.projects[0].fields+ "</p>");
      $("#img1").append("<p><img src='" +dataFromBehance.projects[0].covers["original"] + "'></p>");
      $("#img2").append("<p><img src='" +dataFromBehance.projects[1].covers["original"] + "'></p>");
      // $("#thumbnail").append("<p><img src='" +dataFromBehance.projects[0].covers[115] + "'></p>");
      $(".likeNum").append("<p>" +dataFromBehance.projects[0].stats["appreciations"]+ "</p>");
      $(".viewNum").append("<p>" +dataFromBehance.projects[0].stats["views"]+ "</p>");



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

      console.log(dataFromBehance.user.display_name);
      console.log(dataFromBehance.user);

      $(".profileimage").append("<p><img src='" +dataFromBehance.user["images"][138] + "'></p>");
      $(".designerName").append("<p>" +dataFromBehance.user.display_name + "</p>");
      
  
    },

    error:function(){
      console.log("can't connect to Behance api");
    }

  });

}