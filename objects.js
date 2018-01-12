
function Student(firstName,lastName,grade,studentId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.studentId = studentId;

    /* needs to be implemented
    this.sections = [];
     */
}

function Teacher(firstName,lastName,teacherId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.teacherId = teacherId;

    /* needs to be implemented
    this.sections = [];
     */
}

var sectionId = 0;
function Section(name,currentSize,teacher) {
    this.maxSize = 32;
    this.name = name;
    this.currentSize = currentSize;
    this.students = [];
    this.teacher;
    this.addTeacher = function(teacher) {
        this.teacher = teacher;
    };
    this.addStudent = function(student) {
        this.students.push(student);
    };
    this.removeStudent = function(student) {
        this.currentSize --;
    };
    this.sectionSeatsRemaining = function() {
        return(this.maxSize - this.currentSize);
    };
}