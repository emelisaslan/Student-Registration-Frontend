import axios from 'axios';

// REST API Endpoint URL
const STUDENTS_REST_API_URL = 'http://localhost:8080/api/students';

// Run validation for create or update student
const runValidation = (student) => {
    return (!student.id || isNaN(Number.parseInt(student.id)) || !student.name ||
    !student.surname ||!student.phoneNumber || !student.city || !student.district || !student.description);
};

// Create Post or Put Student Obj
export const createStudentObj = (student) => {
    let formData = new FormData();
    formData.append('id', student.id);
    formData.append('name', student.name);
    formData.append('surname', student.surname);
    formData.append('city', student.city);
    formData.append('phoneNumber', student.phoneNumber);
    formData.append('district', student.district);
    formData.append('description', student.description);
    formData.append("file", student.file);
    return formData;
};

// Creates new student and checks for validations
export const createStudent = (student) => {
    if(runValidation(student))
        return new Promise((resolve, reject) => reject());
    
    return axios({ 
        method: 'post',
        url: STUDENTS_REST_API_URL,
        data: createStudentObj(student), 
        headers: { 'Content-Type' : 'multipart/form-data' }
    });
};

// Updates existing student and checks for validations
export const updateStudent = (student) => {
    if(runValidation(student))
        return new Promise((resolve, reject) => reject());
    
    return axios.put(STUDENTS_REST_API_URL, createStudentObj(student));
};

// Reading all students from the backend
export const readStudents = () => {
    return axios.get(STUDENTS_REST_API_URL);
};

// Reading student by id from the backend
export const readStudentById = (studentId) => {
    return studentId ? axios.get(STUDENTS_REST_API_URL + "/" + studentId) :
    new Promise((resolve, reject) => reject());
};

// Deleting student by id from the backend
export const deleteStudent = (studentId) => {
    return studentId ? axios.delete(STUDENTS_REST_API_URL + "/" + studentId) :
    new Promise((resolve, reject) => reject());
};