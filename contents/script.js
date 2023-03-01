//Funtion to display the current day using dayjs formatting
$(function () {
    let todaysDate= $("#currentDay");
    let currentDate = dayjs().format("dddd, MMMM D, YYYY, h a.");
    let calendarBlock = $(".time-block");
  
    todaysDate.text(currentDate); //printing the current date to the page
  
   
    $(".saveBtn").on("click", function () {
      let currentBlock = $(this).parent().attr("id");
      let userText = $(this).siblings("textarea").val();
      localStorage.setItem(currentBlock, userText);
    });
    //click based event listen that saves text input within the text areas of the calendar
  
    //funtion to set the tense (past,present,future) of the time blocks
    // by comparing the time block to the current time using dayjs
    function setTense() {
      let presentTime = dayjs().hour();
      calendarBlock.each(function () {
        let blockTime = parseInt($(this).attr("id").split("hour")[1]);
        if (blockTime < presentTime) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
        } else if (blockTime === presentTime) {
          $(this).removeClass("future");
          $(this).removeClass("past");
          $(this).addClass("present");
        } else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        }
      });
    }  
    setTense(); 
    
  });