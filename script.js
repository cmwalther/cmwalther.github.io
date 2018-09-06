
$( document ).ready(function() {
  
  alert("document loaded");

  $.("#sentiment_analysis").click(function() {
    $.("#task_container").show();
    $.("#task_overview").hide();
    alert("hi");
  });




  var tasks = {
    "sentiment analysis" : {
     "instruction" : "Read the text segment and pick the appropriate sentiment",
     "answer_options" : {
        1 : "sad",
       2 : "angry",
       3 : "happy"
      }
      "sources" : [
       [2, "Your customer service sucks"]
       [2, "You suck"]
       [1, "That's unfortunate"]
       [3, "Wow so exciting"]
      ]
    }
  });
}
