$.ajax({
	url: "./config.json",
	dataType: "json",
	beforeSend: function(xhr) {
	if (xhr.overrideMimeType) {
	xhr.overrideMimeType("application/json");
	}
},
	success:function(data){
		key = data.APIkey;


		getData();

	},
error:function(){
	console.log("can't connect to Behance api");
}

});

function getData(){
	$.ajax({
		url: "https://api.behance.net/v2/creativestofollow?client_id=" + key,
		dataType: "jsonp",
		success:function(dataFromBehance){
			var creatives = dataFromBehance.creatives_to_follow;
			for (var i = 0; i < creatives.length; i++) {
				// console.log(creatives[i]);
				$("#behanceUsers").append("<div data-id='"+creatives[i].id+"'class='profile'>"+
					"<div data-id="+creatives[i].id+" class='profile-pic'>"+ "<img class='img-circle' src='"+
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
}

function getProjectData(id){
	// console.log(id);
	$.ajax({
		url: "https://www.behance.net/v2/users/"+id+"/projects?client_id=" + key +"&per_page=3",
		dataType: "jsonp",
		success:function(dataFromBehance){
			var projectOne = dataFromBehance.projects;
			for (var a = 0; a < projectOne.length; a++) {
				// console.log(a);
				$('[data-id=' + id + '] .projects').append("<div data-id='"+projectOne[a].id+"' class='profile-project_single'>"+
					"<img class='project-img' src='"+projectOne[a].covers[202]+"' />"+
					"<div class='project-txt'>"+projectOne[a].name+"</div>"
					+"</div>")
			};
		},
		error:function(){
			console.log("can't connect to Behance api");
		}
	});
}

$(document).on('click', '.profile-project_single', function(e) {
	// console.log($(this)[0].dataset.id);
		var projectId = $(this)[0].dataset.id;
		console.log(projectId);

		$.ajax({

		url: "https://api.behance.net/v2/projects/"+ projectId +"?api_key=" + key,
		dataType: "jsonp",
		success:function(dataFromBehance){
			console.log(dataFromBehance);

			var projectName = dataFromBehance.project.name;
			console.log(projectName);
			var fields = dataFromBehance.project.fields;
			console.log(fields);
			var viewNum = dataFromBehance.project.stats.views;
			console.log(viewNum);
			var likeNum = dataFromBehance.project.stats.appreciations;
			console.log(likeNum);
			var projectImage = dataFromBehance.project.covers['original'];
			console.log(projectImage);


			// Code for popup profile

	// Get the modal
		var modal = document.getElementById('projectModal');
		modal.style.display = "block";

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	var span = document.getElementsByClassName("closeProject")[0];
	span.onclick = function() {

	    modal.style.display = "none";
	    $("#project-name").empty("<p>" +dataFromBehance.project.name + "</p>");
	    $("#fields").empty("<p>" +dataFromBehance.project.fields + "</p>");
	    $("#description").empty("<p>" +dataFromBehance.project.description + "</p>");
		$("#view-num").empty("<p>" +dataFromBehance.project.stats.views + "</p>");
		$("#like-num").empty("<p>" +dataFromBehance.project.stats.appreciations + "</p>");
		$("#img1").empty("<p><img src='" +dataFromBehance.project.covers["original"] + "'></p>");



	},

	$("#project-name").append("<p>" +dataFromBehance.project.name + "</p>");
	$("#fields").append("<p>" +dataFromBehance.project.fields + "</p>");
	$("#description").append("<p>" +dataFromBehance.project.description + "</p>");
	$("#view-num").append("<p>" +dataFromBehance.project.stats.views + "</p>");
	$("#like-num").append("<p>" +dataFromBehance.project.stats.appreciations + "</p>");
	$("#img1").append("<p><img src='" +dataFromBehance.project.covers["original"] + "'></p>");



		},
		error:function(){
			console.log("can't connect to Behance api");
		}
	});

});

// When the user clicks on <span> (x), close the modal



// Click function to grab data from clicked element

$(document).on('click', '.profile-pic', function(e) {
    // console.log($(this)[0].dataset.id);
    var profileID = $(this)[0].dataset.id;
    console.log(profileID);

	$.ajax({

	url: "http://www.behance.net/v2/users/"+ profileID + "?client_id=" + key,
	dataType: "jsonp",
	success:function(dataFromBehance){
		console.log(dataFromBehance);

		$(".user-name").append(dataFromBehance.user.display_name);
		$(".display-pic").append("<img  src='"+dataFromBehance.user.images[230]+"'>");
		$(".feilds").append(dataFromBehance.user.fields[2]);
		$(".views-number").append(dataFromBehance.user.stats.views);
		$(".likes-number").append(dataFromBehance.user.stats.appreciations);
		$(".occupation").append(dataFromBehance.user.occupation);
		$(".location").append(dataFromBehance.user.location);
		$(".company").append(dataFromBehance.user.company);
		$(".website").append(dataFromBehance.user.website);

		var array = [

        	{

          Followers: dataFromBehance.user.stats.followers,
		  Following: dataFromBehance.user.stats.following


        }]




        google.charts.load('current', {'packages':['corechart']});

        google.charts.setOnLoadCallback(drawChart);

        function drawChart(){

        	var data = new google.visualization.DataTable();
        	data.addColumn('string','Year');
        	data.addColumn('number','Followers');
        	data.addColumn('number','Following');




        	for (var i = 0; i < array.length; i++) {
        		data.addRow([
        			array[i].Year,
        			array[i].Followers,
        			array[i].Following

        			])
        	}


        	var options ={
        		title:'Followers and Following',
        		bars: 'horizontal',
						colors: ['#2c3e50','#e74c3c'],
						textStyle: {
	 					color: ['#FFFFFF']
 						},
						gridlines: {
        		color: '#FFFFFF'
      			},
        		animation: {
        			startup: true,
        			duration: 1000,
        			easing: 'out'
        		},
				titleTextStyle: {
			    color: '#FFFFFF',
				size: '24px'
			},
				chartArea: {width: '50%'},
        		width: 500,
        		height: 400,
            backgroundColor: "#4771C8"

        	}

        	var chart = new google.visualization.BarChart(document.getElementById('chart'));
        	chart.draw(data, options);

        }

		// Code for popup profile

// Get the modal
	var modalProfile = document.getElementById('profileModal');
	modalProfile.style.display = "block";

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalProfile) {
        modalProfile.style.display = "none";
		$(".user-name").empty();
		$(".display-pic").empty();
		$(".feilds").empty();
		$(".views-number").empty();
		$(".likes-number").empty();
		$(".occupation").empty();
		$(".location").empty();
		$(".company").empty();
		$(".website").empty();
    }
}

var spanref = $("#closeProject");
spanref.onclick = function() {

    modalProfile.style.display = "none";
    // $("#project-name").empty("<p>" +dataFromBehance.project.name + "</p>");
    // $("#fields").empty("<p>" +dataFromBehance.project.fields + "</p>");
	// $("#view-num").empty("<p>" +dataFromBehance.project.stats.views + "</p>");
	// $("#like-num").empty("<p>" +dataFromBehance.project.stats.appreciations + "</p>");
	// $("#img1").empty("<p><img src='" +dataFromBehance.project.covers["original"] + "'></p>");
console.log("jo");





}

// $("#project-name").append("<p>" +dataFromBehance.project.name + "</p>");
// $("#fields").append("<p>" +dataFromBehance.project.fields + "</p>");
// $("#view-num").append("<p>" +dataFromBehance.project.stats.views + "</p>");
// $("#like-num").append("<p>" +dataFromBehance.project.stats.appreciations + "</p>");
// $("#img1").append("<p><img src='" +dataFromBehance.project.covers["original"] + "'></p>");


	},
	error:function(){
		console.log("can't connect to Behance api");
	}
});

});
