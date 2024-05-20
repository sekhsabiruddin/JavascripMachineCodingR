document.addEventListener("DOMContentLoaded", () => {
  let data = [];

  let submit = document.getElementById("submit");
  submit.addEventListener("click", () => {
    let nameInput = document.getElementById("input1");
    let emailInput = document.getElementById("input2");

    let name = nameInput.value;
    let email = emailInput.value;

    data = [...data, { id: Date.now(), name, email }];

    // Clear input fields
    nameInput.value = "";
    emailInput.value = "";

    renderData();
  });

  function renderData() {
    let container = document.getElementById("data-container");
    container.innerHTML = "";
    data.forEach((value) => {
      let item = document.createElement("div");
      item.textContent = `ID: ${value.id}, Name: ${value.name}, Email: ${value.email}`;

      // Create delete button
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        deleteItem(value.id);
      });

      // Create edit button
      let editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        editItem(value.id);
      });

      item.appendChild(deleteButton);
      item.appendChild(editButton);
      container.appendChild(item);
    });
  }

  function deleteItem(id) {
    data = data.filter((item) => item.id !== id);
    renderData();
  }

  function editItem(id) {
    // Find the item in the data array by ID
    let itemToEdit = data.find((item) => item.id === id);
    // Assuming you have a form to edit the data, you can pre-fill the form with the item's details here
    document.getElementById("input1").value = itemToEdit.name;
    document.getElementById("input2").value = itemToEdit.email;
    // You can also implement further logic to handle the editing process
  }
});
