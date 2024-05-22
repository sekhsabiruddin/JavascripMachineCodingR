let add = document.getElementById("add");
let sortByName = document.getElementById("sortbyname");
let sortByMarks = document.getElementById("sortbymarks");
let sortByRoll = document.getElementById("sortbyroll");

let userData = [];
add.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let mark = document.getElementById("mark").value;
  let roll = document.getElementById("roll").value;
  userData = [...userData, { id: Date.now(), name, roll, mark }];
  renderTable(userData);

  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("mark").value = "";
});

function renderTable(userData) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = ""; // Clear existing rows

  userData.forEach((user) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    const rollCell = document.createElement("td");
    rollCell.textContent = user.roll;
    row.appendChild(rollCell);

    const markCell = document.createElement("td");
    markCell.textContent = user.mark;
    row.appendChild(markCell);

    tbody.appendChild(row);
  });
}
sortByName.addEventListener("click", () => {
  userData.sort((a, b) => a.name.localeCompare(b.name));
  renderTable(userData);
});
sortByMarks.addEventListener("click", () => {
  userData.sort((a, b) => a.mark - b.mark);
  renderTable(userData);
});
sortByRoll.addEventListener("click", () => {
  userData.sort((a, b) => a.roll - b.roll);
  renderTable(userData);
});
