var id = 0;


function Student(firstName,lastName,grade) {
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.sections = [];
    this.addSection = function(section) {
        this.sections.push(section);
    }
}

function Teacher(firstName,lastName,subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.id = id++;
}


function Section(name,teacher, currentSize) {
    this.maxSize = 32;
    this.name = name;
    this.teacher = teacher;
    this.currentSize = currentSize;
    this.students = [];
    this.id = id++;
    this.teacher;
    this.addStudent = function(student) {
        this.students.push(student);
    };
    // this.removeStudent = function(student) {
    //     this.currentSize --;
    // };
    this.sectionSeatsRemaining = function() {
        return(this.maxSize - this.currentSize);
    };
}