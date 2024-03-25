var items = [];
var inputIndex;

function submitItems() {
  if (floatingPassword.value === "") {
    document.getElementById("errorMsg").style.display = "block";
  } else {
    items.push(floatingPassword.value);
    // console.log(items);
    showItems();
    document.getElementById("floatingPassword").value = "";
  }
}

function showItems() {
  showMe.innerHTML = "";
  items.map((products, i) => {
    showMe.innerHTML += `
  <div class="card bg-primary" style="width:18rem;">
    <div class="card-body">
      <h5 class="card-title text-center border-bottom pb-2 fs-3 text-white"><span>Item:</span> ${
        i + 1
      }</h5>
      <h6 class="card-subtitle text-center border-bottom pb-2 fs-4 text-white"><span>Product:</span> ${products}</h6>
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
    items.splice(inputIndex, 1, newItem.value);
    showItems();
  }
}
