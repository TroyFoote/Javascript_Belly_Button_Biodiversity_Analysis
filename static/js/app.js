// using D3 read in the data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.jso";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Create a horizontal bar chart with a dropdown menu to display
// the top 10 OTUs found in that individual.

