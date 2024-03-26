var items = [];
var inputIndex;



function submitItems() {
  if (floatingPassword.value === "" || floatingPasswordTwo.value === "") {
    document.getElementById("errorMsg").style.display = "block";
  } else {
    var toDoList = {
        whatToDo: document.getElementById('floatingPassword').value,
        descOf: document.getElementById('floatingPasswordTwo').value
    }
    items.push(toDoList);
    // console.log(items);
    showItems();
    document.getElementById("floatingPassword").value = "";
    document.getElementById("floatingPasswordTwo").value = "";
  }
}

function showItems() {
  // newItem.value = products;
  showMe.innerHTML = "";
  items.map((toDoList, i) => {
    showMe.innerHTML += `
  <div class="card bg-primary" style="width:18rem;">
    <div class="card-body">
      <h5 class="card-title text-center border-bottom pb-2 fs-3 text-white">${toDoList.whatToDo}</h5>
      <p class="card-subtitle text-center border-bottom pb-2 text-white">${toDoList.descOf}</p>
      <button class="btn btn-sm my-3 mx-auto text-white btn-warning w-25 h-25 me-5 ms-4" onclick= "helpEdit(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="Images/icons8-edit-24.png" alt="">
      </button>
      <button class="btn btn-sm my-3 mx-auto btn-danger w-25 h-25" onclick="delETE(${i})"><img src="Images/icons8-delete-30.png" alt="">
      </button>
    </div>
  </div>
        `;
  });
}

function delETE(indexNum) {
  var askQuest = confirm("Are you sure?");
  if (askQuest === true) {
    items.splice(indexNum, 1);
    showItems();
  }
}

function helpEdit() {
  inputIndex = i;
}

function editThis() {
  if (newItem.value === "") {
    document.getElementById("errorMsgIn").style.display = "block";
  } else {
    var toDoList = {
      whatToDo: document.getElementById('newItem').value,
      descOf: document.getElementById('newItem2').value
  }
    items.splice(inputIndex, 1, toDoList);
    showItems();
  }
}
