const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for cross-VM communication
app.use(cors());

// Health check endpoint
app.get('/', (req, res) => {
    res.send('Backend API Running on Backend-VM!');
});

// Status endpoint
app.get('/status', (req, res) => {
    res.json({
        status: 'OK',
        vm: 'Backend-VM',
        ip: '10.0.2.15',
        timestamp: new Date().toISOString()
    });
});

// Start server on all network interfaces
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`API running on port ${PORT}`);
    console.log(`Access at http://10.0.2.15:${PORT}`);
});
