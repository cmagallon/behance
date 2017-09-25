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
		url: "http://www.behance.net/v2/users/linnfritz?client_id="+ accessToken,
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


			},

			error:function(){
				console.log("can't connect to Behance api");
			}



		});

        var array = [

        	{
          year: "2003",
          Views: 1895,
					Followers: 800

        }]




        google.charts.load('current', {'packages':['corechart']});

        google.charts.setOnLoadCallback(drawChart);

        function drawChart(){

        	var data = new google.visualization.DataTable();
        	data.addColumn('string','Year');
        	data.addColumn('number','Views');
        	data.addColumn('number','Followers');




        	for (var i = 0; i < array.length; i++) {
        		data.addRow([
        			array[i].Year,
        			array[i].Views,
        			array[i].Followers

        			])
        	}


        	var options ={
        		title:'Views and Followers',
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
