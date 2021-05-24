require('dotenv').config()
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/study', require('./routes/api/DCAP/study'));
app.use('/api/participant', require('./routes/api/DCAP/participant'));
app.use('/api/meal', require('./routes/api/meal'));
app.use('/api/mealportion', require('./routes/api/DCAP/mealportion'));

app.use('/api/food', require('./routes/api/food'));
app.use('/api/foodnut', require('./routes/api/foodnut'));
app.use('/api/foodport', require('./routes/api/foodportion'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
