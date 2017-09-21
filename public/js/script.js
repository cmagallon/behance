var accessToken = "uLqA16H6sQWfTUFyQij6fsxlkDUSnckN";

$.ajax({
		url: "https://api.behance.net/v2/creativestofollow?client_id=uLqA16H6sQWfTUFyQij6fsxlkDUSnckN",
		dataType: "jsonp",
		success:function(dataFromBehance){
			console.log(dataFromBehance);


		},

		error:function(){
			console.log("can't connect to Behance api");
		}



	});

// Code for popup profile

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var projectModal = document.getElementById("modalProfile");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
projectModal.onclick = function() {
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

