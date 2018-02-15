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
      .container("#viz2")  // container DIV to hold the visualization
      .data(datafile)  // data to use with the visualization
      .type("scatter")   // visualization type
      .id("ID")         // key for which our data is unique on
      .x("Salary")      // sizing of blocks
   // .color("medianPrice")
     .y("Start Date") 
    .labels({"align": "center", "valign": "top","resize":false,"Font":{"size":12}})
    .font({"size":12 })
    .size(3)
    .time({"value":"Start Date", "fixed":false})
    .color("Nationality")
    .background("#000")
     .axes({"background": {"color": "#000"}})
    .legend({"size":15, "align":"center","labels":true, "filter":true })

    .color({"scale":[
"#4ee4cf",
        "#bc9af9"

]})
    .ui([{
                                    "label": "Color by",
                                    "method": "color",
                                    "value": ["Nationality", "Gender"]
                                }])
    
     .tooltip(["Nationality", "Gender"])
    .x({"grid": false})
     .y({"grid": false})
      .draw();  
      // finally, draw the visualization!
