var accessToken;


  $.ajax({
    url: "./config.json",
    dataType: "json",
    beforeSend: function(xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }

    },
	success: function(data){
       accessToken = data.accessToken;
       getData();
        

    },
    error: function(){
        console.log("Something went wrong")
    }
})


function getData(){	
	$.ajax({
		url: "https://api.behance.net/v2/creativestofollow?client_id="+accessToken,
		dataType: "jsonp",
		success:function(dataFromBehance){
			console.log(dataFromBehance);


		},

		error:function(){
			console.log("can't connect to Behance api");
		}



	});

}

