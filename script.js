/** @format */

let students = [
{ id:1, name: "john", age:"18", marks:80 }, 
{ id:2, name: "jack", age:"20", marks:85 }, 
{ id:3, name: "karen", age:"19", marks:35 }

]

  
// Function to print students with marks over 50 using map

  function printStudentsByMap() {
    console.log("\nStudents above 50 marks using map()");
    const StudentsAbove50 = students
      .filter(student => student.marks > 50)
      .map(student => `Id N0.:${student.id} Name: ${student.name} Obtained marks: ${student.marks} age: ${student.age}`);  
    
    console.log(StudentsAbove50);  
}
printStudentsByMap();

//Print all students alongwith info.
 function PrintStudentbyForEach(){
    console.log("\nStudents above 50 marks using forEach()");

    const StudentsAbove50 = students.filter(student => student.marks > 50); 

    StudentsAbove50.forEach(studentDetail => console.log(studentDetail));
}
PrintStudentbyForEach();

//Adding new object into array

addData = (rec)=>{
    console.log("\nStudents List After Adding new record");
    const moreStudent = {id:4,name:"susan",age:"20",marks:45};
    const studentInfo = rec.push(moreStudent);
    
    rec.forEach(studentInfo => console.log(studentInfo));

}
addData(students);

//filtering failed students

removeFailedStudent =(obj)=>{
    console.log("\nStudents List After deleting failed record");
    const condition = obj => obj.marks < 50;
    const newobj = obj.filter(obj => !condition(obj));
    console.log(newobj);
   
}
removeFailedStudent(students);


//concating Arrays
//other Array of objects
const array =[
    {id:11, name: 'Alice', age :"20", marks: 45 }, 
    { id:12, name: "Eva", age:"23", marks:65 }, 
    { id:13, name: "Laren", age:"29", marks:85 }
]
ConcatenateArray = (arr1,arr2) =>{
    const arr = arr1.concat(arr2);
    
}
console.log("\nStudents List After concatenate");
console.log(ConcatenateArray(students,array));
