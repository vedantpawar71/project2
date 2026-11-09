

const express = require('express');

const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to my JavaScript Server!');
});

// Login route
app.get('/login', (req, res) => {
    res.send('Login Page');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
