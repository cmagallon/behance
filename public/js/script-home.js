var accessToken = "kPjbO9ychhcXHOcnuBdYaUtWryHz5a5G";

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
	console.log(id);
	$.ajax({
		url: "https://www.behance.net/v2/users/"+id+"/projects?client_id=" + accessToken +"&per_page=3",
		dataType: "jsonp",
		success:function(dataFromBehance){
			var projectOne = dataFromBehance.projects;
			for (var a = 0; a < projectOne.length; a++) {
				// console.log(a);
				$('[data-id=' + id + '] .projects').append("<div class='profile-project_single'>"+
					"<img class='project-img first' src='"+projectOne[a].covers['original']+"' />"+
					"<div class='project-txt one'>"+projectOne[a].name+"</div>"
					+"</div>")
			};
		},
		error:function(){
			console.log("can't connect to Behance api");
		}
	});
}
