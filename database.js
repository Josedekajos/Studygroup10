const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());
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
  const query = 'SELECT * FROM students'; 
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(results);
  });
});

// Fetch all of the different groups that have been created.
app.get('/api/groups', (req, res) => {
    const query = 'SELECT * FROM studygroup.groups';
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      res.json(results);
    });
  });

app.post('/api/data', (req, res) => {
  const { column1, column2 } = req.body;
  const query = 'INSERT INTO studygroup.students (column1, column2) VALUES (?, ?)';
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
