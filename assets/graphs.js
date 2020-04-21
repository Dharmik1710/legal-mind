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
var c2 = document.getElementById("praticeAreaChart").getContext('2d');
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
	}
});

var overuleGraphElement = document.getElementById("overruleGraph").getContext('2d');
var overruleGraph = new Chart(overuleGraphElement, {
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

var citationChartElemtent = document.getElementById("citationChart").getContext('2d');
var citationChart = new Chart(citationChartElemtent, {
	type: 'horizontalBar',
	data: {
		labels: ['2006', '2007', '2008', '2009', '2010'],
		datasets: [{
			label: 'Verdict Stats Will Be Displayed Here',
			fillColor: "#1d4fb2",
			strokeColor: "#1d4fb2",
			pointColor: "#1d4fb2",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "#1d4fb2",
			// backgroundColor:"#1d4fb2",
			data: [43, 50, 52, 58, 49]
		}]
	},

	// Configuration options go here
	options: {
		maintainAspectRatio: false,
		scales: {
			yAxes: [{ ticks: { mirror: true, padding: -10 } }]
		},
		responsive: true,
	}
});
