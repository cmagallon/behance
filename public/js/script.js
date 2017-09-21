var accessToken = "k881c8hHjZvoOUo53VMkZU8crZAAGMel";

$.ajax({
	url: "https://api.behance.net/v2/creativestofollow?client_id=" + accessToken,
	dataType: "jsonp",
	success:function(dataFromBehance){
		$(".profile-name").append("<p class='profile-name'>" +dataFromBehance.creatives_to_follow[0].display_name+ "</p>");
		$(".profile-desc").append("<p>" +dataFromBehance.creatives_to_follow[0].occupation+ "</p>");
		$(".img-circle").attr("src",dataFromBehance.creatives_to_follow[0].images[276]);
		getProjectData();
		getSecond();
		getThird();
	},
	error:function(){
		console.log("can't connect to Behance api");
	}
});


function getProjectData(){
	$.ajax({
		url: "https://www.behance.net/v2/users/54023/projects?client_id=" + accessToken,
		dataType: "jsonp",
		success:function(dataFromBehance){
			// console.log(dataFromBehance.projects[0].covers[404]);
			// console.log(dataFromBehance.projects[0].name);

			$(".one").append("<p>" +dataFromBehance.projects[0].name+ "</p>");
			$(".first").attr("src", dataFromBehance.projects[0].covers[404]);

		},
		error:function(){
			console.log("can't connect to Behance api");
		}
	});
}

function getSecond(){
	$.ajax({
		url: "https://www.behance.net/v2/users/54023/projects?client_id=" + accessToken,
		dataType: "jsonp",
		success:function(dataFromBehance){
			console.log(dataFromBehance.projects[2].covers[202]);
			console.log(dataFromBehance.projects[2].name);

			$(".two").append("<p>" +dataFromBehance.projects[2].name+ "</p>");
			$(".second").attr("src", dataFromBehance.projects[2].covers[202]);
			
			
		},
		error:function(){
			console.log("can't connect to Behance api");
		}
	});
}

function getThird(){
	$.ajax({
		url: "https://www.behance.net/v2/users/54023/projects?client_id=" + accessToken,
		dataType: "jsonp",
		success:function(dataFromBehance){
			console.log(dataFromBehance.projects[6].covers[202]);
			console.log(dataFromBehance.projects[6].name);

			$(".three").append("<p>" +dataFromBehance.projects[6].name+ "</p>");
			$(".third").attr("src", dataFromBehance.projects[6].covers[202]);
			
			
		},
		error:function(){
			console.log("can't connect to Behance api");
		}
	});
}





// Code for popup profile
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var profileModal = document.getElementById("modalProfile");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
profileModal.onclick = function() {
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