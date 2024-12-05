function processStudents(students) {
  
  const filteredStudents = students.filter(student => student.marks > 60);

  const sortedStudents = filteredStudents.sort((a, b) => b.marks - a.marks);


  const sortedNames = sortedStudents.map(student => student.name);


  return sortedNames;
}
