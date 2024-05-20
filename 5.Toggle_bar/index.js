const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
  let box = document.querySelector(".box");
  if (box.classList.contains("green")) {
    box.classList.remove("green");
    box.classList.add("yellow");
    console.log("yellow");
  } else if (box.classList.contains("yellow")) {
    box.classList.remove("yellow");
    box.classList.add("green");
    console.log("green");
  } else {
    box.classList.add("green");
    console.log("green");
  }
});
