let items = [];
let inputIndex;
if(localStorage.itemsOn){
  items = JSON.parse(localStorage.getItem('itemsOn'))
}

function submitItems() {
  let toDoList = {
    whatToDo: document.getElementById("floatingPassword").value,
    descOf: document.getElementById("floatingPasswordTwo").value,
  };
  if (floatingPassword.value === "" || floatingPasswordTwo.value === "") {
    document.getElementById("errorMsg").style.display = "block";
  } else {
    console.log(toDoList);
    items.push(toDoList);
    localStorage.setItem("itemsOn", JSON.stringify(items));
    // console.log(items);
    document.getElementById("floatingPassword").value = "";
    document.getElementById("floatingPasswordTwo").value = "";
    window.location.href = "show.html";
  }
  // localStorage.clear
}

// function showItems() {
//   showMe.innerHTML = "";
//   items.map((toDoList, i) => {
//     showMe.innerHTML += `
//   <div class="card bg-primary" style="width:18rem;">
//     <div class="card-body">
//       <h5 class="card-title text-center border-bottom pb-2 fs-3 text-white">${toDoList.whatToDo}</h5>
//       <p class="card-subtitle text-center border-bottom pb-2 text-white">${toDoList.descOf}</p>
//       <button class="btn btn-sm my-3 mx-auto text-white btn-warning w-25 h-25 me-5 ms-4" onclick= "helpEdit(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="Images/icons8-edit-24.png" alt="">
//       </button>
//       <button class="btn btn-sm my-3 mx-auto btn-danger w-25 h-25" onclick="delETE(${i})"><img src="Images/icons8-delete-30.png" alt="">
//       </button>
//     </div>
//   </div>
//         `;
//   });
// }

// function delETE(indexNum) {
//   let askQuest = confirm("Are you sure?");
//   if (askQuest === true) {
//     items.splice(indexNum, 1);
//     showItems();
//   }
// }

// function helpEdit() {
//   inputIndex = i;
// }

// function editThis() {
//   if (newItem.value === "") {
//     document.getElementById("errorMsgIn").style.display = "block";
//   } else {
//     let toDoList = {
//       whatToDo: document.getElementById("newItem").value,
//       descOf: document.getElementById("newItem2").value,
//     };
//     items.splice(inputIndex, 1, toDoList);
//     showItems();
//   }
// }
