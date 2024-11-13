const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'library',
});

connection.connect((err) => {
  if (err) {
    return console.error('Error connecting to the database: ' + err.stack);
  }
  console.log('Connected to the database');
});

// Retrieve data from the "books" table
const query = 'SELECT * FROM books';

connection.query(query, (err, results) => {
  if (err) {
    return console.error('Error executing query: ' + err.stack);
  }

  // Display the results
  console.log('Books in the library:');
  results.forEach((row) => {
    console.log(`ID: ${row.id}, Title: ${row.title}, Author: ${row.author}, Year: ${row.year}`);
  });
});

// Close the connection
connection.end((err) => {
  if (err) {
    return console.error('Error closing connection: ' + err.stack);
  }
  console.log('Connection closed');
});