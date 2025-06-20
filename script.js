function calculateResults() {
  // Get marks using prompt()
  let english = Number(prompt("Enter marks for English (0–100):"));
  let malayalam = Number(prompt("Enter marks for Malayalam (0–100):"));
  let science = Number(prompt("Enter marks for Science (0–100):"));
  let maths = Number(prompt("Enter marks for Maths (0–100):"));
  let history = Number(prompt("Enter marks for History (0–100):"));

  // Validate inputs (no isNaN, just check number and range)
  if (
    english < 0 || english > 100 ||
    malayalam < 0 || malayalam > 100 ||
    science < 0 || science > 100 ||
    maths < 0 || maths > 100 ||
    history < 0 || history > 100
  ) {
    alert("❌ Invalid input. Please enter numbers between 0 and 100.");
    return;
  }

  // Calculate total and average
  let total = english + malayalam + science + maths + history;
  let average = total / 5;

  // Grade logic
  let grade;
  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Display result
  alert(
    `✅ Total Marks: ${total}\n` +
    `📊 Average Marks: ${average.toFixed(2)}\n` +
    `🏆 Grade: ${grade}`
  );
}
