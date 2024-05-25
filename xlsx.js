const xlsx = require('xlsx');

const filePath = 'C:\\Users\\Mor\\Desktop\\Book1.xlsx'; 

const workbook = xlsx.readFile(filePath);

const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const data = xlsx.utils.sheet_to_json(worksheet);

const Grades = [];

for (let i = 0; i < data.length; i++) {
    const grade = data[i].Grades;

    if (grade !== undefined) {
        Grades.push(grade); 
    }
}



function calculateAvg(numbers) {
    const total = numbers.reduce((sum, number) => sum + number, 0);
    return total / numbers.length;
}

const avg = calculateAvg(Grades);

console.log(`The average Grades is: ${avg}`);