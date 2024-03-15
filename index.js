const form = document.getElementById("form");
const Input = document.getElementById("input");
const Btn = document.getElementById("btn");
const List = document.querySelector(".list");
const filtertodo = document.querySelector(".filter-todo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = Input.value;
  const li = document.createElement("li");
  const CheckBtn = document.createElement("Button");
  const DeleteBtn = document.createElement("Button");
  const div = document.createElement("div");
  const divforbtn = document.createElement("div");
  if (inputValue.trim() != "") {
    List.appendChild(div);
    div.appendChild(li);
    div.appendChild(divforbtn);
    divforbtn.appendChild(CheckBtn);
    divforbtn.appendChild(DeleteBtn);
    div.classList.add("todo-wrapper");
    divforbtn.classList.add("btn-wrapper");
    li.textContent = inputValue;
    CheckBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    DeleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    li.classList.add("list-item");
    CheckBtn.classList.add("check-btn");
    DeleteBtn.classList.add("delete-btn");
    Input.value = "";
    console.log(List);
  } else alert("hech nima kiritilmadi!!!!");
  CheckBtn.addEventListener("click", (e) => {
    li.classList.toggle("check-list");
    div.classList.toggle("completed");
  });
});
List.addEventListener("click", (e) => {
  const item = e.target;
  if (item.classList[0] === "delete-btn") {
    item.parentElement.parentElement.remove();
  } else if (item.classList[1] === "fa-xmark") {
    item.parentElement.parentElement.parentElement.remove();
  }
});

filtertodo.addEventListener("click", (e) => {
  let SectionValue = e.target.value;
  const todos = List.childNodes;
  for (let i = 0; i < todos.length; i++) {
    let todoItem = todos[i];
    console.log(todoItem);
    switch (SectionValue) {
      case "All":
        todoItem.style.display = "flex";
        break;
      case "completed":
        if (todoItem.classList.contains("completed")) {
          todoItem.style.display = "flex";
        } else {
          todoItem.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todoItem.classList.contains("completed")) {
          todoItem.style.display = "flex";
        } else {
          todoItem.style.display = "none";
        }
        break;
    }
  }
});
