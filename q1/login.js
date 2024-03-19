const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 6000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'V@rshith7403',
  database: 'devopslab'
});

connection.connect();

app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM login', (error, results) => {
    if (error) {
      console.log("Unable to get data",error);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
