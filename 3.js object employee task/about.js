employee1 = {
    fullName: "Elnur Karimov",
    salary: 900,
    department: "IT",
    experienceYear: 2 ,
    age: 19 ,
    isManager: false,
    startYear: 2022,
    email: "bfhgdbfvg@gmail.com",
    address: 
    {
    city: "Baku"
    },
    phoneNumber: 0o514444444,
    getYearsInCompany: function () {
        return new Date().getFullYear - this.startYear;
    },
    promote: function (newSalary) {
        this.salary = newSalary;
        console.log("Maaşınız yüksəldi");
        return newSalary
    }
}
employee2 = {
    fullName: "Orxan Orudjov",
    salary: 4200,
    department: "IT",
    experienceYear: 7 ,
    age: 23 ,
    isManager: false,
    startYear: 2016,
    email: "orx123dbfvg@gmail.com",
    address: 
    {
    city: "Baku"
    },
    phoneNumber: 0o514344554,
    getYearsInCompany: function () {
        return new Date().getFullYear - this.startYear;
    },
    promote: function (newSalary) {
        this.salary = newSalary;
        console.log("Maaşınız yüksəldi");
        return newSalary
    }
}
employee3 = {
    fullName: "Sarxan Talibli",
    salary: 6000,
    department: "IT",
    experienceYear: 12 ,
    age: 34 ,
    isManager: true,
    startYear: 2011,
    email: "talibli1bfvg@gmail.com",
    address: 
    {
    city: "Ganja"
    },
    phoneNumber: 0o512324244,
    getYearsInCompany: function () {
        return new Date().getFullYear - this.startYear;
    },
    promote: function (newSalary) {
        this.salary = newSalary;
        console.log("Maaşınız yüksəldi");
        return newSalary
    }
}
employee4 = {
    fullName: "Elmar Islamzade ",
    salary: 1400,
    department: "HR",
    experienceYear: 3,
    age: 24 ,
    isManager: false,
    startYear: 2022,
    email: "islamzadevg@gmail.com",
    address: 
    {
    city: "Qobustan"
    },
    phoneNumber: 0o512324244,
    getYearsInCompany: function () {
        return new Date().getFullYear - this.startYear;
    },
    promote: function (newSalary) {
        this.salary = newSalary;
        console.log("Maaşınız yüksəldi");
        return newSalary
    }
}
employee5 = {
    fullName: "Elnur Memmedov",
    salary: 1200,
    department: "HR",
    experienceYear: 6,
    age: 34 ,
    isManager: true,
    startYear: 2019,
    email: "memmedlig@gmail.com",
    address: 
    {
    city: "Baku"
    },
    phoneNumber: 0o512324254,
    getYearsInCompany: function () {
        return new Date().getFullYear - this.startYear;
    },
    promote: function (newSalary) {
        this.salary = newSalary;
        console.log("Maaşınız yüksəldi");
        return newSalary
    }
}
employees = [employee1, employee2, employee3, employee4, employee5];
const highOfSalary = () => {
    return employees.filter((employee) => {
        return employee.salary > 1500;
    });
};

const highSalaryEmployees = highOfSalary();

highSalaryEmployees.forEach(employee => {
    console.log(`"${employee.fullName} - ${employee.salary}"`);
});

const employeesCity = (employees) => {
    return employees.reduce((accumulator, employee) => {
        const city = employee.address.city; 
        if (!accumulator[city]) {
            accumulator[city] = [];
        }
        accumulator[city].push(employee.fullName);
        
        return accumulator;
    }, {}); 
};

const groupEmployees = employeesCity(employees);
console.log(groupEmployees);


employees.sort(function(a, b) {
    return a.age - b.age; 
});

let sortArray = []; 

for (let i = 0; i < employees.length; i++) {
    sortArray[i] = {};
    sortArray[i].fullName = employees[i].fullName; 
    sortArray[i].age = employees[i].age; 
}

console.log(sortArray);


const promoteLowSalaryEmployees = (employees, proposedSalary) => {
    const updatedEmployees = []; 

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].salary < 1500) { 
            const newSalary = employees[i].promote(proposedSalary); 
            updatedEmployees.push({
                fullName: employees[i].fullName,
                newSalary: newSalary,  
                proposedSalary: proposedSalary   
            });
        }
    }

    return updatedEmployees;  
};

const resultArray = promoteLowSalaryEmployees(employees, 2000);
console.log(resultArray);


const averageSalary = employees.reduce((total, employee) => total + employee.salary, 0) / employees.length;

console.log("Ortalama maaş:", averageSalary);



const averageSalaryByDepartment = (employees) => {
    const departmentSalaries = {};

    employees.forEach(employee => {
        const department = employee.department;  
        const salary = employee.salary;  

        if (!departmentSalaries[department]) {
            departmentSalaries[department] = {
                totalSalary: 0,  
                count: 0  
            };
        }
        departmentSalaries[department].totalSalary += salary;
        departmentSalaries[department].count += 1;
    });


    const averageSalaries = {};
    for (const department in departmentSalaries) {
        const { totalSalary, count } = departmentSalaries[department];
        const average = totalSalary / count;   
        averageSalaries[department] = average;    
    }

    return averageSalaries;
};

const result = averageSalaryByDepartment(employees);
console.log(result);



function filterEmployees(employees, criteria) {
    return employees
        .filter(employee => {
            if (criteria.experienceYear !== undefined && employee.experienceYear >= criteria.experienceYear) {
                return false;      
            }
            if (criteria.salary !== undefined && employee.salary >= criteria.salary) {
                return false;      
            }
            return true;    
        })
        .map(employee => ({
            experienceYear: employee.experienceYear,    
            salary: employee.salary    
        }));
}

const criteria = {
    experienceYear: 5,
    salary: 1500
};

const filteredEmployees = filterEmployees(employees, criteria);
console.log(filteredEmployees);     



function getMostExperiencedEmployees(employees) {
    const mostExperienced = {};

    for (let i = 0; i < employees.length; i++) {
        const dept = employees[i].department;
        
        if (!mostExperienced[dept] || employees[i].experienceYear > mostExperienced[dept].experienceYear) {
            mostExperienced[dept] = employees[i];
        }
    }

    for (const dept in mostExperienced) {
        console.log(`Departament: ${dept}, İşçi: ${mostExperienced[dept].fullName}, Təcrübə İli: ${mostExperienced[dept].experienceYear}`);
    }
}

getMostExperiencedEmployees(employees);
