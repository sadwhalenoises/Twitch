$("document").ready(function(){


  var table = $("#box");
  var streams = ["freecodecamp", "ESL_SC2", "TSM_Dyrus", "Day9tv", "xQcOW", "tsm_viss", "DreamHackHS"];
  var API = "https://wind-bow.glitch.me/twitch-api/channels/";
  var API2 = "https://wind-bow.glitch.me/twitch-api/streams/";
  
  
  function loopArray(){
    streams.forEach(function(stream){
      function makeAPICall(){
        $.getJSON(API2 + stream, function(k){
          $.getJSON(API + stream, function (data){
            if (k.stream === null){
              table.append("<tr class = 'offline'>" + "<th>" + "<a href=" + data.url + "> <img src=" + data.logo + "></a>" + "</th>" + "<th>" + data.name + "</th>" + "<th>" + data.game + "</th>" + "<a href=" + data.url + "><th>" + data.name + " is Offline</th></a></tr>")
            }else{
              table.append("<tr class = 'online'>" + "<th>" + "<a href=" + data.url + "> <img src=" + data.logo + "></a>" + "</th>" + "<th>" + data.name + "</th>" + "<th>" + data.game + "</th>" + "<th>" + data.name + " is Online</th></tr>")
            }
          })
        })
      }
      makeAPICall();
    })
  }

loopArray();
  
  });

  
   