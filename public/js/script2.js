
var accessToken;


$.ajax({
    url: "/./config.json",
    dataType: "json",
    beforeSend: function(xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }
    },
	success: function(data){
    console.log(data);
       // accessToken = data.accessToken;
        

    },
    error: function(error){
      console.log(error);
        console.log("Something went wrong")
    }
})
