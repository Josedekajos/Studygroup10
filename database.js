const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Allow requests from your HTML page
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'studygroup'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.message);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Route to fetch data
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM your_table_name'; 
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(results);
  });
});

// Route to insert data
app.post('/api/data', (req, res) => {
  const { column1, column2 } = req.body; // Replace with your column names
  const query = 'INSERT INTO your_table_name (column1, column2) VALUES (?, ?)';
  db.query(query, [column1, column2], (err, result) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json({ message: 'Data inserted successfully', id: result.insertId });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
