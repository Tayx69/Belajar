function addingList() {
  const inputValue = document.querySelector("#input").value;
  const list = document.querySelector("#list");
  const li = document.createElement("li");

  if (inputValue === "") {
    const warningOutput = document.querySelector("#warning-text");

    warningOutput.innerHTML = "";
    const warningText = document.createElement("p");
    warningText.textContent = "Type Something First.";
    warningText.className = "warning-text";
    warningOutput.append(warningText);
    return;
  }

  li.textContent = inputValue;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";
  deleteButton.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteButton);
  list.appendChild(li);

  input.value = "";
  document.querySelector("#warning-text").innerHTML = "";
}
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addingList();
  }
});
