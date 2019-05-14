var url = "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/app-ewslc/service/MainService/incoming_webhook/webhook";
fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    
   // console.log(data.CurrentDate.$date - );
  var todaysHours = (Date.now() / 3600000) - (data.CurrentDate.$date.$numberLong / 3600000);
 
   
   console.log(todaysHours);
  }).catch(function() {
    console.log("Booo");
  });