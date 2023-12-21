const eventBtn = document.querySelector("#event-btn");

const dayInput = document.querySelector("#day-input");
const monthInput = document.querySelector("#month-input");
const yearInput = document.querySelector("#year-input");

eventBtn.addEventListener("click", () => {
  const currentDate = new Date();

  // Catching info from inputs
  const dayInputValue = parseInt(dayInput.value, 10);
  const monthInputValue = parseInt(monthInput.value, 10) - 1; // Months are zerio-indexed
  const yearInputValue = parseInt(yearInput.value, 10);

  const inputDate = new Date(yearInputValue, monthInputValue, dayInputValue); // Instanciating input date

  // Calculating differences
  const yearDiff = Math.abs(
    currentDate.getFullYear() - inputDate.getFullYear()
  );
  const monthDiff = Math.abs(currentDate.getMonth() - inputDate.getMonth());
  const dayDiff = Math.abs(currentDate.getDate() - inputDate.getDate());
  

  // Printing results
  const yearsResult = document.querySelector("#years-result");
  const monthsResult = document.querySelector("#months-result");
  const daysResult = document.querySelector("#days-result");

  yearsResult.textContent = yearDiff;
  monthsResult.textContent = monthDiff;
  daysResult.textContent = dayDiff;
});
