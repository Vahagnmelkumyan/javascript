//3.
const employees = [
    {name: "Karen", department: "HR"},
    {name: "John", department: "IT"},
    {name: "Margarita", department: "HR"},
    {name: "Aram", department: "Finance"},
    {name: "Nina", department: "HR"}
]

function countDep(employees) {
    const depCounts = {};

    employees.forEach(employee => {
        const department = employee.department;
        depCounts[department] = (depCounts[department] || 0) + 1;
    });

    return depCounts;
}
console.log(countDep(employees));

//2.
  const cars = [
    {model: "Toyota", speed: 100},
    {model: "BMW", speed: 150},
    {model: "Lada", speed: 80},
    {model: "Audi", speed: 130},
    {model: "BYD", speed: 260}

]

const safeCars = [];
const speedingCars =[];

for (let i = 0; i < cars.length; i++) {
    if (cars[i].speed > 120) {
        speedingCars.push(cars[i]);
    } else {
        safeCars.push(cars[i]);
    }
}
console.log("Safe Cars:", safeCars);
console.log("Speeding Cars:", speedingCars);

//1.
  const students = [
    {name: "Anna", grade: 99},
     {name: "Mariam", grade: 10},
     {name: "Olivia", grade: 76},
     {name: "Emma", grade: 59}
]
for (let i = 0; i < students.length; i++) {
    let gradeStatus;

    switch (true) {
        case students[i].grade >= 90:
            gradeStatus = "Excellent";
            break;
        case students[i].grade >= 75:
            gradeStatus = "Good";
            break;
        case students[i].grade >= 50:
            gradeStatus = "Pass";
            break;
        default:
            gradeStatus = "Fail";
    }

    console.log(`${students[i].name}: ${gradeStatus}`);
}

