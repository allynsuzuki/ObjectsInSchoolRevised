
function viewInfo(){
    document.getElementById("div").innerHTML = "";
    document.getElementById("add").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("addStudents").style.display = "none";
    document.getElementById("addStudents").style.display = "none";
    document.getElementById("teachers").style.display = "none";
    document.getElementById("sections").style.display = "none";
    document.getElementById("students").style.display = "none";
    t="";
    var category = document.getElementById("list").value;
    if(category == "student"){
        var t ="<table >";
        t+= "<tr><td>First Name</td>";
        t += "<td>" + 'Last Name' + "</td>";
        t += "<td>" + 'Grade' + "</td></tr>";
        for(var i = 0; i<allStudents.length; i++) {
            var stuFirst = allStudents[i].firstName;
            var stuLast =  allStudents[i].lastName;
            var stuGrade =  allStudents[i].grade;
            t += "<tr><td>" + stuFirst + "</td>";
            t += "<td>" + stuLast + "</td>";
            t += "<td>" + stuGrade + "</td></tr>";
        }
        t+="</table>";
        document.getElementById("div").innerHTML = t;

        }

    if(category == "section"){
        var t ="<table border='1'>";
        t+= "<tr><td>Subject</td>";
        t += "<td>" + 'Teacher' + "</td>";
        t += "<td>" + 'Current Size' + "</td>";
        for(var i = 0; i<allSections.length; i++) {
            var secName = allSections[i].name;
            var secTeacher =  allSections[i].teacher;
            var secCurrentSize =  allSections[i].currentSize;
            var sectionId = allSections[i].id;
            console.log(sectionId);
            t += "<tr><td><a href='#' onclick='studentList(" + sectionId + ")'>" + secName + "</a></td>";
            t += "<td>" + secTeacher + "</td>";
            t += "<td>" + secCurrentSize + "</td></tr>";
        }
        t+="</table>";
        document.getElementById("div").innerHTML = t;



    }
    if(category=="teacher"){
        var t ="<table border='1'>";
        t+= "<tr><td>First Name</td>";
        t += "<td>" + 'Last Name' + "</td>";
        t += "<td>" + 'Subject' + "</td>";
        for(var i = 0; i<allTeachers.length; i++) {
            var teaFirst = allTeachers[i].firstName;
            var teaLast =  allTeachers[i].lastName;
            var teaSubject = allTeachers[i].subject;
            t += "<tr><td>" + teaFirst + "</td>";
            t += "<td>" + teaLast + "</td>";
            t +="<td>" + teaSubject + "</td></tr>";
        }
        t+="</table>";
        document.getElementById("div").innerHTML = t;

    }
}

function search(){
    document.getElementById("add").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("addStudents").style.display = "none";
    document.getElementById("addStudents").style.display = "none";
    document.getElementById("teachers").style.display = "none";
    document.getElementById("sections").style.display = "none";
    var t = "";
    var search = document.getElementById("search").value;
    var results = [];
    for(var i=0; i<allStudents.length; i++) {
        if (allStudents[i].firstName.indexOf(search) > -1 || allStudents[i].lastName.indexOf(search) > -1) {
            results.push(allStudents[i]);
        }
    }
    if(results.length == 0){
        document.getElementById("div").innerHTML = "No students were found."

    }else{
        t ="<table >";
        t+= "<tr><td>First Name</td>";
        t += "<td>" + 'Last Name' + "</td>";
        t+= "<td>" + 'Sections' + "</td>";
        t+= "<td>" + 'Grade' + "</td><tr/>";
        for(var c=0; c<results.length; c++){
            var stuFirst = results[c].firstName;
            var stuLast =  results[c].lastName;
            var stuGrade = results[c].grade;
            var stuSecs =""
            if(results[c].sections.length== 0){
                stuSecs ="N/A";
            }else{
                for(var a=0; a<results[c].sections.length; a++){
                    stuSecs += " ";
                    stuSecs += results[c].sections[a].name;

                    if(a != results[c].sections.length-1) {
                        stuSecs += ",";
                    }

                }
            }

            t += "<tr><td>" + stuFirst + "</td>";
            t += "<td>" + stuLast + "</td>";
            t+= "<td>" + stuSecs + "</td>";
            t+= "<td>" + stuGrade + "</td></tr>";

        }
        document.getElementById("div").innerHTML = t
    }
}

