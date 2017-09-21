var accessToken = "uLqA16H6sQWfTUFyQij6fsxlkDUSnckN";

// $.ajax({
// 		url: "https://api.behance.net/v2/creativestofollow?client_id=uLqA16H6sQWfTUFyQij6fsxlkDUSnckN",
// 		dataType: "jsonp",
// 		success:function(dataFromBehance){
// 			console.log(dataFromBehance);
//
//
// 		},
//
// 		error:function(){
// 			console.log("can't connect to Behance api");
// 		}



<<<<<<< HEAD
	// });
=======
// Code for popup profile
>>>>>>> master

// Get the modal
var modal = document.getElementById('myModal');

<<<<<<< HEAD
			url: "http://www.behance.net/v2/users/linnfritz?client_id="+ accessToken,
			dataType: "jsonp",
			success:function(dataFromBehance){
				console.log(dataFromBehance);
				$("#user-name").append(dataFromBehance.user.display_name);
				$("#display-pic").append("<img  src='"+dataFromBehance.user.images[230]+"'>");
				$("#feilds").append(dataFromBehance.user.fields[2]);
				$("#views").append(dataFromBehance.user.stats.views);
				$("#likes").append(dataFromBehance.user.stats.appreciations);
				$("#occupation").append(dataFromBehance.user.occupation);
				$("#location").append(dataFromBehance.user.location);
=======
// Get the button that opens the modal
var profileModal = document.getElementById("modalProfile");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
>>>>>>> master

// When the user clicks on the button, open the modal 
profileModal.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

<<<<<<< HEAD




		});
=======
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
>>>>>>> master
