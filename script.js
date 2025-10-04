


let users = JSON.parse(localStorage.getItem('users')) ||[];
const nameInput = document.getElementById('nameInput');
const addBtn = document.getElementById('addBtn');
const tableBody = document.getElementById('tableBody');
let editIndex = null;


// Save to localStorage
function saveToLocalStorage() {
  localStorage.setItem('users', JSON.stringify(users))
}


addBtn.addEventListener('click', () => {
    const name = nameInput.value.trim()
    if(name === "") return alert("please enter the name")

        if(editIndex === null){

            //create
            users.push(name)
        } else{

            //update
            users[editIndex] = name
            editIndex = null
            addBtn.textContent = "Add"

        }

        nameInput.value = '';
  renderTable();
})


function renderTable(){
    tableBody.innerHTML = " "
    users.forEach((user, index) => {
        const row = `
        
        <tr>
        <td>${index + 1}</td>
         <td>${user}</td>
           <td>
          <button class="edit" onclick="editUser(${index})">Edit</button>
          <button class="delete" onclick="deleteUser(${index})">Delete</button>
        </td>
        
        
        </tr>
        
        `

         tableBody.innerHTML += row
    })
}


function editUser(){
     nameInput.value = users[index];
  editIndex = index;
  addBtn.textContent = 'Update'
  
}

function deleteUser(index) {
  users.splice(index, 1);
  saveToLocalStorage()
  renderTable();
}

window.editUser = editUser;
window.deleteUser = deleteUser;


renderTable()
