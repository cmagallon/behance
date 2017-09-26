
var key, profile;



	$.ajax({
				url: "./config.json",
				dataType: "json",
				beforeSend: function(xhr) {
   				if (xhr.overrideMimeType) {
     			xhr.overrideMimeType("application/json");
   				}

			},
				success:function(data){
					console.log("workingTest")
					key = data.APIkey;


					getData();

				},

			error:function(){
				console.log("can't connect to Behance api");
			}



		});
function getData(){



	$.ajax({
		url: "http://www.behance.net/v2/users/linnfritz?client_id="+ key,
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
			},

			error:function(){
				console.log("can't connect to Behance api");
			}



		});

	}


		// $.ajax({
		// 	url: "https://api.behance.net/v2/creativestofollow?client_id="+key,
		// 	dataType: "jsonp",
		// 	success:function(dataFromBehance){
		// 		// console.log(dataFromBehance.creatives_to_follow);
		// 		profile = dataFromBehance.creatives_to_follow;
		// 		console.log(profile);
		// 		for (var i = 0; i < profile.length; i++) {
		// 			designerIDs.push(dataFromBehance.creatives_to_follow[i]);
		//
		//
		// 	},
		//
		// 	error:function(){
		// 		console.log("can't connect to Behance api");
		// 	}
		//
		//
		//
		// });


	function getProfile() {
		$.ajax({
			url: "http://www.behance.net/v2/users/" + profile + "creativestofollow?client_id=" + key,
			dataType: "jsonp",
			success: function(dataFromBehance) {
				for (var i = 0; i < dataFromBehance.creatives_to_follow.length; i++) {
					designerIDs.push(dataFromBehance.creatives_to_follow[i]);

					console.log(profile);
				};

				getProjects();
			},
			error: function() {
				console.log("Something Went Wrong");
			}
		})
	}

function getProjects(){
	// console.log("hello")
}
