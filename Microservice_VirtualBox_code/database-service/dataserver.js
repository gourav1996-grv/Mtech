const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// In-memory database
let database = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// Health check
app.get('/', (req, res) => {
    res.send('Database Service Running on Database-VM!');
});

// Get all data
app.get('/data', (req, res) => {
    res.json({
        data: database,
        vm: 'Database-VM',
        ip: '10.0.2.4'
    });
});

// Start server
const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Data service running on port ${PORT}`);
    console.log(`Access at http://10.0.2.4:${PORT}`);
});
