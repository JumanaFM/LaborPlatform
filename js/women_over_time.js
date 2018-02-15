 function loadJSON(filename) {
                                var xobj = new XMLHttpRequest();
                                xobj.overrideMimeType("application/json");
                                xobj.open('GET', filename, false); // Replace 'my_data' with the path to your file
                                var mydata = null;
                                xobj.onreadystatechange = function() {
                                    if (xobj.readyState == 4 && xobj.status == "200") mydata = JSON.parse(xobj.responseText);
                                };
                                xobj.send(null);
                                return mydata;
                            }
                            var datafile = loadJSON('jobsOverTime.json');
console.log(datafile)
      

    // instantiate d3plus
    var visualization = d3plus.viz()
      .container("#viz3")  
      .data(datafile)  
      .type("line")  
      .id("ID")         
      .x("Salary")     
   // .color("medianPrice")
  .color({ "mute" : "Male" })
     .y("Start Date") 
    .labels({"align": "center", "valign": "top","resize":false,"Font":{"size":12}})
    .font({"size":12 })
    .size(3)
    .time({"value":"Start Date", "size":2})
    .color("Gender")
    .background("#000")
     .axes({"background": {"color": "#000"}})
    .legend(false)
    .color({"scale":["#bc9af9"]})
        .tooltip(["Nationality", "Gender"])
    .x({"grid": false})
     .y({"grid": false})
      .draw();  
   