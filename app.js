let firstname;
let lastname;
let age;
function Constructor(name, sname, age) {
    this.firstname = name;
    this.lastname = sname;
    this.age = age
}
// console.log(Constructor)

function addHtmlTableRow(){
    firstname = document.getElementById("firstname").value
    lastname = document.getElementById("lastname").value
    age= document.getElementById("age").value
    let obj = JSON.parse(localStorage.getItem("data"));
    if (obj === null) {
        obj = [];
    }
    let obj1 = new Constructor(firstname,lastname,age);
    // console.log(obj)
    obj.push(obj1)
    localStorage.setItem("data", JSON.stringify(obj))
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("age").value = "";

}
function viewList() {
    window.location.href = "table.html"
}
let obj2 = JSON.parse(localStorage.getItem("data"));
// console.log(obj2)
// data()
function data() { 
    let  table1 = document.getElementById("table")
    table1.innerHTML += `
    <tr>
    <th>s.no</th>
    <th>FirstName</th>
    <th>LastName</th>
    <th>Age</th>
    <td><button onclick="addData()" class=" btn-outline-secondary jsBtn">Add Data</button></td>
    </tr>`
    console.log(table1)
    for (let i = 0; i < obj2.length; i++) {
        // console.log(obj2[i])
        table1.innerHTML += `
        <tr>
         <td>${i + 1}</td>
         <td>${obj2[i].firstname}</td>
         <td>${obj2[i].lastname}</td>
         <td>${obj2[i].age}</td>
         <td><button onclick="remove(${i})" class=" jsBtn">Remove</button></td>
         <td><button onclick="edithtml(${i})" class= "jsBtn">Edit</button></td>
        </tr>`
    }
}
function addData(){
    window.location.href = "index.html"
}
function remove(i) {
    // console.log(i);
        obj2.splice(i, 1);
        localStorage.setItem("data", JSON.stringify(obj2));
        let  table1 = document.getElementById("table")
        table1. innerHTML = "";
    data();
    }
    // let index;
    
function edithtml(i) {
    index = i;
    localStorage.setItem("editData", JSON.stringify(i));
    window.location.href = "index.html"
}
function edit() {
    JSON.parse(localStorage.getItem("editData"));
    obj2;
    document.getElementById("firstname").value = obj2[index].firstname;
    document.getElementById("lastname").value = obj2[index].lastname;
    document.getElementById("age").value = obj2[index].age;

}
function update() {
    let firstname =document.getElementById("firstname").value 
    let lastname = document.getElementById("lastname").value 
    let age = document.getElementById("age").value
    let obj = JSON.parse(localStorage.getItem("data"));
    if(obj === null){
        obj=[]
    }
    console.log(obj)
    let obj1 = new Constructor(firstname,lastname,age)
    obj.splice(index,1,obj1)
    localStorage.setItem("data",JSON.stringify(obj))
    document.getElementById("firstname").value =""
    document.getElementById("lastname").value = ""
    document.getElementById("age").value = ""
    localStorage.removeItem("editData")
    viewList()
    data()

}