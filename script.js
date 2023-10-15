let container = document.querySelector(".items");
let tbody=document.querySelector("tbody");
let add = document.querySelector("button");
add.addEventListener("click", () => {
  let id = prompt("Enter Employee ID"),
    name = prompt("Enter Employee name"),
    age = prompt("Enter Employee age"),
    department = prompt("Enter Employee Department"),
    salary = prompt("Enter Employee Salary");
  let tr = document.createElement("tr");
  tr.innerHTML = ` <td>${id}</td>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${department}</td>
                    <td>${salary}</td>`;
  tbody.appendChild(tr);
});

let search = document.querySelector("input");
search.addEventListener("input", () => {
  let items = document.querySelectorAll(".items tbody tr");
  let arrayOfDivs = Array.from(items);
  console.log(items);
  for (let i = 0; i < items.length; i++) {
    let filter = items[i].children[1].innerText;
    if (filter.toLowerCase().startsWith(search.value.toLowerCase())) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
});