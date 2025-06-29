const express = require('express');
const cors = require('cors');
require('dotenv').config();

const weatherRoutes = require('./weatherRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use('/weather', weatherRoutes);

app.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});