function studentList(sectionId){
    document.getElementById("add").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("addStudents").style.display = "none";
    document.getElementById("addStudents").style.display = "none";
    document.getElementById("teachers").style.display = "none";
    document.getElementById("sections").style.display = "none";
    var sec = getSectionById(sectionId);
    document.getElementById("div").innerHTML="Current students in " + sec.name + ":";
    var t = "";
    if (sec.students.length==0){
        t += "Currently, there are no students in this section.";
    }else{
        t ="<table >";
        t+= "<tr><td>First Name</td>";
        t += "<td>" + 'Last Name' + "</td></tr>";
        for(var i = 0; i<sec.students.length; i++) {
            var stuFirst = sec.students[i].firstName;
            var stuLast =  sec.students[i].lastName;
            t += "<tr><td>" + stuFirst + "</td>";
            t += "<td>" + stuLast + "</td></tr>";
        }
    }

    t+="</table>";
    document.getElementById("div").innerHTML = t;
}

function editStu(){
    document.getElementById("students").style.display = "inline";
    document.getElementById("div").innerHTML = "";
    document.getElementById("add").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("addStudents").style.display = "none";
    document.getElementById("addStudents").style.display = "none";
    document.getElementById("teachers").style.display = "none";
    document.getElementById("sections").style.display = "none";
}

function addStu() {
    document.getElementById("addStudents").style.display = "inline";
    document.getElementById("div").innerHTML = "";
    document.getElementById("add").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("teachers").style.display = "none";
    document.getElementById("sections").style.display = "none";
    document.getElementById("students").style.display = "none";
}

function addTea() {
    document.getElementById("teachers").style.display = "inline";
    document.getElementById("div").innerHTML = "";
    document.getElementById("add").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("addStudents").style.display = "none";
    document.getElementById("addStudents").style.display = "none";
    document.getElementById("sections").style.display = "none";
    document.getElementById("students").style.display = "none";
}

function addSec() {
    document.getElementById("sections").style.display = "inline";
    document.getElementById("div").innerHTML = "";
    document.getElementById("add").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("addStudents").style.display = "none";
    document.getElementById("addStudents").style.display = "none";
    document.getElementById("teachers").style.display = "none";
    document.getElementById("students").style.display = "none";
}

function addStudent() {
    document.getElementById("error1").innerHTML ="";
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var grade = document.getElementById("grade").value;
    if(firstName=="" || lastName==""||grade==""){
        document.getElementById("error1").innerHTML = "Some fields have not been filled out! Please try again.";
    }else{
        allStudents.push(new Student(firstName, lastName, grade));
        // document.getElementById("students").innerHTML = "Student Added!";
        document.getElementById("div").innerHTML = "Student Added!";
        document.getElementById("addStudents").style.display = "none";
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value="";
        document.getElementById("grade").value="";
    }

}

function addTeacher() {
    document.getElementById("error2").innerHTML ="";
    var firstName = document.getElementById("firsName").value;
    var lastName = document.getElementById("lasName").value;
    var subject = document.getElementById("subject").value;
    if( firstName == "" || lastName=="" || subject==""){
        document.getElementById("error2").innerHTML = "Some fields have not been filled out! Please try again.";
    }else {
        allTeachers.push(new Teacher(firstName, lastName, subject));
        document.getElementById("div").innerHTML = "Teacher Added!";
        document.getElementById("teachers").style.display = "none";
    }

    document.getElementById("firsName").value ="";
    document.getElementById("lasName").value = "";
}

