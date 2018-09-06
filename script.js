  var tasks = {
    "sentiment_analysis" : {
     "instruction" : "Read the text segment and pick the appropriate sentiment",
     "answer_options" : {
        1 : "sad",
       2 : "angry",
       3 : "happy"
      },
      "sources" : [
       [2, "Your customer service sucks"],
       [2, "You suck"],
       [1, "That's unfortunate"],
       [3, "Wow so exciting"]
      ]
    }
  }
  
  var counter = 0;

$( document ).ready(function() {
  
    $("#sentiment_analysis").click(function() {
      $("#task_container").show();
      $("#task_overview").hide();
      
      // Initialize sentiment quiz
      $("#task_instructions").text(tasks["sentiment_analysis"]["instruction"]);      
      set_game("sentiment_analysis", counter);
      
  });

function set_game(var task_name, var source_counter){
  $("#task_source").text(tasks[task_name]["sources"][source_counter][1]; 
}




});

