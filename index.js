var request = require('request');
var token = "xoxp-442873755396-443061927298-442878087668-caa7a09fc9707a14891cced9b57d44e2";
var channelId = "CD2CAFPU6";
var getUrl = "https://slack.com/api/files.list?token="+token+"&channel="+channelId+"&types=images";

function actualHttpGet(url) {
  return new Promise(resolve => {
      request(url, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body.files[body.files.length-1].permalink_public);  
        var link = body.files[body.files.length-1].permalink_public;
        return link; 
          
    });
  });
}

async function httpGet(url){
    const imageUrl = await actualHttpGet(url);
    return imageUrl;
}

httpGet(getUrl).then((returnCode) => {
    console.log(returnCode);
    require("openurl").open(returnCode);
});