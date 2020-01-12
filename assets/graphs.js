var c1 = document.getElementById("chart1").getContext('2d');
var yearCountChart = new Chart(c1, {
	// The type of chart we want to create
	type: 'bar',

	// The data for our dataset
	data: {
		labels: ['1999', '2000', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010'],
		datasets: [{
			label: 'CaseMap Will Be Displayed Here',
			fillColor: "rgba(220,220,220,0.0)",
			strokeColor: "rgba(220,220,220,0)",
			pointColor: "rgba(220,220,220,0)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [5, 10, 5, 2, 20, 30, 45, 20, 67, 58, 26]
		}]
	},

	// Configuration options go here
	options: {
   maintainAspectRatio: false,
 }
});


var c2 = document.getElementById("chart2").getContext('2d');
var praticeAreaChart = new Chart(c2, {
	type: 'doughnut',
	data: {
		labels: ["WP", "CPRL", "CA", "ARB"],
		datasets: [{
			label: "No. Of Cases",
			backgroundColor: [],
			data: [2478, 5267, 734, 784, 433]
		}]
	},
	options: {
   maintainAspectRatio: false,
		title: {
			display: true,
			text: 'No Of Case In Each Pratice Area'
		}
	}
});



var costGraphElement = document.getElementById("costGraph").getContext('2d');
var costGraph = new Chart(costGraphElement, {
	type: 'doughnut',
	data: {
		labels: ["True", "False"],
		datasets: [
			{
				backgroundColor: [],
				data: [2478, 5267]
			}
		]
	},
	options: {
    maintainAspectRatio: false,
		title: {
			display: true,
			text: 'Is Cost Involved Or Not'
		}
	}
});

var verdictTypeGraphElement = document.getElementById("verdictTypeGraph").getContext('2d');
var verdictTypeGraph = new Chart(verdictTypeGraphElement, {
	type: 'doughnut',
	data: {
		labels: ["True", "False"],
		datasets: [
			{
				backgroundColor: [],
				data: [2478, 5267]
			}
		]
	},
	options: {
    maintainAspectRatio: false,
		title: {
			display: true,
			text: 'verdictTypeGraph'
		}
	}
});

var overuleGraphElement = document.getElementById("overuleGraph").getContext('2d');
var overuleGraph = new Chart(overuleGraphElement, {
	type: 'doughnut',
	data: {
		labels: ["True", "False"],
		datasets: [
			{
				backgroundColor: [],
				data: [2478, 5267]
			}
		]
	},
	options: {
    maintainAspectRatio: false,
		title: {
			display: true,
			text: 'Is Overuled Or Not'
		}
	}
});

var data = [{
	x: 2017,
	y: 4,
	r: 10
}, {
	x: 2017,
	y: 14,
	r: 12
},
{
	x: 2017,
	y: 10,
	r: 10
},
{
	x: 2016,
	y: 12,
	r: 11
},
{
	x: 2018,
	y: 10,
	r: 17
},
{
	x: 2019,
	y: 4,
	r: 20
},
{
	x: 2018,
	y: 5,
	r: 14
},
{
	x: 2019,
	y: 8,
	r: 10
},
{
	x: 2016,
	y: 12,
	r: 8
}]; // Add data values to array

// var data = [
// 	{
// 		label: ["China"],
// 		backgroundColor: "rgba(255,221,50,0.2)",
// 		borderColor: "rgba(255,221,50,1)",
// 		data: [{
// 			x: 21269017,
// 			y: 5.245,
// 			r: 15
// 		}]
// 	}, {
// 		label: ["Denmark"],
// 		backgroundColor: "rgba(60,186,159,0.2)",
// 		borderColor: "rgba(60,186,159,1)",
// 		data: [{
// 			x: 258702,
// 			y: 7.526,
// 			r: 10
// 		}]
// 	}, {
// 		label: ["Germany"],
// 		backgroundColor: "rgba(0,0,0,0.2)",
// 		borderColor: "#000",
// 		data: [{
// 			x: 3979083,
// 			y: 6.994,
// 			r: 15
// 		}]
// 	}, {
// 		label: ["Japan"],
// 		backgroundColor: "rgba(193,46,12,0.2)",
// 		borderColor: "rgba(193,46,12,1)",
// 		data: [{
// 			x: 4931877,
// 			y: 5.921,
// 			r: 15
// 		}]
// 	}]

var myBubbleChartElemtent = document.getElementById("bubbleChart").getContext('2d');
var myBubbleChart = new Chart(myBubbleChartElemtent, {
	type: 'bubble',
    data: {
      labels: "Africa",
      datasets: [
        {
          label: ["Positive"],
          backgroundColor: "#1d4fb2",
          borderColor: "#1d4fb2",
          data: [{
            x: 2018,
            y: 10,
            r: 15
		  },
		  {
            x: 2019,
            y: 15.245,
            r: 15
          },
		  {
            x: 2019,
            y: 1,
            r: 15
          }]
        }, {
          label: ["Negative"],
          backgroundColor: "#dc3545",
          borderColor: "#dc3545",
          data: [{
            x: 2017,
            y: 7.526,
            r: 10
		  },
		  {
            x: 2018,
            y: 17.526,
            r: 10
          },
		  {
            x: 2019,
            y: 15.245,
            r: 15
          },
		  {
            x: 2017,
            y: 15.245,
            r: 15
          }]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'CaseMap'

      }
    }
});
