let employees = [
    {
        name: "John Doe",
        position: "Project Manager",
        description: "Oversees project development and handles team management.",
        email: "john.doe@example.com",
        img: "image1.jpg"
    },
    {
        name: "Jane Smith",
        position: "Software Developer",
        description: "Specializes in backend development and database management.",
        email: "jane.smith@example.com",
        img: "image2.jpg"
    },
    {
        name: "Michael Brown",
        position: "UI/UX Designer",
        description: "Designs user interfaces and improves user experience.",
        email: "michael.brown@example.com",
        img: "image3.jpg"
    },
    {
        name: "Linda Green",
        position: "Quality Assurance Engineer",
        description: "Ensures software quality through rigorous testing.",
        email: "linda.green@example.com",
        img: "image4.jpg"
    },
    {
        name: "Richard Ross",
        position: "Dev Ops Engineer",
        description: "Manages infrastructure, automates workflows, and ensures seamless integration and deployment of applications.",
        email: "richard.ross@example.com",
        img: "image0.jpg"
    }
];

function displayEmployee(employeeId) {
    let employee = employees[employeeId - 1];
    document.getElementById('employee-img').src = employee.img;
    document.getElementById('employee-name').textContent = employee.name;
    document.getElementById('employee-position').textContent = employee.position;
    document.getElementById('employee-description').textContent = employee.description;
    document.getElementById('employee-email').textContent = employee.email;
}


const employeeInfo = document.querySelectorAll("#employee-list ul li");

employeeInfo.forEach((item, index) => {
    item.addEventListener("click", () => {
        displayEmployee(index + 1)
    });
});
