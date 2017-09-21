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



	// });

	$.ajax({

			url: "http://www.behance.net/v2/users/linnfritz?client_id="+ accessToken,
			dataType: "jsonp",
			success:function(dataFromBehance){
				console.log(dataFromBehance);
				$("#user-name").append(dataFromBehance.user.display_name);
				$("#display-pic").append("<img  src='"+dataFromBehance.user.images[230]+"'>");
				// $("#user_name").append(dataFromBehance.user.display_name);

			},

			error:function(){
				console.log("can't connect to Behance api");
			}





		});
