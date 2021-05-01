const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));






app.get("/",function(req,res){
   
    res.sendFile(__dirname+"/index.html");
//     var cityName = "khulna";
//     var url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&units=metric&appid=4a5cede63aa4e30d65dd90ad3ebd7ebb";
//    // url = "https://openweathermap.org/img/wn/10d@2x.png";
//     https.get(url,function(response){
//         console.log(response.statusMessage);
//         response.on("data",function(data){
//            // console.log(data);
//           const weatheData = JSON.parse(data);
//           console.log(weatheData);
//          // var weatherTemp = weatheData.main.temp;
//          console.log(weatheData.main.temp);
//          console.log(weatheData.weather[0].icon);
//         //  var url2 ="https://openweathermap.org/img/wn/10d@2x.png";
//         // res.write("https://openweathermap.org/img/wn/"+weatheData.weather[0].icon+"@2x.png")
//          res.write("<h1><em>hello the wether in "+ cityName +" is "+weatheData.main.temp +"<\h1><\em>");
//          res.write("<img src="+"http://openweathermap.org/img/wn/"+weatheData.weather[0].icon+"@2x.png>")
//          res.write(" and the weather in "+ cityName +" is "+weatheData.weather[0].description)
//          res.send()
//         })
       
//     })
   
});

app.post("/",function(req,res){
   // console.log(req.body.cityName2);
        var cityName = req.body.cityName;
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&units=metric&appid=4a5cede63aa4e30d65dd90ad3ebd7ebb";
   // url = "https://openweathermap.org/img/wn/10d@2x.png";
    https.get(url,function(response){
        console.log(response.statusMessage);
        response.on("data",function(data){
           // console.log(data);
          const weatheData = JSON.parse(data);
          console.log(weatheData);
         // var weatherTemp = weatheData.main.temp;
         console.log(weatheData.main.temp);
         console.log(weatheData.weather[0].icon);
        //  var url2 ="https://openweathermap.org/img/wn/10d@2x.png";
        // res.write("https://openweathermap.org/img/wn/"+weatheData.weather[0].icon+"@2x.png")
         res.write("<h1><em>hello the wether in "+ cityName +" is "+weatheData.main.temp +"<\h1><\em>");
         res.write("<img src="+"http://openweathermap.org/img/wn/"+weatheData.weather[0].icon+"@2x.png>")
         res.write(" and the weather in "+ cityName +" is "+weatheData.weather[0].description)
         res.send()
        })
       
    })
})

app.listen(3000,function(){
    console.log("server started on port 3000");
   });





