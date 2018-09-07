  var tasks = {
    "sentiment_analysis" : {
     "instruction" : "Read the text segment and pick the appropriate sentiment!",
     "answer_options" : {
        1 : "sad",
       2 : "angry",
       3 : "happy"
      },
      "sources" : [
       [1, "So I think the Lil Tiger has possibly gotten me sick as well even though I have been taking my vitamins I thought I would be safe. My throat is starting to hurt this isn't going to be good"],
       [3, "Jumping on the band wagon for pax west EXCLUSIVE spray giveaway! Like, retweet and Follow to enter! Winners will be drawn on Monday the 10th live on stream"],
       [1, "On a non universe note, my best friend just got engaged and I’m SO happy for her but also crying inside cause there goes another friend"],
       [2, "How often can you fail without apologies, employ the worst attitudes and morals, offer the least amount of miles per dollar, most pricey awards redemption and never suffer consequences."]
      ],
      "avg_errors" : 0.2,
      "avg_time" : 12.8,
    },
    "content_categorization" : {
     "instruction" : "Read the text segment and pick the appropriate category!",
     "answer_options" : {
        1 : "finance",
       2 : "legal",
       3 : "entertainment",
       4 : "technology",
       5 : "fiction"
      },
      "sources" : [
       [2, "For anyone struggling with Mapp v. Ohio: There once was a woman named Dolly - Who thought no warrant was folly"],
       [2, "Just read a case I am pretty sure we went over at nabita last year"],
       [1, "This just in: The IRS just released guidance on how to handle rule changes around executive compensation deduction after TCJA."],
       [4, "Singularity is fully Docker and OCI compatible but neither of these container formats have the ability to cryptographically sign or validate the runtime container image."]
      ],
      "avg_errors" : 0.2,
      "avg_time" : 12.8,
    },
  }
  
  var counter = 0;
  var correct_answer_count = 0;
  var seconds = 0;

$( document ).ready(function() {
  
  $("#sentiment_analysis").click(function() {
      $("#task_container").show();
      $("#task_overview").hide();
      
      // Initialize sentiment quiz
      $("#task_instructions").text(tasks["sentiment_analysis"]["instruction"]);      
      set_game("sentiment_analysis", counter);
    
      initialize_second_counter();
      
  });
  
   $("#content_categorization").click(function() {
      $("#task_container").show();
      $("#task_overview").hide();
      
      // Initialize sentiment quiz
      $("#task_instructions").text(tasks["content_categorization"]["instruction"]);      
      set_game("content_categorization", counter);
     
       initialize_second_counter();
      
  });
  
  $("#reset").click(function() {
      counter = 0;
      correct_answer_count = 0;
      $("#task_results").hide();
      $("#task_overview").show();
      
  });
  
function  initialize_second_counter(){
  seconds = 0;
  var cancel = setInterval(update_seconds, 100);
}
  
function update_seconds(){
  seconds += 0.1;
  $("#seconds").text(seconds.toFixed(1));
}
  
  
function evaluate_game(task_name) {
  $("#task_container").hide();
  $("#task_results").show();
  
  $("#task_results_errors").text(tasks[task_name]["sources"].length - correct_answer_count);
  $("#task_results_time").text(seconds.toFixed(1));
  $("#task_results_avg_errors").text(tasks[task_name]["avg_errors"]);
  $("#task_results_avg_time").text(tasks[task_name]["avg_time"]);

}
  
function evaluate_answer(task_name, answer_key){
  // check if answer key matches the current question (source_counter)
  if(tasks[task_name]["sources"][counter][0] == answer_key){
    correct_answer_count += 1;
    console.log("correct key for this source: ");
    console.log(tasks[task_name]["sources"][counter][0])
    console.log("selected key: ");
    console.log(answer_key);
    console.log("correct");
  } else {
    console.log("correct key for this source: ");
    console.log(tasks[task_name]["sources"][counter][0])
    console.log("selected key: ");
    console.log(answer_key);
    console.log("false");
  }
}


function set_game(task_name){
  if(counter < tasks[task_name]["sources"].length){ 
  
    // Set source
    $("#task_source").text(tasks[task_name]["sources"][counter][1]);
    $("#task_target").empty();
    $("#current_counter").text(counter);
    $("#total_counter").text(tasks[task_name]["sources"].length);
  
    // Set targets
    for(var key in tasks[task_name]["answer_options"]){
      if(tasks[task_name]["answer_options"].hasOwnProperty(key)){
     
        // append a button       
       var new_button = document.createElement("div");
       new_button.innerHTML = tasks[task_name]["answer_options"][key];
       new_button.classList.add("button");
       new_button.id = key;
       new_button.addEventListener('click', function(){
          evaluate_answer(task_name, new_button.id);
          counter += 1;
          set_game(task_name);
       });
      
        $("#task_target").append(new_button);
       }
     } 
  } else {
    evaluate_game(task_name);
  }
}




});

