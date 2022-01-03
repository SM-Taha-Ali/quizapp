var student1 = {
    name: "Clixicon",
    seat_no: "CS-137",
    result: "Pass",
    age: 20
}
var student2 = {
    name: "Scentor",
    seat_no: "CS-175",
    result: "Pass",
    age: 19
}
var student3 = {
    name: "Xyzwill",
    seat_no: "CS-176",
    result: "Pass",
    age: 18
}
var student4 = {
    name: "Backsteel",
    seat_no: "CS-196",
    result: "Pass",
    age: 15
}
var student5 = {
    name: "Invisible",
    seat_no: "CS-185",
    result: "Pass",
    age: 17
}

var student6 = {
    name: "Spitzer",
    seat_no: "CS-186",
    result: "Pass",
    age: 17
}
var student7 = {
    name: "Paracha",
    seat_no: "CS-171",
    result: "Fail",
    age: 25
}
var student8 = {
    name: "Convict",
    seat_no: "CS-178",
    result: "Fail",
    age: 24
}
var student9 = {
    name: "Violent",
    seat_no: "CS-177",
    result: "Fail",
    age: 21
}

var student9 = {
    name: "Gunner12",
    seat_no: "CS-197",
    result: "Fail",
    age: 24
}

var students = [student1,student2,student3,student4,student5,student6, student7, student8, student9]

for (var i=0; i<students.length; i++){
    students[i].id = i+1; 
}

var studentData = document.getElementById("studentData");
var tbody_studentData = studentData.getElementsByTagName("tbody")[0];

for (var i=0; i<students.length; i++){
    row = tbody_studentData.insertRow();
    cell1 = row.insertCell()
    cell2 = row.insertCell()
    cell3 = row.insertCell()
    cell4 = row.insertCell()
    cell5 = row.insertCell()
    cell1.innerHTML = students[i].id
    cell2.innerHTML = students[i].name
    cell3.innerHTML = students[i].seat_no
    cell4.innerHTML = students[i].result
    cell5.innerHTML = students[i].age
    if (i % 2 == 0){
        row.setAttribute('class','table-secondary')
    } else if (i % 2 != 0){
        row.setAttribute('class','table-light')
    }
}

var searchInp = document.getElementById("searchInp")
var taBle = document.getElementById("resultBox");
var tBody = taBle.getElementsByTagName("tbody")[0];

var funcCalled = false

function searchResult(){
    var invalidID = true;
    var iD = searchInp.value;
    if (funcCalled == true){
        tBody.innerHTML = "";
    }
    for (var i=0; i<students.length; i++){
        if (iD == students[i].id){
            invalidID = false;
            console.log('inside IF')
            var row = tBody.insertRow();
            var cell1 = row.insertCell();
            var cell2 = row.insertCell();
            var cell3 = row.insertCell();
            cell1.innerHTML = iD;
            cell2.innerHTML = students[i].name;
            cell3.innerHTML = students[i].result;
            if (students[i].result == "Fail"){
                row.setAttribute('class','table-danger')
            } else{
                row.setAttribute('class','table-success')
            }
        }
    }
    
    if (invalidID){
        alert('Invalid ID')
    } else{
        funcCalled = true
    }
}

function clearResult(){
    funcCalled = false
    tBody.innerHTML = "";
}
