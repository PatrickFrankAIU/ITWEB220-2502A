let employees = [
    { name: 'Pat', office: 'Miami', extension: 1305 },
    { name: 'Sandy', office: 'Miami', extension: 1302 },
    { name: 'Andrea', office: 'Atlanta', extension: 1403 },
];

function displayContents(employees) {
    for (let employee of employees) {
        console.log(employee.name + " - " + employee.office + " - " + employee.extension);    
        };
} 
displayContents(employees);

employees.sort((a, b) => a.extension - b.extension); 
    displayContents(employees);


employees.sort((a, b) => a.name.localeCompare(b.name)); 
    displayContents(employees);
