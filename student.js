function handleMarksChange(event) {
  //confirm if its a number, if not in a range of 0-9
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault(); //will not pick the value, picking the value is our default
  } else {
    marks.value = Number(event.target.value);
  }
}

function displayGrade() {
  //this checks if there is an input
  if (!isNaN(marks.value)) {
    const grade = getGrade(marks.value);
    document.getElementById("grade").innerText = `Your grade is ${grade}`;
  } else {
    alert("kindly enter a valid number");
  } //this code gets the marks.value inputted, then proceeds to call another function getGrade which converts the value into a grade.
  document.getElementById("input").value = "";
}
function getGrade(marks) {
  switch (true) {
    case marks > 79:
      return "A";
      break;
    case marks >= 60 && marks <= 79:
      return "B";
      break;
    case marks >= 49 && marks <= 59:
      return "C";
      break;
    case marks >= 40 && marks < 50:
      return "D";
      break;
    case marks < 40:
      return "E";
      break;
    default:
      return "E";
  }
}

const marks = document.getElementById("input");
marks.addEventListener("keydown", handleMarksChange);
