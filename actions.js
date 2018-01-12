
function viewInfo(){
    var category = document.getElementById("list").value;
    console.log(allStudents[0].studentId);
    console.log(allStudents[0].grade);
    console.log(category)
    if(category == "student"){
        var t ="<table border='1'>";
        t+= "<tr><td>First Name</td>";
        t += "<td>" + 'Last Name' + "</td>";
        t += "<td>" + 'Grade' + "</td>";
        t += "<td>" + 'Student Id' + "</td></tr>";
        for(var i = 0; i<allStudents.length; i++) {
            var stuFirst = allStudents[i].firstName;
            var stuLast =  allStudents[i].lastName;
            var stuGrade =  allStudents[i].grade;
            var stuId =  allStudents[i].studentId;
            t += "<tr><td>" + stuFirst + "</td>";
            t += "<td>" + stuLast + "</td>";
            t += "<td>" + stuGrade + "</td>";
            t += "<td>" + stuId + "</td></tr>";
        }
        t+="</table>";
        console.log(t);
        document.getElementById("stuInfo").innerHTML = t;

            // document.getElementById("s").innerHTML = stuFirst;
            // document.getElementById("firstRow").innerHTML = stuFirst;
        }

    if(category == "section"){


    }
    if(category=="teacher"){


    }
}

function addStu() {
    document.getElementById("students").style.display = "inline";
    console.log(allStudents);
}

function addTea() {
    document.getElementById("teachers").style.display = "inline";
}
function addSec() {
    document.getElementById("sections").style.display = "inline";
}

function addStudent() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var grade = document.getElementById("grade").value;
    var studentId = document.getElementById("id").value;

    allStudents.push(new Student(firstName, lastName, grade, studentId));
    document.getElementById("students").innerHTML = "Student Added!";


    console.log(allStudents);
}

function addTeacher() {
    var firstName = document.getElementById("firsName").value;
    var lastName = document.getElementById("lasName").value;
    if( firstName == "" || lastName==""){
        document.getElementById("error").innerHTML = "Some fields have not been filled out! Please try again.";
    }else {
        allTeachers.push(new Teacher(firstName, lastName));
        document.getElementById("teachers").innerHTML = "Teacher Added!";
    }
    console.log(allTeachers);
}

function addSection() {
    var name = document.getElementById("name").value;
    var teacher = document.getElementById("teacher").value;
    var currentSize = document.getElementById("currentSize").value;
    allSdocument.getElementById("sections").innerHTML = "Section Added!";
    console.log(allSections);
}

function addStutoSec() {
    document.getElementById("add").style.display = "inline";
}


