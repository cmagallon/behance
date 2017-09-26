var accessToken = "uLqA16H6sQWfTUFyQij6fsxlkDUSnckN";

$.ajax({
	url: "https://api.behance.net/v2/creativestofollow?client_id=" + accessToken,
	dataType: "jsonp",
	success:function(dataFromBehance){
		var creatives = dataFromBehance.creatives_to_follow;
		for (var i = 0; i < creatives.length; i++) {
			// console.log(creatives[i]);
			$("#behanceUsers").append("<div data-id='"+creatives[i].id+"'class='profile'>"+
				"<div class='profile-pic'>"+ "<img class='img-circle' src='"+
				creatives[i].images[138]+"'/>"+
				"<h2 class='profile-name'>"+creatives[i].display_name+"</h2>"+
				"<h3 class='profile-desc'>"+creatives[i].occupation+"</h3>"
				+"</div>"+"<div class='projects'></div>"+"</div>")
			getProjectData(creatives[i].id);
		};
	},
	error:function(){
		console.log("can't connect to Behance api");
	}
});

function getProjectData(id){
	// console.log(id);
	$.ajax({
		url: "https://www.behance.net/v2/users/"+id+"/projects?client_id=" + accessToken +"&per_page=3",
		dataType: "jsonp",
		success:function(dataFromBehance){
			var projectOne = dataFromBehance.projects;
			for (var a = 0; a < projectOne.length; a++) {
				// console.log(a);
				$('[data-id=' + id + '] .projects').append("<div data-id='"+projectOne[a].id+"' class='profile-project_single'>"+
					"<img class='project-img' src='"+projectOne[a].covers['original']+"' />"+
					"<div class='project-txt'>"+projectOne[a].name+"</div>"
					+"</div>")

				$('[data-id=' + id + '] .profile-project_single').click(function(){
					var projectId = dataFromBehance.projects;
					for (var i = 0; i < projectId.length; i++){
						console.log(projectId[i].id);
					}
				});
				// getProjectId();
			};
			// $('.profile-project_single').click(function(){
			// 	console.log($(this));
				// var projectID = $(this).projectOne[a].id;
				// var projectID = $(this)[0].dataset.projectsid;
				// console.log($(this)[0].dataset.projectsid);
				// console.log(projectID);
				// console.log(dataFromBehance.projects[1].id);
				// console.log(dataFromBehance.projects[2].id);
			// })
		},
		error:function(){
			console.log("can't connect to Behance api");
		}
	});
}

// function getProjectId(){
// 	$.ajax({
// 		url: "https://www.behance.net/v2/users/"+id+"/projects?client_id=" + accessToken,
// 		dataType: "jsonp",
// 		success:function(dataFromBehance){
// 			$('[data-id=' + id + '] .profile-project_single').click(function(){
// 				var projectId = dataFromBehance.projects;
// 				for (var i = 0; i < projectId.length; i++){
// 					console.log(projectId[i].id);
// 				}
// 			});
// 			// console.log(dataFromBehance);
// 			// $('[data-id=' + id + '] .profile-project_single').click(function(){
// 			// 	// console.log($(this));
// 			// })

// 		},
// 		error:function(){
// 			console.log("can't connect to Behance api");
// 		}
// 	});
// }

// function getProjectID(){
	
// }




