const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importă pachetul CORS
const appRoutes = require('./routes/AppRoutes');

const app = express();
const PORT = 3000;

// Middleware pentru a permite cereri CORS
app.use(cors({
  origin: 'http://localhost:3001', // Permite cereri doar de la frontend-ul tău
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specifică metodele permise
  credentials: true, // Dacă folosești cookies sau autentificare
}));

app.use(bodyParser.json());
app.use('/', appRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
