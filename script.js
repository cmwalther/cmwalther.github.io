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
      ],
      "avg_errors" : 0.2,
      "avg_time" : 12.8,
    }
  }
  
  var counter = 0;
  var correct_answer_count = 0;

$( document ).ready(function() {
  
  $("#sentiment_analysis").click(function() {
      $("#task_container").show();
      $("#task_overview").hide();
      
      // Initialize sentiment quiz
      $("#task_instructions").text(tasks["sentiment_analysis"]["instruction"]);      
      set_game("sentiment_analysis", counter);
      
  });
  
  $("#reset").click(function() {
      counter = 0;
      correct_answer_count = 0;
      $("#task_results").hide();
      $("#task_overview").show();
      
  });
  
function evaluate_game(task_name) {
  $("#task_container").hide();
  $("#task_results").show();
  
  $("#task_results_errors").text(tasks[task_name]["sources"].length - correct_answer_count);
  $("#task_results_time").text(15);
  $("#task_results_avg_errors").text(tasks[task_name]["avg_errors"]);
  $("#task_results_avg_time").text(tasks[task_name]["avg_time"]);

}
  
function evaluate_answer(task_name, source_counter, answer_key){
  // check if answer key matches the current question (source_counter)
  if(tasks[task_name]["sources"][source_counter][0] == answer_key){
    correct_answer_count += 1;
    console.log("correct key for this source: ");
    console.log(tasks[task_name]["sources"][source_counter][0])
    console.log("selected key: ");
    console.log(answer_key);
    console.log("correct");
  } else {
    console.log("correct key for this source: ");
    console.log(tasks[task_name]["sources"][source_counter][0])
    console.log("selected key: ");
    console.log(answer_key);
    console.log("false");
  }
}

function set_game(task_name, source_counter){
  if(source_counter < tasks[task_name]["sources"].length){ 
  
    // Set source
    $("#task_source").text(tasks[task_name]["sources"][source_counter][1]);
    $("#task_target").empty();
  
    // Set targets
    for(var key in tasks[task_name]["answer_options"]){
      if(tasks[task_name]["answer_options"].hasOwnProperty(key)){
     
        // append a button       
       var new_button = document.createElement("div");
       new_button.innerHTML = tasks[task_name]["answer_options"][key];
       new_button.classList.add("button");
       new_button.addEventListener('click', function(task_name, source_counter, key){
          return function() {
            evaluate_answer(task_name, source_counter, key);
            source_counter += 1;
            set_game(task_name, source_counter);
          };
       });
      
        $("#task_target").append(new_button);
       }
     } 
  } else {
    evaluate_game(task_name);
  }
}




});

