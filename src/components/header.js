import React from "react"

const Header = ({children}) => (
  <header className="site-header">
    {children}
  </header>
)

<?php
$query = $_GET['query'];

// Connect to the database and retrieve the search results
$search_results = search_database($query);

// Display the search results
echo "<h2>Search Results:</h2>";
foreach ($search_results as $result) {
  echo "<p>" . $result . "</p>";
}

// Example function to search the database and return the results
function search_database($query) {
  // Connect to the database
  $db = mysqli_connect("localhost", "username", "password", "database_name");

  // Escape the query to prevent SQL injection attacks
  $query = mysqli_real_escape_string($db, $query);

  // Run the SQL query to search the database
  $result = mysqli_query($db, "SELECT * FROM articles WHERE title LIKE '%$query%' OR content LIKE '%$query%'");

  // Return the search results as an array
  return mysqli_fetch_all($result, MYSQLI_ASSOC);
}


export default Header
