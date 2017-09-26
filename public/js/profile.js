

// var config = require('config');

var key;



	$.ajax({
				url: "./config.json",
				dataType: "json",
				beforeSend: function(xhr) {
   				if (xhr.overrideMimeType) {
     			xhr.overrideMimeType("application/json");
   				}

			},
				success:function(data){
					console.log("working")
					key = data.APIkey;
					console.log(key);

					getData();

				},

			error:function(){
				console.log("can't connect to Behance api");
			}



		});
function getData(){
	console.log(key);




$.ajax({
		url: "http://www.behance.net/v2/users/hugheschri848c/following?client_id="+key,
		dataType: "jsonp",
		success:function(dataFromBehance){
			console.log(dataFromBehance);


		},

		error:function(){
			console.log("can't connect to Behance api");
		}



	});

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
          year: "2003",
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
