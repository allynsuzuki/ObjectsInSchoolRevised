var allStudents = [];
var allTeachers = [];
var allSections = [];

allStudents.push(new Student("Joe","Cohn",11,123456));
allStudents.push(new Student("Jane","Smith",12,123457));
allStudents.push(new Student("Trent","Arrington",10,123458));
allStudents.push(new Student("Becky","Powers",9,123459));
allStudents.push(new Student("Jen","Ramirez",12,123460));

allTeachers.push(new Teacher("Masha","Albrecht","Math"));
allTeachers.push(new Teacher("Nakia","Baird","Math"));
allTeachers.push(new Teacher("Keldon","Clegg","History"));
allTeachers.push(new Teacher("Matt","Albinson","CS"));
allTeachers.push(new Teacher("Carl","Rogers","English"));

allSections.push(new Section("Math 2", "Albrecht", 30));
allSections.push(new Section("Math 3", "Baird", 25));
allSections.push(new Section("US History", "Clegg", 30));
allSections.push(new Section("CS", "Albinson", 32));
allSections.push(new Section("English","Jimenez", 30));

var allItems = [allStudents,allTeachers,allSections];

