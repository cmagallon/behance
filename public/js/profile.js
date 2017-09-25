var accessToken = "uLqA16H6sQWfTUFyQij6fsxlkDUSnckN";
var accessToken2 = "gY1coRUiyVCbz5vGOQI9RuBShbPrslfB";

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
		url: "http://www.behance.net/v2/users/linnfritz?client_id="+ accessToken2,
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
          ySales: 1895,
          yExpenses: 10,
          yProfit: 1507
        }, {
          year: "2008",
          Sales: 129,
          Expenses: 713,
          Profit: 1064
        }, {
          year: "1994",
          Sales: 564,
          Expenses: 803,
          profit: 473
        }, {
          year: "2007",
          Sales: 336,
          Expenses: 1459,
          Profit: 889
        }, {
          year: "2011",
          Sales: 513,
          Expenses: 763,
          Profit: 692
        }]




        google.charts.load('current', {'packages':['corechart']});

        google.charts.setOnLoadCallback(drawChart);

        function drawChart(){

        	var data = new google.visualization.DataTable();
        	data.addColumn('string','Year');
        	data.addColumn('number','Views');
        	data.addColumn('number','Likes');
        	data.addColumn('number','Projects');


        	for (var i = 0; i < array.length; i++) {
        		data.addRow([
        			array[i].Year,
        			array[i].Sales,
        			array[i].Expenses,
        			array[i].Profit
        			])
        	}


        	var options ={
        		title:'Data',
        		bars: 'horizontal',
        		animation: {
        			startup: true,
        			duration: 1000,
        			easing: 'out'
        		},
        		width: 400,
        		height: 300,
                backgroundColor: "#4771C8"

        	}

        	var chart = new google.visualization.BarChart(document.getElementById('chart'));
        	chart.draw(data, options);

        }
