const datePlaceholder = document.querySelector("#date-of-birth");
console.log(datePlaceholder);
const today = new Date().toISOString().split("T")[0];
datePlaceholder.setAttribute("max", today);
