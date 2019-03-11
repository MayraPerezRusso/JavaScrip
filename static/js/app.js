// from data.js
var tableData = data;
// YOUR CODE HERE!
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredData);

  var datetime1 = filteredData.map(data1 => data1.datetime);
  var city = filteredData.map(data1 => data1.city);
  var state = filteredData.map(data1 => data1.state);
  var country = filteredData.map(data1 => data1.country);
  var shape = filteredData.map(data1 => data1.shape);
  var durationMinutes = filteredData.map(data1 => data1.durationMinutes);
  var comments = filteredData.map(data1 => data1.comments);
    

  // Finally, add the summary
  for (i = 0; i < datetime1.length; i++) { 
    var row=d3.select(".summary").append("tr");
        row.append("th").text(datetime1[i]);
        row.append("th").text(city[i]);
        row.append("th").text(state[i]);
        row.append("th").text(country[i]);
        row.append("th").text(shape[i]);
        row.append("th").text(durationMinutes[i]);
        row.append("th").text(comments[i]);
    }
});
