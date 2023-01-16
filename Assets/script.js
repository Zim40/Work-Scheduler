$(function () {

  // Displays time  below header
  // ============================
  window.onload = titleClock;
  function titleClock() {
    var timeTitle = document.querySelector("#currentDay");
    timeTitle.innerText = dayjs().format("MMMM D YYYY - HH:mm a");
    setInterval(titleClock, 60000);
  }

  function handleSave() {
    let buttons = document.querySelectorAll(".saveBtn");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        let textInput = document.querySelectorAll(".description");

        localStorage.setItem("Key" + i, textInput[i].value);
      });
    }
    
  }
  handleSave();

  // Calls the saved user input and replaces the contents in the respective containers they were written in.
  // window.addEventListener("load", function () {
    var textInput = document.querySelectorAll(".description");
    for (var i=0; i < textInput.length; i++) {
      var savedText = localStorage.getItem("Key" + i);
      if (savedText) {
        textInput[i].value = savedText;
      }
    }
  });

  // Added classes to each div depending if dayjs is in the past present or future=================================
  setInterval(bgChange, 3600000);
  function bgChange () {
    var now = dayjs();
    var items = document.querySelectorAll(".time-block");
    console.log("bgchange");

    // Compare the current hour with dayjs()======================
    items.forEach(item => {
      if (item.dataset.time === now.format('HH')) {
        item.classList.add('present');
        item.classList.remove('future');
        item.classList.remove('past');
      }else if(item.dataset.time > now.format('HH')) {
        item.classList.add('future');
        item.classList.remove('present');
        item.classList.remove('past');
      }else{
        item.classList.add('past');
        item.classList.remove('future');
        item.classList.remove('present');
      }
    
    }); 
  }  
  bgChange();



