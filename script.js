const input = document.querySelector("input");
const addBtn = document.querySelector("#btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    var nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("d-flex", "justify-content-between");
    p.textContent = text;
    p.classList.add("mb-0");

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    li.classList.add("list-group-item")
    nuevoDiv.appendChild
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");
  let iconBorrar = document.createElement("i");
  iconBorrar.classList.add("bi", "bi-trash");
  deleteBtn.appendChild(iconBorrar)
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}
