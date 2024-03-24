/* this code gets the user input, and defines the demPoint assigning it a value 0
it is a function, inside it we define another function and invoke it.
 */
const checkTheSpeed = document.querySelector("form");

checkTheSpeed.addEventListener("submit", function (event) {
  event.preventDefault();

  let demPoints = 0;
  const output = document.getElementById("output");

  //the below function, will take an input of speed and awards demeritpoints.

  function demeritPoints(speed) {
    // defines a demeriting function
    switch (true) {
      case speed < 70:
        demPoints = 0;
        output.classList.add("safeSide");
        break;
      case speed >= 70:
        output.classList.add("noLongerSafe");
        const howManyFiveKmExcess = Math.floor((speed - 70) / 5); //determines how many times we exceed speed, in 5km
        //the below code iterates over the howManyFiveKmExcess variable, awarding a demerit point to each
        for (i = 0; i < howManyFiveKmExcess; i++) {
          demPoints += 1;
          demPoints;
        }
        break;
    }
    document.getElementById("speed").value = ""; //ensures our input field is clear after every submission
    return demPoints;
  }

  const speed = document.getElementById("speed").value;
  //after defining a speed variable and asigning it a value,  we then call the demeritPoints function as below;
  demeritPoints(speed);

  console.log(`Total demerit points: ${demeritPoints}`); //logs output in the console
  //the condition below is in the outer function and checks the number of demeritPoints, in this case demPoints
  if (demPoints > 12) {
    output.innerText = `Points: ${demPoints}\nLicense suspended`;
  } else if (demPoints < 12) {
    output.innerText = `Derail Points: ${demPoints}`;
  }
});
