# Employee Search Application
This is a simple web application that allows users to search for employees by their names and displays their information. The application uses HTML, JavaScript, and JSON data to achieve this functionality.

# Table of Contents
* Introduction
* Features
* Technologies
* How to Use
* JSON Data Structure

# Introduction
The Employee Search application provides a user-friendly interface to search for employees based on their names. It fetches employee data from a JSON file and allows users to enter a name in the search form. When the user submits the form, the application displays the information of employees whose names match the search criteria.

# Features
* User-friendly search form to enter employee names.
* Display of employee information based on the search results.
* Handling of partial name matches for flexible search.

# Technologies
The application is built using the following technologies:

* HTML: Provides the structure and layout of the web page, including the search form and result display area.
* JavaScript: Implements the functionality to fetch JSON data, search for employees, and display the results dynamically.
* JSON: Contains the employee data in a structured format.

# How to Use
To use the Employee Search application:

1. Download or clone the repository to your local machine.
2. Open the index.html file in your web browser.
The web page will load, displaying a search form where you can enter the name of an employee. Upon clicking the "Search" button, the application will display the information of employees whose names match the search criteria.

# JSON Data Structure
The JSON data used in the application contains information about employees, including their first name, last name, age, email, occupation, and hobby. The structure of each employee object is as follows

  [
    {
      "firstName": "John",
      "lastName": "Doe",
      "age": 30,
      "email": "john.doe@example.com",
      "occupation": "Software Engineer",
      "hobby": "Photography"
    },
    // Other employee objects follow...
  ]
