var accessToken = "uLqA16H6sQWfTUFyQij6fsxlkDUSnckN";

$.ajax({
		url: "https://api.behance.net/v2/creativestofollow?client_id=uLqA16H6sQWfTUFyQij6fsxlkDUSnckN",
		dataType: "jsonp",
		success:function(dataFromBehance){
			console.log(dataFromBehance);
            projectId();
		},

		error:function(){
			console.log("can't connect to Behance api");
		}



	});

function projectId(){
	$.ajax({
		
    url: "https://api.behance.net/v2/users/matiascorea/projects?client_id="+accessToken,
		dataType: "jsonp",
		success:function(dataFromBehance){

			
			console.log(dataFromBehance);
			console.log(dataFromBehance.projects[0].id);


$('.profile-project_single').click(function(){
	var projectID = $(this)[0].dataset.projectid;
	console.log($(this)[0].dataset.projectid);
	// var windowChoice = $(this);
	// console.log(windowChoice);


})

}
})
}

// Code for project popup

// Get the modal
var modalProject = document.getElementById("myModalProject");

// Get the button that opens the modal
var btnProject = document.getElementById("project1");

// Get the <span> element that closes the modal
var spanProject = document.getElementsByClassName("closeProject")[0];

// When the user clicks on the button, open the modal 
btnProject.onclick = function() {
    modalProject.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanProject.onclick = function() {
    modalProject.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalProject) {
        modalProject.style.display = "none";
    }
}

// for (var i = 0; i < dataFromBehance.projects.length; i++) {
//       //           console.log(dataFromBehance.projects[0])
                
                
//             }