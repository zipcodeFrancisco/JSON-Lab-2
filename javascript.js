var request = new XMLHttpRequest();

request.open('GET','https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');

request.onreadystatechange = function () {
    let strresult = request.responseText;
    let obj = JSON.parse(strresult);
    var output = "<table style='width:100%''>";
    output += "<tr> <th>Title</th> <th>Year</th> <th>Company</th> </tr>";

    for( i=0; i < obj["data"].length ; i ++){
     if(obj['data'][i][10] == "Golden Gate Bridge"){
         output += "<tr> <td>" + obj['data'][i][8] + "</td> <td>" +
         obj ['data'][i][9] + "</td> <td>" +
         obj['data'][i][13] + "</td> </tr>";
    }
  }
  output += "</table>";
    document.getElementById("result").innerHTML = output;
}
request.send();
