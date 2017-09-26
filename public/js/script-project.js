var key = "uLqA16H6sQWfTUFyQij6fsxlkDUSnckN";


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

    url: "https://api.behance.net/v2/users/matiascorea/projects?client_id="+key,
		dataType: "jsonp",
		success:function(dataFromBehance){

    console.log(dataFromBehance)


    //get the user id
    //do anther request to get the first 3 projects for that user id
    //loop over the result of that request
    //for each cylce in the loop, append a div with <div class="profile-project_single" data-projectID="id of the project">


      // Pulling data for main project display
      // $(".projectName").append("<p>" +dataFromBehance.projects[0].name + "</p>");
      // $(".project-txt").append("<p>" +dataFromBehance.projects[0].name + "</p>");
      // $(".project-txt2").append("<p>" +dataFromBehance.projects[1].name + "</p>");
      // $(".project-txt3").append("<p>" +dataFromBehance.projects[3].name + "</p>");

      // $("#project1").append("<p><img src='" +dataFromBehance.projects[0].covers[230] + "'></p>");
      // $("#project2").append("<p><img src='" +dataFromBehance.projects[1].covers[230] + "'></p>");
      // $("#project3").append("<p><img src='" +dataFromBehance.projects[3].covers[230] + "'></p>");

      // // Pulling data for project module template

      // $(".fields").append("<p>" +dataFromBehance.projects[0].fields+ "</p>");
      // $("#img1").append("<p><img src='" +dataFromBehance.projects[0].covers["original"] + "'></p>");
      // $(".likeNum").append("<p>" +dataFromBehance.projects[0].stats["appreciations"]+ "</p>");
      // $(".viewNum").append("<p>" +dataFromBehance.projects[0].stats["views"]+ "</p>");



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



      $(".profileimage").append("<p><img src='" +dataFromBehance.user["images"][138] + "'></p>");
      $("#modalProfile").append("<p><img src='" +dataFromBehance.user["images"][138] + "'></p>");

      $(".designerName").append("<p>" +dataFromBehance.user.display_name + "</p>");


    },

    error:function(){
      console.log("can't connect to Behance api");
    }

  });

}
