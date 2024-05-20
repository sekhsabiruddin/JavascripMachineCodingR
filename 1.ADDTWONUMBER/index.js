document.addEventListener("DOMContentLoaded", () => {
  let add = document.getElementById("add");
  add.addEventListener("click", () => {
    let value1 = document.getElementById("num1").value;
    let value2 = document.getElementById("num2").value;
    let resultHtml = document.getElementById("result");
    let result = parseInt(value1) + parseInt(value2);
    resultHtml.innerHTML = `Total add is ${result}`;
    document.getElementById("num1").value = ""; // Clear the input fields
    document.getElementById("num2").value = ""; // Clear the input fields
  });
});