function addSection() {
    document.getElementById("error3").innerHTML ="";
    var name = document.getElementById("name").value;
    var teacher = document.getElementById("teacher").value;
    var currentSize = document.getElementById("currentSize").value;
    if(name==""||teacher==""||currentSize==""){
        document.getElementById("error3").innerHTML = "Some fields have not been filled out! Please try again.";
    }else{
        allSections.push(new Section(name, teacher, currentSize));
        document.getElementById("div").innerHTML = "Section Added!";
        document.getElementById("sections").style.display = "none";

    }
}

function stuToSec() {
    document.getElementById("add").style.display = "inline";
    document.getElementById("remove").style.display = "none";
    document.getElementById("addStudents").style.display = "none";
    var stu = "";
    for(var i=0; i< allStudents.length; i++){
        stu+="<option value='" +
            allStudents[i].id + "'>" +
            allStudents[i].firstName + " " +
            allStudents[i].lastName + "</option>"
    }
    document.getElementById("students2").innerHTML = stu;

    var sec = "";
    for(var e=0; e<allSections.length; e++){
        sec+="<option value='" +
            allSections[e].id + "'>" +
            allSections[e].name + "-" +
            allSections[e].teacher + "</option>"
    }
    document.getElementById("sections2").innerHTML = sec;
}

function stuFromSec(){
    document.getElementById("div").innerHTML = "";
    document.getElementById("add").style.display = "none";
    document.getElementById("remove").style.display = "inline";
    document.getElementById("addStudents").style.display = "none";
    var stu = "<option>Select Student</option>";
    for(var i=0; i< allStudents.length; i++){
        stu+="<option value='" +
            allStudents[i].id + "'>" +
            allStudents[i].firstName + " " +
            allStudents[i].lastName + "</option>"
    }
    document.getElementById("students3").innerHTML = stu;
    //

}

function sections(){
    var student = document.getElementById("students3").value;
    student = getStudentById(student);
    console.log(student);
    console.log(student.sections);
    var sec = "<option>Select Section</option>";
    for(var e=0; e<student.sections.length; e++){
        sec+="<option value='" +
            student.sections[e].id + "'>" +
            student.sections[e].name + "-" +
            student.sections[e].teacher + "</option>"
    }
    document.getElementById("sections3").innerHTML = sec;

}

function remove(){
    document.getElementById("addStudents").style.display = "none";
    document.getElementById("div").innerHTML = "";
    document.getElementById("add").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("teachers").style.display = "none";
    document.getElementById("sections").style.display = "none";
    document.getElementById("students").style.display = "none";

    var student = document.getElementById("students3").value;
    var section = document.getElementById("sections3").value;

    if(section=="" || student ==""){
        document.getElementById("div").innerHTML = "Error! No section or student recognized."
    }else{
        student = getStudentById(student);
        section = getSectionById(section);
        for(var i =0; i<student.sections.length; i++){
            if(student.sections[i].id==section.id){
                student.sections.splice(i);
            }
        }
        document.getElementById("div").innerHTML = "Student Removed."
    }




}

function getSectionById(section2){
    for(var i=0; i<allSections.length; i++){
        if(allSections[i].id==section2){
            return allSections[i]
        }
    }
}

function getStudentById(student2){
    for(var i=0; i<allStudents.length; i++){
        if(allStudents[i].id==student2){
            return allStudents[i]
        }
    }
}

function add(){
    document.getElementById("addStudents").style.display = "none";
    document.getElementById("div").innerHTML = "";
    document.getElementById("add").style.display = "none";
    document.getElementById("remove").style.display = "none";
    document.getElementById("teachers").style.display = "none";
    document.getElementById("sections").style.display = "none";
    document.getElementById("students").style.display = "none";
    var student2 =  document.getElementById("students2").value;
    var section2 =  document.getElementById("sections2").value;
    var section = getSectionById(section2);
    var student = getStudentById(student2);
    section.addStudent(student);
    student.addSection(section);

    document.getElementById("div").innerHTML = "Student has been added";
    document.getElementById("add").style.display = "none";

}




