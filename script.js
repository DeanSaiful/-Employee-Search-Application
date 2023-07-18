document.getElementById('searchForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Fetch the JSON data file (replace 'data.json' with the path to your JSON file)
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const searchName = document.getElementById('employeeName').value.trim().toLowerCase();
      const employees = data;
      let foundEmployees = [];

      // Search for employees with matching names
      for (const employee of employees) {
        const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
        if (fullName.includes(searchName)) {
          foundEmployees.push(employee);
        }
      }

      // Display the search results
      displayResults(foundEmployees);
    })
    .catch(error => console.error('Error fetching data:', error));
});

function displayResults(employees) {
  const displayDiv = document.getElementById('displayResults');

  if (employees.length === 0) {
    displayDiv.innerHTML = '<p>No employees found.</p>';
  } else {
    let output = '<h2>Search Results:</h2><ul>';

    for (const employee of employees) {
      output += `
        <li>
          <strong>Name:</strong> ${employee.firstName} ${employee.lastName}<br>
          <strong>Age:</strong> ${employee.age}<br>
          <strong>Email:</strong> ${employee.email}<br>
          <strong>Occupation:</strong> ${employee.occupation}<br>
          <strong>Hobby:</strong> ${employee.hobby}
        </li>
      `;
    }

    output += '</ul>';
    displayDiv.innerHTML = output;
  }
}
