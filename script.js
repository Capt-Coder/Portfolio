document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.edu-btn');
    let eduModal = document.getElementById("educationModal");

    buttons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        var clickedButtonId = event.target.id;
        if(clickedButtonId == "10th"){
          eduModal.querySelector('.modal-title').textContent = "10th Grade";
          document.getElementById('instituteName').textContent = "Maharishi Vidya Mandir Senior Secondary School";
          document.getElementById('year').innerHTML = "<b>Year:</b> 2018";
          document.getElementById('grade').innerHTML = "<b>Grade:</b> 85.2%";
      }
        if(clickedButtonId == "12th"){
            eduModal.querySelector('.modal-title').textContent = "12th Grade";
            document.getElementById('instituteName').textContent = "Maharishi Vidya Mandir Senior Secondary School";
            document.getElementById('year').innerHTML = "<b>Year:</b> 2020";
            document.getElementById('grade').innerHTML = "<b>Grade:</b> 88.4%";
        }
        if(clickedButtonId == "ug"){
            eduModal.querySelector('.modal-title').textContent = "Undergraduate";
            document.getElementById('instituteName').textContent = "Sri Ramakrishna Engineering College";
            document.getElementById('year').innerHTML = "<b>Year:</b> 2020-2024 (4 years)";
            document.getElementById('grade').innerHTML = "<b>Grade:</b> 8.32 CGPA";
        }
      });
    });
  });
  