const submitButton = document.getElementById("submit");
const inputName = document.getElementById("input1");
const inputEmail = document.getElementById("input2");
const tableBody = document.querySelector("table tbody");
let rowId = 1;
submitButton.addEventListener("click", () => {
  const name = inputName.value.trim();
  const email = inputEmail.value.trim();

  // Basic validation
  if (name === "" || email === "") {
    alert("Both fields are required.");
    return;
  }

  // Create a new row and cells
  const newRow = document.createElement("tr");
  const idCell = document.createElement("td");
  const nameCell = document.createElement("td");
  const emailCell = document.createElement("td");

  // Assign values to the cells
  idCell.textContent = rowId++;
  nameCell.textContent = name;
  emailCell.textContent = email;

  // Append cells to the new row
  newRow.appendChild(idCell);
  newRow.appendChild(nameCell);
  newRow.appendChild(emailCell);

  // Append the new row to the table body
  tableBody.appendChild(newRow);

  // Clear the input fields
  inputName.value = "";
  inputEmail.value = "";
});
