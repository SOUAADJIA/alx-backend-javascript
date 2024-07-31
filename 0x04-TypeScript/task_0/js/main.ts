// task_0/js/main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 25,
  location: "San Francisco",
};

const student2: Student = {
  firstName: "James",
  lastName: "Bond",
  age: 32,
  location: "Columbia",
};

const studentsList: Student[] = [student1, student2];

// Render a table
const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});

document.body.appendChild(table);

