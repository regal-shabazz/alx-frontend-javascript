export default function getStudentsByLocation(students, city) {
  return students.filter((student) => {
    if(student.location === city) {
      return student
    }
  })  
}
