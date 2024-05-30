function reverseArray(array){
    return array.slice().reverse()
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]


function uniqueValues(array1, array2) {
    let combinedArray = array1.concat(array2)
    let uniqueArray = []

    for (let index = 0; index < combinedArray.length; index++) {
        let value = combinedArray[index];
        if (uniqueArray.indexOf(value) == -1) {
            uniqueArray.push(value);
        }




    }
    return uniqueArray
}



const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]





function calculateAverageGrade(students){
    let gradesum = 0;
    for (let index = 0; index < students.length; index++) {
        const student = students[index];
       gradesum = student.grade + gradesum
    }
   
    return gradesum/students.length
}


const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students))