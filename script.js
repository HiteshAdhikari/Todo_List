const btn = document.getElementById("btn");
const text = document.getElementById("text");
const add = document.querySelector(".add_items");
let btn_1 = document.querySelector(".btn-1");
let form_submit = document.getElementById("form_submit");

const objStr = localStorage.getItem("data");
if (objStr != null) {
  userInfo = JSON.parse(objStr);
} else {
  userInfo = [];
}

displayInfo(userInfo);
form_submit.addEventListener("submit", () => {
  let value = text.value;
  userInfo.unshift({ name: value });
  saveData(userInfo);
  displayInfo(userInfo);
  text.value = null;
});

function saveData(userInfo) {
  const str = JSON.stringify(userInfo);
  localStorage.setItem("data", str);
}

function displayInfo() {
  let ihtml = " ";
  userInfo.forEach((user, i) => {
    ihtml += `<div class=" items">
                    <p>${user.name}</p>
                  <button class="btn_1" onclick="deleteInfo(${i})"><img src="Image/delete.svg" alt=""></button>
                </div>`;
    add.innerHTML = ihtml;
  });
}

const deleteInfo = (id) => {
  userInfo.splice(id, 1);
  if (userInfo == "") {
    ihtml = `<div class="extra-item">
                  </div>`;
    add.innerHTML = ihtml;
    saveData(userInfo);
    displayInfo(userInfo);
  } else {
    saveData(userInfo);
    displayInfo(userInfo);
  }
};
