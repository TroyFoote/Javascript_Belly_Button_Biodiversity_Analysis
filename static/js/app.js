// using D3 read in the data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
let data = d3.json(url).then(function(data) {
  console.log(data.samples);  
});

let data_sample = (data.samples);

let sample_values = [];
let otu_ids = [];
let otu_labels = [];

for (let i = 0; i <data_sample.length; i++) {
  row = data_sample[i];
  sample_values.push(row.sample_values);
  otu_ids.push(row.otu_ids);
  otu_labels.push(row.otu_labels);
};

// Create a horizontal bar chart with a dropdown menu to display
// the top 10 OTUs found in that individual.

function init() {
  let data = [{
    values: sample_values,
    labels: otu_ids,
    type: "bar",
    orientation:'h'
    }];
  
  
  
  
  
  let dropdownMenu = d3.select("#selDataset");
}