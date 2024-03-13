export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const filteredStudent = { ...student };
    const gradeObj = newGrades.find((item) => item.studentId === student.id);
    filteredStudent.grade = gradeObj ? gradeObj.grade : 'N/A';

    return filteredStudent;
  });
}
