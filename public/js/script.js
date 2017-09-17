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

	$.ajax({

			url: "http://www.behance.net/v2/users/designerpreis/appreciations?client_id="+ accessToken,
			dataType: "jsonp",
			success:function(dataFromBehance){
				console.log(dataFromBehance);


			},

			error:function(){
				console.log("can't connect to Behance api");
			}



		});
