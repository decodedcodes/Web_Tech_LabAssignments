// Function to validate and save student data
function saveStudentData() {
    // Function to validate alphabetic input for name
    function getValidName() {
        let name;
        do {
            name = prompt("Enter Name:");
        } while (!/^[A-Za-z\s]+$/.test(name)); // Regex for alphabets and spaces only
        return name;
    }

    // Function to validate numeric input for roll number
    function getValidRollNumber() {
        let rollNumber;
        do {
            rollNumber = prompt("Enter Roll Number:");
        } while (!/^\d+$/.test(rollNumber)); // Regex for positive integers only
        return rollNumber;
    }

    // Function to validate numeric or float input for marks
    function getValidMarks() {
        let marks;
        do {
            marks = prompt("Enter Marks:");
        } while (!/^\d+(\.\d+)?$/.test(marks)); // Regex for integers or floats
        return marks;
    }

    // Creating a student object with validated inputs
    let student = {
        roll_number: getValidRollNumber(),
        name: getValidName(),
        marks: getValidMarks()
    };

    // Convert object to a string for file download
    let data = `Roll Number: ${student.roll_number}\nName: ${student.name}\nMarks: ${student.marks}`;

    // Display the details on the screen using document.write()
    document.write("<h2>Student Details</h2>");
    document.write(`<p>Roll Number: ${student.roll_number}</p>`);
    document.write(`<p>Name: ${student.name}</p>`);
    document.write(`<p>Marks: ${student.marks}</p>`);

    // Creating a Blob to enable file download
    let blob = new Blob([data], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "student_data.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Call the function to execute
saveStudentData();
