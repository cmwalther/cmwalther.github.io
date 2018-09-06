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

function set_game(task_name, source_counter){
  // Set source
  $("#task_source").text(tasks[task_name]["sources"][source_counter][1]);
  $("#task_target").empty();
  
  // Set targets
  for(var key in tasks[task_name]["answer_options"]){
    if(tasks[task_name]["answer_options"].hasOwnProperty(key)){
      // append a button 
      alert(tasks[task_name]["answer_options"][key]);
      
      var new_button = document.createElement("div");
      //new_button.id = key.toString();
      new_button.innerHTML = tasks[task_name]["answer_options"][key];
      
      $("#task_target").append(new_button);
    }
  }
}




});

