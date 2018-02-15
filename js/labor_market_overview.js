 let din;
  let data = [];

  // {
  //   "Nationality": "Saudi",
  //   "Gender": "M",
  //   "Domain":"General Employee",
  //   "Employees":303898,
  //   "Sector":"Civil"
  // }
  function prepData(){    
    for (let i = 0; i < din.length; i++) {
      Object.keys(din[i].Domain).forEach(function(key,index) {
        //console.log(din[i].Nationality, din[i].Gender, din[i].Sector, key, din[i].Domain[key]);
        let tmp = {};
        tmp.Nationality = din[i].Nationality;
        tmp.Gender = din[i].Gender;
        tmp.Domain = key;
        tmp.Employees = din[i].Domain[key];
        tmp.Sector = din[i].Sector;
        data.push(tmp);
      });              
    }
    console.log(data);
    
  }

  function loadJSON(filename) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', filename, false); 
    var mydata = null;
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            mydata = JSON.parse(xobj.responseText);
          }
    };
    xobj.send(null);
    din = mydata;
    prepData()
    return mydata;
  }

      
  loadJSON('../pricesShort.json');
      

    // instantiate d3plus
    var visualization = d3plus.viz()
      .container("#viz")  // container DIV to hold the visualization
      .data(data)  // data to use with the visualization
      .type("tree_map")   // visualization type
      .id(["Sector", "Domain","Gender", "Nationality"])         // key for which our data is unique on
      .size("Employees")      // sizing of blocks
   // .color("medianPrice")
     .color("Employees") 
     .background("#000")
    .labels({"align": "center", "valign": "top","resize":false,"Font":{"size":25}})
    .color({"heatmap":["#55c2f3",
"#47dbe4",
"#5fd5ad",
"#4ee4cf",
"#7dd9a0",
"#4ef1c3",
"#51e4a4",
"#40e18c"]})
    .font({"size":12 })
    .tooltip({
       "share":false,
    })
    


      .draw();  
      // finally, draw the visualization!
